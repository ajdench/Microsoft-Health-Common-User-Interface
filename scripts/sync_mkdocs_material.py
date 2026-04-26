#!/usr/bin/env python3
"""Generate the Material for MkDocs source tree from the canonical wiki corpus."""

from __future__ import annotations

import json
import posixpath
import re
import shutil
from pathlib import Path, PurePosixPath
from urllib.parse import quote, unquote

REPO_ROOT = Path(__file__).resolve().parents[1]
DOCS_ROOT = REPO_ROOT / "mkdocs-material" / "docs"
LINKED_REPO_ROOT = "linked-repo"

ROOT_MARKDOWN_FILES = ["index.md", "README.md", "AGENTS.md", "log.md"]
MARKDOWN_DIRS = ["wiki", "derived"]
JSON_DIRS = ["raw/metadata", "raw/manifests"]
ROOT_DOC_OVERRIDES = {
    "README.md": "readme.md",
    "AGENTS.md": "agents.md",
}

VIEWABLE_UI_ASSETS = {
    "msp2190.png": "raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/DesignGuide/QuickGuides/SearchPrescribe/images/msp2190.png",
    "search-and-prescribe.jpg": "raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/SearchAndPrescribe.jpg",
    "patient-banner.gif": "raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/images/PatientBanner.gif",
    "graphing.gif": "raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/graphing.gif",
    "single-concept-matching.jpg": "raw/sources/toolkit/mscui/Solutions/Main/Microsoft.Cui.SampleWebsite/Components/Images/SingleConceptMatching.jpg",
}

LINK_PATTERN = re.compile(r"(!?\[[^\]]*\]\()([^)]+)(\))")
FENCE_PATTERN = re.compile(r"^\s*(```|~~~)")


def as_posix(path: Path | PurePosixPath | str) -> str:
    return str(path).replace("\\", "/")


def is_external_target(target: str) -> bool:
    return bool(re.match(r"^(?:[a-z][a-z0-9+.-]*:|//)", target, flags=re.IGNORECASE))


def split_target(target: str) -> tuple[str, str]:
    indexes = [index for index in (target.find("#"), target.find("?")) if index >= 0]
    if not indexes:
        return target, ""
    split_at = min(indexes)
    return target[:split_at], target[split_at:]


def markdown_sources() -> set[str]:
    sources = set(ROOT_MARKDOWN_FILES)
    for directory in MARKDOWN_DIRS:
        root = REPO_ROOT / directory
        if not root.exists():
            continue
        for path in root.rglob("*.md"):
            sources.add(as_posix(path.relative_to(REPO_ROOT)))
    return sources


def json_sources() -> set[str]:
    sources = set()
    for directory in JSON_DIRS:
        root = REPO_ROOT / directory
        if not root.exists():
            continue
        for path in root.rglob("*.json"):
            sources.add(as_posix(path.relative_to(REPO_ROOT)))
    return sources


MIRRORED_MARKDOWN = markdown_sources()
MIRRORED_JSON = json_sources()


def target_doc_for_source(repo_relative_path: str) -> str | None:
    if repo_relative_path in ROOT_DOC_OVERRIDES:
        return ROOT_DOC_OVERRIDES[repo_relative_path]
    if repo_relative_path in MIRRORED_MARKDOWN:
        return repo_relative_path
    if repo_relative_path in MIRRORED_JSON:
        return repo_relative_path.removesuffix(".json") + ".md"
    return None


def relative_href(source_doc_relative_path: str, target_doc_relative_path: str, suffix: str = "") -> str:
    source_directory = posixpath.dirname(source_doc_relative_path) or "."
    relative_path = posixpath.relpath(target_doc_relative_path, source_directory)
    return quote(relative_path, safe="/#?%") + suffix


def copy_linked_artifact(source_path: Path, repo_relative_path: str) -> str:
    if source_path.is_dir():
        target_relative_path = f"{LINKED_REPO_ROOT}/{repo_relative_path}"
        target_path = DOCS_ROOT / target_relative_path
        if target_path.exists():
            shutil.rmtree(target_path)
        shutil.copytree(source_path, target_path)
        return target_relative_path

    target_relative_path = f"{LINKED_REPO_ROOT}/{repo_relative_path}"
    if source_path.suffix.lower() == ".md":
        target_relative_path = f"{target_relative_path}.txt"

    target_path = DOCS_ROOT / target_relative_path
    target_path.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(source_path, target_path)
    return target_relative_path


def resolve_repo_target(source_repo_relative_path: str, target_path: str) -> str | None:
    decoded_target = unquote(target_path)
    source_directory = posixpath.dirname(source_repo_relative_path)
    resolved = posixpath.normpath(posixpath.join(source_directory, decoded_target))
    if resolved == "." or resolved.startswith("../") or resolved == "..":
        return None
    return resolved


def rewrite_target(raw_target: str, source_repo_relative_path: str, source_doc_relative_path: str) -> str:
    target = raw_target.strip()
    wrapped_in_angles = target.startswith("<") and target.endswith(">")
    if wrapped_in_angles:
        target = target[1:-1]

    if not target or target.startswith("#") or is_external_target(target):
        return raw_target

    path_part, suffix = split_target(target)

    if path_part.startswith("/"):
        target_doc_relative_path = path_part.lstrip("/")
        rewritten = relative_href(source_doc_relative_path, target_doc_relative_path, suffix)
        return f"<{rewritten}>" if wrapped_in_angles else rewritten

    repo_relative_path = resolve_repo_target(source_repo_relative_path, path_part)
    if repo_relative_path is None:
        return raw_target

    mirrored_doc = target_doc_for_source(repo_relative_path)
    if mirrored_doc:
        rewritten = relative_href(source_doc_relative_path, mirrored_doc, suffix)
        return f"<{rewritten}>" if wrapped_in_angles else rewritten

    source_path = REPO_ROOT / repo_relative_path
    if source_path.exists():
        linked_relative_path = copy_linked_artifact(source_path, repo_relative_path)
        rewritten = relative_href(source_doc_relative_path, linked_relative_path, suffix)
        return f"<{rewritten}>" if wrapped_in_angles else rewritten

    return raw_target


def rewrite_markdown_links(content: str, source_repo_relative_path: str, source_doc_relative_path: str) -> str:
    rewritten_lines: list[str] = []
    in_fence = False

    for line in content.splitlines():
        if FENCE_PATTERN.match(line):
            in_fence = not in_fence
            rewritten_lines.append(line)
            continue

        if in_fence:
            rewritten_lines.append(line)
            continue

        def replace(match: re.Match[str]) -> str:
            prefix, raw_target, suffix = match.groups()
            return f"{prefix}{rewrite_target(raw_target, source_repo_relative_path, source_doc_relative_path)}{suffix}"

        rewritten_lines.append(LINK_PATTERN.sub(replace, line))

    trailing_newline = "\n" if content.endswith("\n") else ""
    return "\n".join(rewritten_lines) + trailing_newline


def copy_markdown_file(source_path: Path) -> None:
    source_repo_relative_path = as_posix(source_path.relative_to(REPO_ROOT))
    target_relative_path = target_doc_for_source(source_repo_relative_path)
    if target_relative_path is None:
        return

    content = source_path.read_text(encoding="utf-8").lstrip("\ufeff")
    content = rewrite_markdown_links(content, source_repo_relative_path, target_relative_path)
    target_path = DOCS_ROOT / target_relative_path
    target_path.parent.mkdir(parents=True, exist_ok=True)
    target_path.write_text(content, encoding="utf-8")


def humanize_filename(path: str) -> str:
    stem = Path(path).stem
    return re.sub(r"\s+", " ", re.sub(r"[-_]+", " ", stem)).strip().title()


def json_markdown(source_repo_relative_path: str, parsed: object) -> str:
    title = humanize_filename(source_repo_relative_path)
    if isinstance(parsed, dict) and isinstance(parsed.get("title"), str):
        title = parsed["title"]

    return "\n".join(
        [
            f"# {title}",
            "",
            f"> Canonical source: `{source_repo_relative_path}`",
            "",
            "```json",
            json.dumps(parsed, indent=2, ensure_ascii=False),
            "```",
            "",
        ]
    )


def copy_json_file(source_path: Path) -> None:
    source_repo_relative_path = as_posix(source_path.relative_to(REPO_ROOT))
    target_relative_path = target_doc_for_source(source_repo_relative_path)
    if target_relative_path is None:
        return

    parsed = json.loads(source_path.read_text(encoding="utf-8"))
    target_path = DOCS_ROOT / target_relative_path
    target_path.parent.mkdir(parents=True, exist_ok=True)
    target_path.write_text(json_markdown(source_repo_relative_path, parsed), encoding="utf-8")


def copy_viewable_ui_assets() -> None:
    target_root = DOCS_ROOT / "viewable-ui-examples"
    target_root.mkdir(parents=True, exist_ok=True)

    for target_name, raw_relative_path in VIEWABLE_UI_ASSETS.items():
        source_path = REPO_ROOT / raw_relative_path
        if not source_path.exists():
            source_path = REPO_ROOT / "msh-cui-wiki" / "public" / "viewable-ui-examples" / target_name
        if source_path.exists():
            shutil.copy2(source_path, target_root / target_name)


def sync() -> None:
    if DOCS_ROOT.exists():
        shutil.rmtree(DOCS_ROOT)
    DOCS_ROOT.mkdir(parents=True)

    for file_name in ROOT_MARKDOWN_FILES:
        copy_markdown_file(REPO_ROOT / file_name)

    for directory in MARKDOWN_DIRS:
        root = REPO_ROOT / directory
        if not root.exists():
            continue
        for path in sorted(root.rglob("*.md")):
            copy_markdown_file(path)

    for directory in JSON_DIRS:
        root = REPO_ROOT / directory
        if not root.exists():
            continue
        for path in sorted(root.rglob("*.json")):
            copy_json_file(path)

    copy_viewable_ui_assets()

    sync_meta = {"generated_from": as_posix(REPO_ROOT), "docs_root": as_posix(DOCS_ROOT)}
    (DOCS_ROOT / ".sync-meta.json").write_text(f"{json.dumps(sync_meta, indent=2)}\n", encoding="utf-8")


if __name__ == "__main__":
    sync()
    print(f"[sync-mkdocs-material] Generated {DOCS_ROOT}")
