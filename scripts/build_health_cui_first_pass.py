#!/usr/bin/env python3

from __future__ import annotations

import hashlib
import json
import shutil
import subprocess
from dataclasses import dataclass
from pathlib import Path


ROOT = Path("/Users/andrew/Projects/Microsoft Health Common User Interface")
TOOLKIT_ROOT = ROOT / "raw/sources/toolkit/mscui"
SAMPLE_WEBSITE = TOOLKIT_ROOT / "Solutions/Main/Microsoft.Cui.SampleWebsite"
DESIGN_GUIDANCE_ROOT = ROOT / "raw/sources/design-guidance"
REFERENCES_ROOT = ROOT / "raw/sources/references"
ARCHIVE_GUIDANCE_ROOT = DESIGN_GUIDANCE_ROOT / "nhs-archived-guidance-2016"
ARCHIVE_REFERENCES_ROOT = REFERENCES_ROOT / "nhs-archives"
METADATA_ROOT = ROOT / "raw/metadata"
MANIFEST_ROOT = ROOT / "raw/manifests"
EXTRACTED_ROOT = ROOT / "derived/extracted-text"
NORMALIZED_ROOT = ROOT / "derived/normalized-markdown"
INVENTORIES_ROOT = ROOT / "derived/inventories"


PRIMARY_PDFS = SAMPLE_WEBSITE / "DesignGuide/Pdfs"
PRIMARY_CRIBS = SAMPLE_WEBSITE / "DesignGuide/CribSheets"


DOC_URL_PREFIX = "http://www.mscui.net/DesignGuide/Pdfs/"
CRIB_URL_PREFIX = "http://www.mscui.net/DesignGuide/CribSheets/"


ARCHIVE_GUIDANCE_FILES = [
    {
        "filename": "patident.zip",
        "title": "Patient identification documents zip file",
        "source_type": "zip",
        "source_classification": "direct guidance",
        "notes": "Patient-identification bundle localized from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "teleqig.pdf",
        "title": "Telephone Number Input and display - QIG",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Quick implementation guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "inputdisplayqig.pdf",
        "title": "NHS Number input and display - QIG",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Quick implementation guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "sexqig.pdf",
        "title": "Sex and current Gender Input and Display - QIG",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Quick implementation guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "addressqig.pdf",
        "title": "Address Input and display - QIG",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Quick implementation guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "datetimeqig.pdf",
        "title": "Date and Time Input - QIG",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Quick implementation guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "datetimedispqig.pdf",
        "title": "Date and time display - QIG",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Quick implementation guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "patnamedispqig.pdf",
        "title": "Patient Name Input and Display - QIG",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Quick implementation guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "medlineqig.pdf",
        "title": "Medication line quick implementation guide",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Medication-line quick guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "medlistqig.pdf",
        "title": "Medication list quick implementation guide",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Medication-list quick guide retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "notinggraphics.pdf",
        "title": "Noting with graphics",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Archived clinical-noting guidance retrieved directly from the 2016 NHS Digital guidance page.",
    },
    {
        "filename": "disambig.pdf",
        "title": "Terminology - Disambiguation and error correction",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Archived terminology guidance retrieved directly from the 2016 NHS Digital guidance page.",
    },
    {
        "filename": "termpostcoord.pdf",
        "title": "Terminology - Post coordination",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Archived terminology guidance retrieved directly from the 2016 NHS Digital guidance page.",
    },
    {
        "filename": "handpresintro.pdf",
        "title": "Introduction to handover presentation",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Handover introduction retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "handoverintro.pdf",
        "title": "Introduction to handover",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Handover introduction retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "keyshorts.pdf",
        "title": "Keyboard shortcuts",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Archived navigation guidance retrieved directly from the 2016 NHS Digital guidance page.",
    },
    {
        "filename": "carepathways.pdf",
        "title": "Care pathways conceptual modelling",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Decision-support guidance retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "decsupportsumm.ppt",
        "title": "Decision support summary",
        "source_type": "ppt",
        "source_classification": "direct guidance",
        "notes": "Presentation deck retrieved from the 2016 NHS Digital archived guidance page.",
    },
    {
        "filename": "cuidesignguide.pdf",
        "title": "Handover requirements spreadsheet",
        "source_type": "pdf",
        "source_classification": "direct guidance",
        "notes": "Handover requirements PDF retrieved from the 2016 NHS Digital archived guidance page.",
    },
]


@dataclass(frozen=True)
class SourceEntry:
    title: str
    source_type: str
    source_classification: str
    retrieval_status: str
    original_url: str | None
    local_path: str | None
    notes: str
    source_category: str


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
        elif ch in {" ", "-", "_"}:
            keep.append("-")
    slug = "".join(keep)
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug.strip("-")


def archive_title_for_filename(filename: str) -> str:
    for item in ARCHIVE_GUIDANCE_FILES:
        if item["filename"] == filename:
            return item["title"]
    return Path(filename).stem


def ensure_dirs() -> None:
    for path in [
        DESIGN_GUIDANCE_ROOT / "toolkit-bundled-pdfs",
        DESIGN_GUIDANCE_ROOT / "toolkit-bundled-crib-sheets",
        ARCHIVE_GUIDANCE_ROOT,
        ARCHIVE_REFERENCES_ROOT,
        EXTRACTED_ROOT / "design-guidance",
        NORMALIZED_ROOT / "design-guidance",
        INVENTORIES_ROOT,
        METADATA_ROOT,
        MANIFEST_ROOT,
    ]:
        path.mkdir(parents=True, exist_ok=True)


def copy_tree_files(src_dir: Path, dst_dir: Path) -> list[Path]:
    copied: list[Path] = []
    for src in sorted(src_dir.glob("*.pdf")):
        dst = dst_dir / src.name
        if not dst.exists():
            shutil.copy2(src, dst)
        copied.append(dst)
    return copied


def extract_text(pdf_path: Path, txt_path: Path) -> None:
    txt_path.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ["pdftotext", "-layout", str(pdf_path), str(txt_path)],
        check=True,
    )


def clean_text(text: str) -> str:
    cleaned_lines = []
    for raw_line in text.splitlines():
        line = raw_line.rstrip()
        stripped = line.strip()
        if stripped in {"Microsoft", ""}:
            if cleaned_lines and cleaned_lines[-1] == "":
                continue
            cleaned_lines.append("")
            continue
        if stripped.startswith("Page ") and stripped[5:].replace("i", "").replace("v", "").replace("x", "").replace(".", "").strip() == "":
            continue
        if stripped.startswith("Design Guidance") and "Prepared by Microsoft" in stripped:
            continue
        cleaned_lines.append(line)

    compacted: list[str] = []
    blank_run = 0
    for line in cleaned_lines:
        if line.strip():
            blank_run = 0
            compacted.append(line)
        else:
            blank_run += 1
            if blank_run <= 1:
                compacted.append("")
    return "\n".join(compacted).strip() + "\n"


def normalize_markdown(source_path: Path, extracted_path: Path, output_path: Path, title: str) -> None:
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
                "- Normalization note: machine-cleaned `pdftotext -layout` output; verify against the PDF for edge cases.",
                "",
                "## Extracted Text",
                "",
                clean_text(raw_text),
            ]
        ),
        encoding="utf-8",
    )


def build_toolkit_metadata() -> None:
    readme = TOOLKIT_ROOT / "README.md"
    metadata = {
        "title": "rbirkby/mscui toolkit mirror",
        "original_url": "https://github.com/rbirkby/mscui.git",
        "retrieved_on": "2026-04-17",
        "local_path": str(TOOLKIT_ROOT.relative_to(ROOT)),
        "source_category": "toolkit source",
        "retrieval_status": "retrieved",
        "trust_notes": [
            "GitHub mirror rather than an official Microsoft repository.",
            "Contains source code and bundled sample website artefacts that appear to mirror historical MSCUI assets.",
        ],
        "hash_basis": {
            "readme_sha256": sha256(readme),
        },
    }
    (METADATA_ROOT / "toolkit-mscui.json").write_text(
        json.dumps(metadata, indent=2) + "\n",
        encoding="utf-8",
    )


def build_design_guidance_metadata(pdf_files: list[Path], crib_files: list[Path]) -> list[SourceEntry]:
    entries: list[SourceEntry] = []
    record = {
        "title": "Bundled MSCUI design-guidance PDFs and crib sheets copied from toolkit mirror",
        "retrieved_on": "2026-04-17",
        "source_category": "direct guidance",
        "retrieval_status": "retrieved",
        "origin_chain": [
            {
                "kind": "toolkit_mirror",
                "url": "https://github.com/rbirkby/mscui.git",
                "local_path": "raw/sources/toolkit/mscui",
                "note": "Local mirror includes sample website PDFs and crib sheets.",
            },
            {
                "kind": "historical_site",
                "url": "http://www.mscui.net/",
                "note": "Original publication site referenced by toolkit README and sample website markup.",
            },
        ],
        "files": [],
    }

    for pdf in pdf_files:
        title = pdf.stem
        record["files"].append(
            {
                "title": title,
                "original_url": DOC_URL_PREFIX + pdf.name.replace(" ", "%20"),
                "local_path": str(pdf.relative_to(ROOT)),
                "source_type": "pdf",
                "source_classification": "direct guidance",
                "retrieval_status": "retrieved",
                "trust_note": "Copied from the toolkit mirror's bundled sample website; likely reflects the original MSCUI downloadable PDF.",
                "sha256": sha256(pdf),
            }
        )
        entries.append(
            SourceEntry(
                title=title,
                source_type="pdf",
                source_classification="direct guidance",
                retrieval_status="retrieved",
                original_url=DOC_URL_PREFIX + pdf.name.replace(" ", "%20"),
                local_path=str(pdf.relative_to(ROOT)),
                notes="Bundled inside the toolkit mirror sample website.",
                source_category="direct guidance",
            )
        )

    for pdf in crib_files:
        title = pdf.stem
        record["files"].append(
            {
                "title": title,
                "original_url": CRIB_URL_PREFIX + pdf.name.replace(" ", "%20"),
                "local_path": str(pdf.relative_to(ROOT)),
                "source_type": "pdf",
                "source_classification": "direct guidance",
                "retrieval_status": "retrieved",
                "trust_note": "Copied from the toolkit mirror's bundled sample website; likely reflects the original MSCUI downloadable crib sheet.",
                "sha256": sha256(pdf),
            }
        )
        entries.append(
            SourceEntry(
                title=title,
                source_type="pdf",
                source_classification="direct guidance",
                retrieval_status="retrieved",
                original_url=CRIB_URL_PREFIX + pdf.name.replace(" ", "%20"),
                local_path=str(pdf.relative_to(ROOT)),
                notes="Bundled inside the toolkit mirror sample website.",
                source_category="direct guidance",
            )
        )

    (METADATA_ROOT / "design-guidance-bundled-from-toolkit.json").write_text(
        json.dumps(record, indent=2) + "\n",
        encoding="utf-8",
    )
    return entries


def build_archived_guidance_metadata() -> list[SourceEntry]:
    entries: list[SourceEntry] = []
    record = {
        "title": "Archived NHS Digital Health CUI guidance downloads (2016 archive capture)",
        "retrieved_on": "2026-04-17",
        "source_category": "direct guidance",
        "retrieval_status": "retrieved",
        "origin_chain": [
            {
                "kind": "archive_page",
                "url": "https://webarchive.nationalarchives.gov.uk/ukgwa/20160921150545/http:/systems.digital.nhs.uk/data/cui/uig",
                "local_path": "raw/sources/references/nhs-archives/2016-systems-digital-cui-uig.html",
                "note": "Archived NHS Digital guidance index page listing downloadable PDFs, a ZIP bundle, and a PPT deck.",
            },
        ],
        "files": [],
    }

    for item in ARCHIVE_GUIDANCE_FILES:
        path = ARCHIVE_GUIDANCE_ROOT / item["filename"]
        if not path.exists():
            continue
        original_url = f"http://systems.digital.nhs.uk/data/cui/uig/{item['filename']}"
        file_record = {
            "title": item["title"],
            "original_url": original_url,
            "local_path": str(path.relative_to(ROOT)),
            "source_type": item["source_type"],
            "source_classification": item["source_classification"],
            "retrieval_status": "retrieved",
            "trust_note": "Retrieved from the UK Government Web Archive after passing the human verification gate.",
            "sha256": sha256(path),
        }
        record["files"].append(file_record)
        entries.append(
            SourceEntry(
                title=item["title"],
                source_type=item["source_type"],
                source_classification=item["source_classification"],
                retrieval_status="retrieved",
                original_url=original_url,
                local_path=str(path.relative_to(ROOT)),
                notes=item["notes"],
                source_category="direct guidance",
            )
        )

    (METADATA_ROOT / "nhs-archived-guidance-2016.json").write_text(
        json.dumps(record, indent=2) + "\n",
        encoding="utf-8",
    )
    return entries


def build_archived_reference_metadata() -> list[SourceEntry]:
    page_records = [
        {
            "title": "User interface guidance",
            "original_url": "http://systems.digital.nhs.uk/data/cui/uig",
            "archive_url": "https://webarchive.nationalarchives.gov.uk/ukgwa/20160921150545/http:/systems.digital.nhs.uk/data/cui/uig",
            "local_path": "raw/sources/references/nhs-archives/2016-systems-digital-cui-uig.html",
            "source_classification": "archive context",
            "source_category": "archive context",
            "source_type": "html",
            "notes": "Archived NHS Digital page listing downloadable guidance documents and safety framing.",
        },
        {
            "title": "CUI ISB",
            "original_url": "http://www.isb.nhs.uk/use/baselines/cui",
            "archive_url": "https://webarchive.nationalarchives.gov.uk/ukgwa/20150107144238/http://www.isb.nhs.uk/use/baselines/cui",
            "local_path": "raw/sources/references/nhs-archives/2015-isb-cui-baselines.html",
            "source_classification": "archive context",
            "source_category": "archive context",
            "source_type": "html",
            "notes": "Archived ISB standards landing page for the CUI family, localized after browser-based verification.",
        },
        {
            "title": "NHS Common User Interface",
            "original_url": "http://www.cui.nhs.uk/Pages/NHSCommonUserInterface.aspx",
            "archive_url": "https://webarchive.nationalarchives.gov.uk/ukgwa/20121107083801/http://www.cui.nhs.uk/Pages/NHSCommonUserInterface.aspx",
            "local_path": "raw/sources/references/nhs-archives/2012-cui-home.html",
            "source_classification": "archive context",
            "source_category": "archive context",
            "source_type": "html",
            "notes": "Archived front page of the original NHS Common User Interface programme site.",
        },
        {
            "title": "Register.aspx",
            "original_url": "http://www.cui.nhs.uk/Pages/Register.aspx",
            "archive_url": "https://webarchive.nationalarchives.gov.uk/ukgwa/20121107083903/http://www.cui.nhs.uk/Pages/Register.aspx",
            "local_path": "raw/sources/references/nhs-archives/2012-cui-register.html",
            "source_classification": "archive context",
            "source_category": "archive context",
            "source_type": "html",
            "notes": "Archived registration page showing how the historical programme distributed gated access and downloads.",
        },
        {
            "title": "Deprecation notice for CUI",
            "original_url": "https://digital.nhs.uk/binaries/content/assets/website-assets/data-and-information/information-standards/isb_1500-1508_deprecationnoticeforcui.pdf",
            "archive_url": None,
            "local_path": "raw/sources/references/nhs-digital/deprecationnoticeforcui.pdf",
            "source_classification": "release metadata",
            "source_category": "release metadata",
            "source_type": "pdf",
            "notes": "Official deprecation notice PDF linked from the NHS Digital ISB 1500-1508 page.",
        },
    ]

    record = {
        "title": "Archived and reference Health CUI programme pages",
        "retrieved_on": "2026-04-17",
        "files": [],
    }
    entries: list[SourceEntry] = []
    for item in page_records:
        path = ROOT / item["local_path"]
        if not path.exists():
            continue
        file_record = {
            "title": item["title"],
            "original_url": item["original_url"],
            "archive_url": item["archive_url"],
            "local_path": item["local_path"],
            "source_type": item["source_type"],
            "source_classification": item["source_classification"],
            "retrieval_status": "retrieved",
            "trust_note": "Localized directly from official NHS or UK Government Web Archive infrastructure.",
            "sha256": sha256(path),
        }
        record["files"].append(file_record)
        entries.append(
            SourceEntry(
                title=item["title"],
                source_type=item["source_type"],
                source_classification=item["source_classification"],
                retrieval_status="retrieved",
                original_url=item["original_url"],
                local_path=item["local_path"],
                notes=item["notes"],
                source_category=item["source_category"],
            )
        )

    (METADATA_ROOT / "nhs-archived-reference-pages.json").write_text(
        json.dumps(record, indent=2) + "\n",
        encoding="utf-8",
    )
    return entries


def build_missing_and_reference_entries() -> list[SourceEntry]:
    return [
        SourceEntry(
            title="rbirkby/mscui toolkit mirror",
            source_type="git repository",
            source_classification="toolkit source",
            retrieval_status="retrieved",
            original_url="https://github.com/rbirkby/mscui.git",
            local_path="raw/sources/toolkit/mscui",
            notes="Localized toolkit source mirror containing code, sample website assets, and bundled guidance PDFs.",
            source_category="toolkit source",
        ),
        SourceEntry(
            title="Microsoft Helps Developers of Clinical User Interfaces Improve Efficiency, Patient Safety With Free Toolkit",
            source_type="html",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="https://news.microsoft.com/source/2007/09/09/microsoft-helps-developers-of-clinical-user-interfaces-improve-efficiency-patient-safety-with-free-toolkit/",
            local_path="raw/sources/references/microsoft-source/2007-09-09-health-cui-launch.html",
            notes="Official Microsoft launch press release.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="Updated Microsoft Health Common User Interface Furthers Clinical Effectiveness, Increases Patient Safety",
            source_type="html",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="https://news.microsoft.com/2008/05/13/updated-microsoft-health-common-user-interface-furthers-clinical-effectiveness-increases-patient-safety/",
            local_path="raw/sources/references/microsoft-source/2008-05-13-health-cui-v1-3.html",
            notes="Official Microsoft press release for version 1.3.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="ISB 1500-1508: Common User Interface",
            source_type="html",
            source_classification="archive context",
            retrieval_status="retrieved",
            original_url="https://digital.nhs.uk/data-and-information/information-standards/governance/latest-activity/standards-and-collections/isb-1500-1508-common-user-interface",
            local_path="raw/sources/references/nhs-digital/isb-1500-1508-common-user-interface.html",
            notes="Official NHS Digital deprecation notice linking to archived CUI guidance and standards.",
            source_category="archive context",
        ),
        SourceEntry(
            title="Common User Interface standards",
            source_type="html",
            source_classification="archive context",
            retrieval_status="retrieved",
            original_url="https://standards.nhs.uk/published-standards/common-user-interface-standards",
            local_path="raw/sources/references/nhs-standards/common-user-interface-standards.html",
            notes="Current NHS Standards Directory summary of the CUI standard family.",
            source_category="archive context",
        ),
        SourceEntry(
            title="Why we are deprecating and then withdrawing the NHS Common User Interface",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://digital.nhs.uk/blog/transformation-blog/2019/why-we-are-withdrawing-the-nhs-common-user-interface",
            local_path="raw/sources/references/nhs-digital/why-we-are-withdrawing-the-nhs-common-user-interface.html",
            notes="Official NHS Digital blog post explaining why the standards were deprecated.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="ISB 1500-1508 archived standard detail pages",
            source_type="html collection",
            source_classification="archive context",
            retrieval_status="retrieved",
            original_url="http://www.isb.nhs.uk/library/standard/132",
            local_path="raw/sources/references/nhs-archives/isb-standards",
            notes="Recovered archive branch of individual ISB standard detail pages for the CUI demographics standards family.",
            source_category="archive context",
        ),
        SourceEntry(
            title="ISB 1500-1508 archived documentation pages",
            source_type="html collection",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="http://www.isb.nhs.uk/documents/isb-1505/dscn-09-2010/",
            local_path="raw/sources/references/nhs-archives/isb-standards/docs-pages",
            notes="Recovered documentation pages for the formal ISB CUI releases, linking DSCN and supporting artefacts.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="ISB 1500-1508 DSCN PDFs",
            source_type="pdf collection",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="http://www.isb.nhs.uk/documents/dscn/dscn2010/dataset/1505092010dscn.pdf",
            local_path="raw/sources/references/nhs-archives/isb-standards/dscn-pdfs",
            notes="Formal DSCN release PDFs for the CUI standards family, localized from the archive branch.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="CUI formal submission, development approach, and safety case PDFs",
            source_type="pdf collection",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="http://www.isb.nhs.uk/documents/cui/cuifullsubmission.pdf",
            local_path="raw/sources/references/nhs-archives/isb-standards",
            notes="Shared formal artefacts referenced from ISB documentation pages, including submission, approach, and safety case material.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="CUI CAPS compliance pack and checklist",
            source_type="mixed collection",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="http://www.isb.nhs.uk/use/baselines/cuicompliance.pdf",
            local_path="raw/sources/references/nhs-archives",
            notes="Compliance artefacts localized both directly from the archive and via the patient-identification ZIP bundle.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="CUI programme distribution and support pages",
            source_type="mixed collection",
            source_classification="archive context",
            retrieval_status="retrieved",
            original_url="http://www.cui.nhs.uk/Pages/NHSCommonUserInterface.aspx",
            local_path="raw/sources/references/nhs-archives/cui-programme",
            notes="Recovered programme distribution guide and support pages from the archived `cui.nhs.uk` site.",
            source_category="archive context",
        ),
        SourceEntry(
            title="Microsoft Health Common User Interface - CodePlex Archive landing page",
            source_type="html",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="https://codeplexarchive.org/project/mscui",
            local_path="raw/sources/references/secondary/codeplexarchive-mscui.html",
            notes="Recovered CodePlex archive landing page showing project description, archive size, and download endpoint.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="Microsoft Health Common User Interface - CodePlex Archive releases page",
            source_type="html",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="https://codeplexarchive.org/projecttab/releases/mscui/",
            local_path="raw/sources/references/secondary/codeplexarchive-tabs/releases.html",
            notes="Recovered CodePlex archive releases page listing version history, release dates, and attached package names.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="Microsoft Health Common User Interface - CodePlex Archive license page",
            source_type="html",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="https://codeplexarchive.org/projecttab/license/mscui/",
            local_path="raw/sources/references/secondary/codeplexarchive-tabs/license.html",
            notes="Recovered CodePlex archive license page confirming publication under the Microsoft Public License (Ms-PL).",
            source_category="release metadata",
        ),
        SourceEntry(
            title="Microsoft Health Common User Interface - CodePlex Archive source-code tree page",
            source_type="html",
            source_classification="release metadata",
            retrieval_status="retrieved",
            original_url="https://codeplexarchive.org/projecttab/sourceCode/mscui/",
            local_path="raw/sources/references/secondary/codeplexarchive-tabs/tree.html",
            notes="Recovered CodePlex archive source-code tree page. The surviving exposed tree is thin and direct release-attachment URLs currently reject unauthenticated fetches, so this page is most useful as a limit-of-archive record.",
            source_category="release metadata",
        ),
        SourceEntry(
            title="EMIS becomes first GP supplier to commit to CUI",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.digitalhealth.net/2007/03/emis-becomes-first-gp-supplier-to-commit-to-cui/",
            local_path="raw/sources/references/secondary/digitalhealth-emis-commits-to-cui-2007.html",
            notes="Industry press evidence of early supplier adoption claims, including EMIS Web and INPS references.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="Microsoft recognises EMIS and CareWorks",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.digitalhealth.net/2009/07/microsoft-recognises-emis-and-careworks/",
            local_path="raw/sources/references/secondary/digitalhealth-microsoft-recognises-emis-careworks-2009.html",
            notes="Industry press evidence of partner recognition and a reported iLink HealthVault/CUI implementation.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="Telerik forum reference to pjd.mscui.net PrimaryCare demonstrator",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.telerik.com/forums/unable-to-connect-to-silverlight-application-on-http-www-silverlight-net-showcase-page",
            local_path="raw/sources/references/secondary/telerik-pjd-primarycare-reference-2010.html",
            notes="Third-party forum discussion useful as narrow corroboration that `pjd.mscui.net/PrimaryCare.htm` was publicly reachable in 2010.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="GovLoop tweet archive referencing the Patient Journey Demonstrator",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.govloop.com/community/blog/feddiduknow-monthly-twitter-summary-october-2010/",
            local_path="raw/sources/references/secondary/govloop-patient-journey-showcases-tweet-2010.html",
            notes="Third-party tweet archive useful as light corroboration that `pjd.mscui.net/default.htm` was being shared publicly in 2010.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="Microsoft launches CUI internationally",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.digitalhealth.net/2007/09/microsoft-launches-cui-internationally/",
            local_path="raw/sources/references/secondary/digitalhealth-microsoft-launches-cui-internationally-2007.html",
            notes="Industry press source adding a conservative contemporary view of NHS adoption depth at launch, including that EMIS was the largest supplier then beginning to incorporate CUI elements.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="Aintree sticks with System C",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.digitalhealth.net/2009/11/aintree-sticks-with-system-c/",
            local_path="raw/sources/references/secondary/digitalhealth-aintree-system-c-2009.html",
            notes="Industry press account of a concrete trust deployment using Medway Sigma and reporting significant use of Microsoft-developed CUI elements.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="System C interim/final results statement on Medway Sigma and CUI",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.investegate.co.uk/announcement/rns/sysgroup--sys/final-results/1785717",
            local_path="raw/sources/references/secondary/investegate-system-c-final-results-2008.html",
            notes="Supplier investor-relations statement saying Medway Sigma became the first trust-wide UK product to standardize on the new CUI.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="Microsoft health patient journey demonstrator",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://pubmed.ncbi.nlm.nih.gov/19192332/",
            local_path="raw/sources/references/secondary/pubmed-microsoft-health-patient-journey-demonstrator.html",
            notes="PubMed abstract page for the 2008 article describing an exemplar MSCUI implementation and its awareness-raising effect.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="Microsoft health patient journey demonstrator (Portico PDF)",
            source_type="pdf",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://access.portico.org/Portico/auView?auId=ark%253A%252F27927%252Fphw1p04s4h5&auViewType1=PDF",
            local_path="raw/sources/references/secondary/portico-microsoft-health-patient-journey-demonstrator-2008.pdf",
            notes="Portico-preserved full-text PDF for the 2008 article, localized after resolving the browser session-backed PDF endpoint.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="HCI-modelling for improving the clinical usability of digital health technologies",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://pubmed.ncbi.nlm.nih.gov/38729456/",
            local_path="raw/sources/references/secondary/pubmed-hci-modelling-digital-health-technologies.html",
            notes="Recent PubMed abstract page describing work that explicitly combines NHS CUI and the NHS Design System.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="Civica Care Records product page",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.civica.com/en-us/product-pages/electronic-patient-record-software/",
            local_path="raw/sources/references/secondary/civica-care-records-product-page.html",
            notes="Vendor product page explicitly citing relevant CUI guidance such as the patient banner.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="EPaCCS Recommended IT System Requirements v1.5",
            source_type="pdf",
            source_classification="reference context",
            retrieval_status="retrieved",
            original_url="https://digital.nhs.uk/binaries/content/assets/website-assets/data-and-information/information-standards/standards-and-collections/scci1580-palliative-care-co-ordination/epaccsreq.pdf",
            local_path="raw/sources/references/secondary/nhs-follow-on/epaccs-recommended-it-system-requirements-v1-5.pdf",
            notes="2015 NHS requirements document showing CUI standards and guidance still being referenced downstream.",
            source_category="reference context",
        ),
        SourceEntry(
            title="Palliative care co-ordination: core content. Requirements Specification",
            source_type="pdf",
            source_classification="reference context",
            retrieval_status="retrieved",
            original_url="https://digital.nhs.uk/binaries/content/assets/website-assets/isce/scci1580/1580112015spec.pdf",
            local_path="raw/sources/references/secondary/nhs-follow-on/palliative-care-co-ordination-core-content-requirements-specification.pdf",
            notes="2015 NHS requirements specification showing CUI requirements persisted in related programme requirements.",
            source_category="reference context",
        ),
        SourceEntry(
            title="Indra lleva a la Comunidad Valenciana a la vanguardia de la salud digital",
            source_type="html",
            source_classification="commentary / secondary analysis",
            retrieval_status="retrieved",
            original_url="https://www.indragroup.com/es/noticias/indra-comunidad-valenciana-vanguardia-salud-digital",
            local_path="raw/sources/references/secondary/indra-valencia-abucasis-2012-browser.html",
            notes="Browser-rendered capture of the Indra/Valencia article stating that Microsoft Health CUI principles were adapted for ABUCASIS in Valencia; retained as a live-site capture because plain fetches hit anti-bot interstitials.",
            source_category="commentary / secondary analysis",
        ),
        SourceEntry(
            title="MSCUI CodePlex releases page",
            source_type="website",
            source_classification="release metadata",
            retrieval_status="referenced but unavailable",
            original_url="http://www.codeplex.com/mscui/Release/ProjectReleases.aspx",
            local_path=None,
            notes="Original CodePlex host referenced by the sample website and README; original host is unavailable, but archive captures have now been localized separately.",
            source_category="release metadata",
        ),
    ]


def write_manifest(entries: list[SourceEntry]) -> None:
    payload = {
        "project": "Microsoft Health Common User Interface",
        "description": "First-pass manifest of design-guidance, toolkit, release metadata, and archive context sources.",
        "generated_on": "2026-04-18",
        "sources": [
            {
                "title": e.title,
                "source_type": e.source_type,
                "source_category": e.source_category,
                "classification": e.source_classification,
                "retrieval_status": e.retrieval_status,
                "original_url": e.original_url,
                "local_path": e.local_path,
                "notes": e.notes,
            }
            for e in entries
        ],
    }
    (MANIFEST_ROOT / "design-guidance-manifest.json").write_text(
        json.dumps(payload, indent=2) + "\n",
        encoding="utf-8",
    )


def write_source_inventory(entries: list[SourceEntry]) -> None:
    lines = [
        "# Source Inventory",
        "",
        "| Title | Category | Classification | Status | Local Path | Notes |",
        "| --- | --- | --- | --- | --- | --- |",
    ]
    for e in sorted(entries, key=lambda item: item.title.lower()):
        lines.append(
            f"| {e.title} | {e.source_category} | {e.source_classification} | {e.retrieval_status} | "
            f"{e.local_path or '-'} | {e.notes} |"
        )
    (INVENTORIES_ROOT / "source-inventory.md").write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_guidance_inventory(pdf_files: list[Path], crib_files: list[Path]) -> None:
    lines = [
        "# Guidance Document Inventory",
        "",
        "Primary design-guidance PDFs, crib sheets, and archived NHS guidance artefacts localized into `raw/sources/design-guidance/`.",
        "",
        "| Filename | Title | Category | Status | Local Path | Description |",
        "| --- | --- | --- | --- | --- | --- |",
    ]
    for pdf in sorted(pdf_files):
        lines.append(
            f"| {pdf.name} | {pdf.stem} | direct guidance | retrieved | {pdf.relative_to(ROOT)} | Bundled downloadable design-guidance PDF from the MSCUI sample website mirror. |"
        )
    for pdf in sorted(crib_files):
        lines.append(
            f"| {pdf.name} | {pdf.stem} | direct guidance | retrieved | {pdf.relative_to(ROOT)} | Single-page crib sheet supporting interpretation of the corresponding guidance. |"
        )
    for item in ARCHIVE_GUIDANCE_FILES:
        path = ARCHIVE_GUIDANCE_ROOT / item["filename"]
        if not path.exists():
            continue
        lines.append(
            f"| {path.name} | {item['title']} | direct guidance | retrieved | {path.relative_to(ROOT)} | {item['notes']} |"
        )
    (INVENTORIES_ROOT / "guidance-document-inventory.md").write_text(
        "\n".join(lines) + "\n",
        encoding="utf-8",
    )


def write_toolkit_inventory() -> None:
    sections = [
        ("Core WPF controls", TOOLKIT_ROOT / "Solutions/Main/Microsoft.Cui.Controls"),
        ("Web controls", TOOLKIT_ROOT / "Solutions/Main/NhsCui.Toolkit.Web"),
        ("WinForms controls", TOOLKIT_ROOT / "Solutions/Main/NhsCui.Toolkit.WinForms"),
        ("Sample website design guidance pages", SAMPLE_WEBSITE / "DesignGuide"),
        ("Roadmap website pages", SAMPLE_WEBSITE / "Roadmap"),
    ]

    lines = [
        "# Toolkit File Inventory",
        "",
        "High-level inventory of the localized `rbirkby/mscui` toolkit mirror.",
        "",
    ]

    for heading, directory in sections:
        lines.append(f"## {heading}")
        lines.append("")
        lines.append("| Item | Type | Local Path | Brief Description |")
        lines.append("| --- | --- | --- | --- |")
        for child in sorted(directory.iterdir()):
            if child.name.startswith("."):
                continue
            item_type = "directory" if child.is_dir() else "file"
            description = "Top-level module or artefact within the toolkit mirror."
            lines.append(
                f"| {child.name} | {item_type} | {child.relative_to(ROOT)} | {description} |"
            )
        lines.append("")

    (INVENTORIES_ROOT / "toolkit-file-inventory.md").write_text(
        "\n".join(lines),
        encoding="utf-8",
    )


def main() -> None:
    ensure_dirs()

    copied_pdfs = copy_tree_files(PRIMARY_PDFS, DESIGN_GUIDANCE_ROOT / "toolkit-bundled-pdfs")
    copied_cribs = copy_tree_files(PRIMARY_CRIBS, DESIGN_GUIDANCE_ROOT / "toolkit-bundled-crib-sheets")
    archived_pdfs = sorted(ARCHIVE_GUIDANCE_ROOT.glob("*.pdf"))

    for pdf in copied_pdfs + copied_cribs + archived_pdfs:
        stem = slugify(pdf.stem)
        if pdf.is_relative_to(ARCHIVE_GUIDANCE_ROOT):
            stem = f"nhs-archived-guidance-2016-{stem}"
        extracted = EXTRACTED_ROOT / "design-guidance" / f"{stem}.txt"
        normalized = NORMALIZED_ROOT / "design-guidance" / f"{stem}.md"
        extract_text(pdf, extracted)
        title = archive_title_for_filename(pdf.name) if pdf.is_relative_to(ARCHIVE_GUIDANCE_ROOT) else pdf.stem
        normalize_markdown(pdf, extracted, normalized, title)

    build_toolkit_metadata()
    entries = build_design_guidance_metadata(copied_pdfs, copied_cribs)
    entries.extend(build_archived_guidance_metadata())
    entries.extend(build_archived_reference_metadata())
    entries.extend(build_missing_and_reference_entries())
    write_manifest(entries)
    write_source_inventory(entries)
    write_guidance_inventory(copied_pdfs, copied_cribs)
    write_toolkit_inventory()


if __name__ == "__main__":
    main()
