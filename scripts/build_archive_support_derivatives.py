#!/usr/bin/env python3

from __future__ import annotations

import hashlib
import json
import re
import subprocess
import zipfile
from html.parser import HTMLParser
from pathlib import Path
from xml.etree import ElementTree as ET


ROOT = Path("/Users/andrew/Projects/Microsoft Health Common User Interface")
RAW_ROOT = ROOT / "raw"
REFERENCES_ROOT = RAW_ROOT / "sources" / "references" / "nhs-archives"
ISB_STANDARDS_ROOT = REFERENCES_ROOT / "isb-standards"
ISB_DOCS_ROOT = ISB_STANDARDS_ROOT / "docs-pages"
ISB_DSCN_ROOT = ISB_STANDARDS_ROOT / "dscn-pdfs"
CUI_PROGRAMME_ROOT = REFERENCES_ROOT / "cui-programme"
PATIDENT_ZIP = RAW_ROOT / "sources" / "design-guidance" / "nhs-archived-guidance-2016" / "patident.zip"
ARCHIVE_PPT = RAW_ROOT / "sources" / "design-guidance" / "nhs-archived-guidance-2016" / "decsupportsumm.ppt"
METADATA_ROOT = RAW_ROOT / "metadata"
EXTRACTED_ROOT = ROOT / "derived" / "extracted-text" / "archive-support"
NORMALIZED_ROOT = ROOT / "derived" / "normalized-markdown" / "archive-support"
INVENTORIES_ROOT = ROOT / "derived" / "inventories"


ISB_STANDARD_ITEMS = [
    {
        "filename": "isb-132-address-input-and-display.html",
        "title": "ISB 1500 - Common User Interface - Address Input and Display",
        "original_url": "http://www.isb.nhs.uk/library/standard/132",
        "category": "archive context",
    },
    {
        "filename": "isb-133-date-display.html",
        "title": "ISB 1503 - Common User Interface - Date Display",
        "original_url": "http://www.isb.nhs.uk/library/standard/133",
        "category": "archive context",
    },
    {
        "filename": "isb-134-sex-and-current-gender-input-and-display.html",
        "title": "ISB 1507 - Common User Interface - Sex and Current Gender Input and Display",
        "original_url": "http://www.isb.nhs.uk/library/standard/134",
        "category": "archive context",
    },
    {
        "filename": "isb-135-nhs-number-input-and-display.html",
        "title": "ISB 1504 - Common User Interface - NHS Number Input and Display",
        "original_url": "http://www.isb.nhs.uk/library/standard/135",
        "category": "archive context",
    },
    {
        "filename": "isb-136-patient-banner.html",
        "title": "ISB 1505 - Common User Interface - Patient Banner",
        "original_url": "http://www.isb.nhs.uk/library/standard/136",
        "category": "archive context",
    },
    {
        "filename": "isb-137-patient-name-input-and-display.html",
        "title": "ISB 1506 - Common User Interface - Patient Name Input and Display",
        "original_url": "http://www.isb.nhs.uk/library/standard/137",
        "category": "archive context",
    },
    {
        "filename": "isb-138-telephone-number-input-and-display.html",
        "title": "ISB 1508 - Common User Interface - Telephone Number Input and Display",
        "original_url": "http://www.isb.nhs.uk/library/standard/138",
        "category": "archive context",
    },
    {
        "filename": "isb-139-time-display.html",
        "title": "ISB 1501 - Common User Interface - Time Display",
        "original_url": "http://www.isb.nhs.uk/library/standard/139",
        "category": "archive context",
    },
    {
        "filename": "isb-141-date-and-time-input.html",
        "title": "ISB 1502 - Common User Interface - Date and Time Input",
        "original_url": "http://www.isb.nhs.uk/library/standard/141",
        "category": "archive context",
    },
]


CUI_PROGRAMME_ITEMS = [
    {
        "filename": "2012-cui-home.html",
        "title": "NHS Common User Interface",
        "original_url": "http://www.cui.nhs.uk/Pages/NHSCommonUserInterface.aspx",
    },
    {
        "filename": "2012-cui-register.html",
        "title": "Register.aspx",
        "original_url": "http://www.cui.nhs.uk/Pages/Register.aspx",
    },
    {
        "filename": "nhs-cui-distribution-mechanism-user-guide.pdf",
        "title": "NHS CUI Distribution Mechanism User Guide",
        "original_url": "http://www.cui.nhs.uk/Pages/NHS CUI Distribution Mechanism User Guide.pdf",
    },
    {
        "filename": "privacy.html",
        "title": "Privacy Statement",
        "original_url": "http://www.cui.nhs.uk/Pages/Privacy.aspx",
    },
    {
        "filename": "sign-in-help.html",
        "title": "Sign In Help",
        "original_url": "http://www.cui.nhs.uk/Pages/SignInHelp.aspx",
    },
    {
        "filename": "forgot-password.html",
        "title": "Forgotten Password",
        "original_url": "http://www.cui.nhs.uk/Pages/ForgotPass.aspx",
    },
]


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def slugify(name: str) -> str:
    keep = []
    for ch in name.lower():
        if ch.isalnum():
            keep.append(ch)
        elif ch in {" ", "-", "_", "."}:
            keep.append("-")
    slug = "".join(keep)
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug.strip("-")


class HTMLTextExtractor(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.parts: list[str] = []
        self.skip_depth = 0

    def handle_starttag(self, tag: str, attrs) -> None:
        if tag in {"script", "style"}:
            self.skip_depth += 1
        if self.skip_depth:
            return
        if tag in {"p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6"}:
            self.parts.append("\n")

    def handle_endtag(self, tag: str) -> None:
        if tag in {"script", "style"} and self.skip_depth:
            self.skip_depth -= 1
        if self.skip_depth:
            return
        if tag in {"p", "div", "li", "tr", "table"}:
            self.parts.append("\n")

    def handle_data(self, data: str) -> None:
        if self.skip_depth:
            return
        self.parts.append(data)

    def get_text(self) -> str:
        text = "".join(self.parts)
        text = re.sub(r"\r", "", text)
        text = re.sub(r"[ \t]+\n", "\n", text)
        text = re.sub(r"\n{3,}", "\n\n", text)
        text = re.sub(r"[ \t]{2,}", " ", text)
        return text.strip() + "\n"


def normalize_markdown(source_path: Path, extracted_path: Path, output_path: Path, title: str, note: str) -> None:
    raw_text = extracted_path.read_text(encoding="utf-8", errors="ignore")
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(
        "\n".join(
            [
                f"# {title}",
                "",
                "## Provenance",
                f"- Source file: `{source_path.relative_to(ROOT)}`",
                f"- Extracted text: `{extracted_path.relative_to(ROOT)}`",
                f"- Normalization note: {note}",
                "",
                "## Extracted Text",
                "",
                raw_text.rstrip(),
                "",
            ]
        ),
        encoding="utf-8",
    )


def extract_pdf(source_path: Path, extracted_path: Path, title: str) -> None:
    extracted_path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(["pdftotext", "-layout", str(source_path), str(extracted_path)], check=True)
    normalize_markdown(
        source_path,
        extracted_path,
        NORMALIZED_ROOT / f"{extracted_path.stem}.md",
        title,
        "machine-cleaned `pdftotext -layout` output; verify against the PDF for exact formatting and pagination.",
    )


def extract_html(source_path: Path, extracted_path: Path, title: str) -> None:
    parser = HTMLTextExtractor()
    parser.feed(source_path.read_text(encoding="utf-8", errors="ignore"))
    extracted_path.parent.mkdir(parents=True, exist_ok=True)
    extracted_path.write_text(parser.get_text(), encoding="utf-8")
    normalize_markdown(
        source_path,
        extracted_path,
        NORMALIZED_ROOT / f"{extracted_path.stem}.md",
        title,
        "HTML text extraction using a conservative parser; archive boilerplate may remain.",
    )


def read_shared_strings(book: zipfile.ZipFile) -> list[str]:
    if "xl/sharedStrings.xml" not in book.namelist():
        return []
    root = ET.fromstring(book.read("xl/sharedStrings.xml"))
    ns = {"a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    values = []
    for item in root.findall("a:si", ns):
        pieces = [node.text or "" for node in item.findall(".//a:t", ns)]
        values.append("".join(pieces))
    return values


def read_workbook_sheets(book: zipfile.ZipFile) -> list[tuple[str, str]]:
    ns = {
        "a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main",
        "r": "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
    }
    workbook = ET.fromstring(book.read("xl/workbook.xml"))
    rels = ET.fromstring(book.read("xl/_rels/workbook.xml.rels"))
    rel_map = {
        rel.attrib["Id"]: rel.attrib["Target"]
        for rel in rels
        if rel.attrib.get("Type", "").endswith("/worksheet")
    }
    items = []
    for sheet in workbook.findall("a:sheets/a:sheet", ns):
        rel_id = sheet.attrib[f"{{{ns['r']}}}id"]
        items.append((sheet.attrib["name"], "xl/" + rel_map[rel_id]))
    return items


def cell_value(cell, shared_strings: list[str], ns: dict[str, str]) -> str:
    cell_type = cell.attrib.get("t")
    value_node = cell.find("a:v", ns)
    if value_node is None or value_node.text is None:
        return ""
    value = value_node.text
    if cell_type == "s":
        index = int(value)
        return shared_strings[index] if index < len(shared_strings) else value
    return value


def extract_xlsx(source_path: Path, extracted_path: Path, title: str) -> None:
    ns = {"a": "http://schemas.openxmlformats.org/spreadsheetml/2006/main"}
    lines = [title, ""]
    with zipfile.ZipFile(source_path) as book:
        shared_strings = read_shared_strings(book)
        for sheet_name, target in read_workbook_sheets(book):
            root = ET.fromstring(book.read(target))
            lines.append(f"## Sheet: {sheet_name}")
            for row in root.findall("a:sheetData/a:row", ns):
                values = [cell_value(cell, shared_strings, ns) for cell in row.findall("a:c", ns)]
                values = [value.replace("\n", " ").strip() for value in values]
                if any(values):
                    lines.append("\t".join(values))
            lines.append("")
    extracted_path.parent.mkdir(parents=True, exist_ok=True)
    extracted_path.write_text("\n".join(lines).rstrip() + "\n", encoding="utf-8")
    normalize_markdown(
        source_path,
        extracted_path,
        NORMALIZED_ROOT / f"{extracted_path.stem}.md",
        title,
        "OpenXML workbook extraction using workbook and worksheet XML; formulas/macros and rich formatting are not preserved.",
    )


def extract_ppt_strings(source_path: Path, extracted_path: Path, title: str) -> None:
    result = subprocess.run(
        ["strings", "-n", "8", str(source_path)],
        check=True,
        capture_output=True,
        text=True,
    )
    lines = result.stdout.splitlines()
    extracted_path.parent.mkdir(parents=True, exist_ok=True)
    extracted_path.write_text("\n".join(lines) + "\n", encoding="utf-8")
    normalize_markdown(
        source_path,
        extracted_path,
        NORMALIZED_ROOT / f"{extracted_path.stem}.md",
        title,
        "Partial extraction using `strings -n 8`; this binary PowerPoint file does not yield a clean text layer locally.",
    )


def write_patident_inventory() -> None:
    lines = [
        "# Patient Identification ZIP Inventory",
        "",
        f"Archive source: `{PATIDENT_ZIP.relative_to(ROOT)}`",
        "",
        "| Filename | Size (bytes) | Notes |",
        "| --- | --- | --- |",
    ]
    with zipfile.ZipFile(PATIDENT_ZIP) as book:
        for item in book.infolist():
            note = "Contained within the archived patient-identification bundle."
            lines.append(f"| {item.filename} | {item.file_size} | {note} |")
    (INVENTORIES_ROOT / "patident-zip-inventory.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_archive_inventory() -> None:
    lines = [
        "# Archive Support Inventory",
        "",
        "| Item | Type | Local Path | Derived Handling |",
        "| --- | --- | --- | --- |",
    ]

    for item in ISB_STANDARD_ITEMS:
        path = ISB_STANDARDS_ROOT / item["filename"]
        if path.exists():
            stem = slugify(path.stem)
            lines.append(
                f"| {item['title']} | html | {path.relative_to(ROOT)} | Extracted to `derived/extracted-text/archive-support/{stem}.txt` |"
            )

    for path in sorted(ISB_DOCS_ROOT.glob("*.html")):
        stem = slugify(path.stem)
        lines.append(
            f"| {path.stem} | html | {path.relative_to(ROOT)} | Extracted to `derived/extracted-text/archive-support/{stem}.txt` |"
        )

    for path in sorted(ISB_DSCN_ROOT.glob("*.pdf")):
        stem = slugify(path.stem)
        lines.append(
            f"| {path.stem} | pdf | {path.relative_to(ROOT)} | Extracted to `derived/extracted-text/archive-support/{stem}.txt` |"
        )

    for path in sorted(CUI_PROGRAMME_ROOT.glob("*")):
        if path.is_file():
            stem = slugify(path.stem)
            handling = f"`derived/extracted-text/archive-support/{stem}.txt`"
            lines.append(f"| {path.name} | {path.suffix.lstrip('.')} | {path.relative_to(ROOT)} | Extracted to {handling} |")

    lines.append(
        f"| cuicompliance-pack.pdf | pdf | {(REFERENCES_ROOT / 'cuicompliance-pack.pdf').relative_to(ROOT)} | Extracted to `derived/extracted-text/archive-support/cuicompliance-pack.txt` |"
    )
    lines.append(
        f"| cuicompliance-checklist.xlsx | xlsx | {(REFERENCES_ROOT / 'cuicompliance-checklist.xlsx').relative_to(ROOT)} | Extracted to `derived/extracted-text/archive-support/cuicompliance-checklist.txt` |"
    )
    lines.append(
        f"| decsupportsumm.ppt | ppt | {ARCHIVE_PPT.relative_to(ROOT)} | Partial extraction to `derived/extracted-text/archive-support/decsupportsumm-strings.txt` |"
    )
    lines.append(
        f"| patident.zip | zip | {PATIDENT_ZIP.relative_to(ROOT)} | Inventory written to `derived/inventories/patident-zip-inventory.md` |"
    )

    (INVENTORIES_ROOT / "archive-support-inventory.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_metadata() -> None:
    standards_payload = {
        "title": "ISB 1500-1508 archive branch and formal release artefacts",
        "retrieved_on": "2026-04-18",
        "files": [],
    }

    for item in ISB_STANDARD_ITEMS:
        path = ISB_STANDARDS_ROOT / item["filename"]
        if path.exists():
            standards_payload["files"].append(
                {
                    "title": item["title"],
                    "original_url": item["original_url"],
                    "local_path": str(path.relative_to(ROOT)),
                    "source_type": "html",
                    "source_category": item["category"],
                    "retrieval_status": "retrieved",
                    "sha256": sha256(path),
                }
            )

    for path in sorted(ISB_DOCS_ROOT.glob("*.html")):
        standards_payload["files"].append(
            {
                "title": path.stem,
                "original_url": None,
                "local_path": str(path.relative_to(ROOT)),
                "source_type": "html",
                "source_category": "release metadata",
                "retrieval_status": "retrieved",
                "sha256": sha256(path),
            }
        )

    for path in sorted(ISB_DSCN_ROOT.glob("*.pdf")):
        standards_payload["files"].append(
            {
                "title": path.stem,
                "original_url": None,
                "local_path": str(path.relative_to(ROOT)),
                "source_type": "pdf",
                "source_category": "release metadata",
                "retrieval_status": "retrieved",
                "sha256": sha256(path),
            }
        )

    for name in ["cuifullsubmission.pdf", "cuifullapproach.pdf", "cuifullsafetycase.pdf"]:
        path = ISB_STANDARDS_ROOT / name
        if path.exists():
            standards_payload["files"].append(
                {
                    "title": name,
                    "original_url": None,
                    "local_path": str(path.relative_to(ROOT)),
                    "source_type": "pdf",
                    "source_category": "release metadata",
                    "retrieval_status": "retrieved",
                    "sha256": sha256(path),
                }
            )

    for path in [REFERENCES_ROOT / "cuicompliance-pack.pdf", REFERENCES_ROOT / "cuicompliance-checklist.xlsx"]:
        if path.exists():
            standards_payload["files"].append(
                {
                    "title": path.stem,
                    "original_url": None,
                    "local_path": str(path.relative_to(ROOT)),
                    "source_type": path.suffix.lstrip("."),
                    "source_category": "release metadata",
                    "retrieval_status": "retrieved",
                    "sha256": sha256(path),
                }
            )

    (METADATA_ROOT / "isb-1500-1508-archive-branch.json").write_text(
        json.dumps(standards_payload, indent=2) + "\n",
        encoding="utf-8",
    )

    programme_payload = {
        "title": "Historical CUI programme distribution and support pages",
        "retrieved_on": "2026-04-18",
        "files": [],
    }
    for item in CUI_PROGRAMME_ITEMS:
        base = REFERENCES_ROOT if item["filename"].startswith("2012-") else CUI_PROGRAMME_ROOT
        path = base / item["filename"]
        if path.exists():
            programme_payload["files"].append(
                {
                    "title": item["title"],
                    "original_url": item["original_url"],
                    "local_path": str(path.relative_to(ROOT)),
                    "source_type": path.suffix.lstrip("."),
                    "source_category": "archive context",
                    "retrieval_status": "retrieved",
                    "sha256": sha256(path),
                }
            )

    (METADATA_ROOT / "cui-programme-distribution-archive.json").write_text(
        json.dumps(programme_payload, indent=2) + "\n",
        encoding="utf-8",
    )


def main() -> None:
    EXTRACTED_ROOT.mkdir(parents=True, exist_ok=True)
    NORMALIZED_ROOT.mkdir(parents=True, exist_ok=True)
    INVENTORIES_ROOT.mkdir(parents=True, exist_ok=True)
    METADATA_ROOT.mkdir(parents=True, exist_ok=True)

    for item in ISB_STANDARD_ITEMS:
        path = ISB_STANDARDS_ROOT / item["filename"]
        if path.exists():
            extract_html(path, EXTRACTED_ROOT / f"{slugify(path.stem)}.txt", item["title"])

    for path in sorted(ISB_DOCS_ROOT.glob("*.html")):
        extract_html(path, EXTRACTED_ROOT / f"{slugify(path.stem)}.txt", path.stem)

    for path in sorted(ISB_DSCN_ROOT.glob("*.pdf")):
        extract_pdf(path, EXTRACTED_ROOT / f"{slugify(path.stem)}.txt", path.stem)

    for name in ["cuifullsubmission.pdf", "cuifullapproach.pdf", "cuifullsafetycase.pdf"]:
        path = ISB_STANDARDS_ROOT / name
        if path.exists():
            extract_pdf(path, EXTRACTED_ROOT / f"{slugify(path.stem)}.txt", path.stem)

    for item in CUI_PROGRAMME_ITEMS:
        base = REFERENCES_ROOT if item["filename"].startswith("2012-") else CUI_PROGRAMME_ROOT
        path = base / item["filename"]
        if not path.exists():
            continue
        target = EXTRACTED_ROOT / f"{slugify(path.stem)}.txt"
        if path.suffix.lower() == ".pdf":
            extract_pdf(path, target, item["title"])
        else:
            extract_html(path, target, item["title"])

    compliance_pdf = REFERENCES_ROOT / "cuicompliance-pack.pdf"
    if compliance_pdf.exists():
        extract_pdf(compliance_pdf, EXTRACTED_ROOT / "cuicompliance-pack.txt", "CUI CAPS Compliance Pack")

    compliance_xlsx = REFERENCES_ROOT / "cuicompliance-checklist.xlsx"
    if compliance_xlsx.exists():
        extract_xlsx(
            compliance_xlsx,
            EXTRACTED_ROOT / "cuicompliance-checklist.txt",
            "CUI Design Guidance Compliance Checklist",
        )

    if ARCHIVE_PPT.exists():
        extract_ppt_strings(
            ARCHIVE_PPT,
            EXTRACTED_ROOT / "decsupportsumm-strings.txt",
            "Decision Support Summary (Partial strings extraction)",
        )

    write_patident_inventory()
    write_archive_inventory()
    write_metadata()


if __name__ == "__main__":
    main()
