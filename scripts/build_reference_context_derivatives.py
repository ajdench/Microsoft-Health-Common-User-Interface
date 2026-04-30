#!/usr/bin/env python3

from __future__ import annotations

import hashlib
import json
import re
import subprocess
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path("/Users/andrew/Projects/Microsoft Health Common User Interface")
RAW_ROOT = ROOT / "raw"
METADATA_ROOT = RAW_ROOT / "metadata"
INVENTORIES_ROOT = ROOT / "derived" / "inventories"
EXTRACTED_ROOT = ROOT / "derived" / "extracted-text" / "reference-context"
NORMALIZED_ROOT = ROOT / "derived" / "normalized-markdown" / "reference-context"
SECONDARY_ROOT = RAW_ROOT / "sources" / "references" / "secondary"
DEFAULT_RETRIEVED_ON = "2026-04-18"


REFERENCE_ITEMS = [
    {
        "source_path": SECONDARY_ROOT / "codeplexarchive-mscui.html",
        "title": "Microsoft Health Common User Interface - CodePlex Archive landing page",
        "original_url": "https://codeplexarchive.org/project/mscui",
        "slug": "codeplexarchive-mscui",
        "category": "release metadata",
        "classification": "release metadata",
        "trust_note": "Recovered from the public CodePlex archive. Useful for release provenance, but it is a preservation site rather than the original CodePlex host.",
    },
    {
        "source_path": SECONDARY_ROOT / "codeplexarchive-tabs" / "releases.html",
        "title": "Microsoft Health Common User Interface - CodePlex Archive releases page",
        "original_url": "https://codeplexarchive.org/projecttab/releases/mscui/",
        "slug": "codeplexarchive-mscui-releases",
        "category": "release metadata",
        "classification": "release metadata",
        "trust_note": "Recovered from the public CodePlex archive. Captures release-version history and attached package names.",
    },
    {
        "source_path": SECONDARY_ROOT / "codeplexarchive-tabs" / "license.html",
        "title": "Microsoft Health Common User Interface - CodePlex Archive license page",
        "original_url": "https://codeplexarchive.org/projecttab/license/mscui/",
        "slug": "codeplexarchive-mscui-license",
        "category": "release metadata",
        "classification": "release metadata",
        "trust_note": "Recovered from the public CodePlex archive and useful for confirming the published Ms-PL license.",
    },
    {
        "source_path": SECONDARY_ROOT / "codeplexarchive-tabs" / "tree.html",
        "title": "Microsoft Health Common User Interface - CodePlex Archive source-code tree page",
        "original_url": "https://codeplexarchive.org/projecttab/sourceCode/mscui/",
        "slug": "codeplexarchive-mscui-tree",
        "category": "release metadata",
        "classification": "release metadata",
        "trust_note": "Recovered from the public CodePlex archive. Useful mainly for understanding the limits of the surviving archive because the exposed tree is very thin and direct attachment URLs currently reject unauthenticated fetches.",
    },
    {
        "source_path": SECONDARY_ROOT / "digitalhealth-emis-commits-to-cui-2007.html",
        "title": "EMIS becomes first GP supplier to commit to CUI",
        "original_url": "https://www.digitalhealth.net/2007/03/emis-becomes-first-gp-supplier-to-commit-to-cui/",
        "slug": "digitalhealth-emis-commits-to-cui-2007",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Industry press source, not a primary design source, but useful evidence of early supplier adoption claims.",
    },
    {
        "source_path": SECONDARY_ROOT / "digitalhealth-microsoft-recognises-emis-careworks-2009.html",
        "title": "Microsoft recognises EMIS and CareWorks",
        "original_url": "https://www.digitalhealth.net/2009/07/microsoft-recognises-emis-and-careworks/",
        "slug": "digitalhealth-microsoft-recognises-emis-careworks-2009",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Industry press source useful for evidence of recognition and adoption claims, including the iLink HealthVault/CUI implementation mention.",
    },
    {
        "source_path": SECONDARY_ROOT / "telerik-pjd-primarycare-reference-2010.html",
        "title": "Telerik forum reference to pjd.mscui.net PrimaryCare demonstrator",
        "original_url": "https://www.telerik.com/forums/unable-to-connect-to-silverlight-application-on-http-www-silverlight-net-showcase-page",
        "slug": "telerik-pjd-primarycare-reference-2010",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Third-party forum discussion. Useful only as narrow corroboration that `pjd.mscui.net/PrimaryCare.htm` was publicly reachable in 2010.",
    },
    {
        "source_path": SECONDARY_ROOT / "govloop-patient-journey-showcases-tweet-2010.html",
        "title": "GovLoop tweet archive referencing the Patient Journey Demonstrator",
        "original_url": "https://www.govloop.com/community/blog/feddiduknow-monthly-twitter-summary-october-2010/",
        "slug": "govloop-patient-journey-showcases-tweet-2010",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Third-party tweet archive. Useful only as a light corroborating reference that the Patient Journey Demonstrator URL was being shared publicly in 2010.",
    },
    {
        "source_path": SECONDARY_ROOT / "digitalhealth-microsoft-launches-cui-internationally-2007.html",
        "title": "Microsoft launches CUI internationally",
        "original_url": "https://www.digitalhealth.net/2007/09/microsoft-launches-cui-internationally/",
        "slug": "digitalhealth-microsoft-launches-cui-internationally-2007",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Industry press source useful because it adds a conservative contemporary reading of NHS adoption depth at launch, including the point that EMIS was the largest supplier then implementing CUI elements.",
    },
    {
        "source_path": SECONDARY_ROOT / "digitalhealth-aintree-system-c-2009.html",
        "title": "Aintree sticks with System C",
        "original_url": "https://www.digitalhealth.net/2009/11/aintree-sticks-with-system-c/",
        "slug": "digitalhealth-aintree-system-c-2009",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Industry press source useful as a concrete trust deployment example tying Medway Sigma usage to significant CUI element adoption.",
    },
    {
        "source_path": SECONDARY_ROOT / "investegate-system-c-final-results-2008.html",
        "title": "System C interim/final results statement on Medway Sigma and CUI",
        "original_url": "https://www.investegate.co.uk/announcement/rns/sysgroup--sys/final-results/1785717",
        "slug": "investegate-system-c-final-results-2008",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Investor-relations source from the supplier itself. It is not neutral, but it is stronger than second-hand commentary for claims about the product line and its stated CUI standardization.",
    },
    {
        "source_path": SECONDARY_ROOT / "indra-valencia-abucasis-2012-browser.html",
        "title": "Indra lleva a la Comunidad Valenciana a la vanguardia de la salud digital",
        "original_url": "https://www.indragroup.com/es/noticias/indra-comunidad-valenciana-vanguardia-salud-digital",
        "slug": "indra-valencia-abucasis-2012",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Browser-rendered capture of a current Indra-hosted article because plain HTTP fetches were challenged. Useful for the Valencia/ABUCASIS lead, but extraction may include translation and runtime chrome.",
    },
    {
        "source_path": SECONDARY_ROOT / "pubmed-microsoft-health-patient-journey-demonstrator.html",
        "title": "Microsoft health patient journey demonstrator",
        "original_url": "https://pubmed.ncbi.nlm.nih.gov/19192332/",
        "slug": "pubmed-microsoft-health-patient-journey-demonstrator",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "PubMed abstract page for a peer-reviewed article describing an exemplar implementation and reporting it increased interest in the programme.",
    },
    {
        "source_path": SECONDARY_ROOT / "portico-microsoft-health-patient-journey-demonstrator-2008.pdf",
        "title": "Microsoft health patient journey demonstrator (Portico PDF)",
        "original_url": "https://access.portico.org/Portico/auView?auId=ark%253A%252F27927%252Fphw1p04s4h5&auViewType1=PDF",
        "slug": "portico-microsoft-health-patient-journey-demonstrator-2008",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "retrieved_on": "2026-04-27",
        "trust_note": "Portico-preserved full-text PDF for the 2008 article. Stronger than the abstract-only PubMed page for exact wording and pagination, but preserved through a third-party scholarly archive rather than the original publisher site.",
    },
    {
        "source_path": SECONDARY_ROOT / "pubmed-hci-modelling-digital-health-technologies.html",
        "title": "HCI-modelling for improving the clinical usability of digital health technologies",
        "original_url": "https://pubmed.ncbi.nlm.nih.gov/38729456/",
        "slug": "pubmed-hci-modelling-digital-health-technologies",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "PubMed abstract page for a recent peer-reviewed article explicitly combining NHS CUI and the NHS Design System.",
    },
    {
        "source_path": SECONDARY_ROOT / "civica-care-records-product-page.html",
        "title": "Civica Care Records product page",
        "original_url": "https://www.civica.com/en-us/product-pages/electronic-patient-record-software/",
        "slug": "civica-care-records-product-page",
        "category": "commentary / secondary analysis",
        "classification": "commentary / secondary analysis",
        "trust_note": "Vendor product page. Not neutral evidence, but useful as a current explicit reference to CUI guidance surviving in product marketing and positioning.",
    },
    {
        "source_path": SECONDARY_ROOT / "nhs-follow-on" / "epaccs-recommended-it-system-requirements-v1-5.pdf",
        "title": "EPaCCS Recommended IT System Requirements v1.5",
        "original_url": "https://digital.nhs.uk/binaries/content/assets/website-assets/data-and-information/information-standards/standards-and-collections/scci1580-palliative-care-co-ordination/epaccsreq.pdf",
        "slug": "epaccs-recommended-it-system-requirements-v1-5",
        "category": "reference context",
        "classification": "reference context",
        "trust_note": "Later NHS requirements document showing that CUI standards and guidance were still being invoked in 2015.",
    },
    {
        "source_path": SECONDARY_ROOT / "nhs-follow-on" / "palliative-care-co-ordination-core-content-requirements-specification.pdf",
        "title": "Palliative care co-ordination: core content. Requirements Specification",
        "original_url": "https://digital.nhs.uk/binaries/content/assets/website-assets/isce/scci1580/1580112015spec.pdf",
        "slug": "palliative-care-co-ordination-core-content-requirements-specification",
        "category": "reference context",
        "classification": "reference context",
        "trust_note": "Later NHS requirements specification showing CUI references persisted into downstream programme requirements.",
    },
]


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


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
        if tag in {"p", "div", "br", "li", "tr", "h1", "h2", "h3", "h4", "h5", "h6", "pre"}:
            self.parts.append("\n")

    def handle_endtag(self, tag: str) -> None:
        if tag in {"script", "style"} and self.skip_depth:
            self.skip_depth -= 1
        if self.skip_depth:
            return
        if tag in {"p", "div", "li", "tr", "table", "pre"}:
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


def extract_html(source_path: Path, extracted_path: Path, title: str) -> None:
    parser = HTMLTextExtractor()
    html_text = source_path.read_text(encoding="utf-8", errors="ignore")
    stripped = html_text.strip()
    if stripped.startswith('"') and stripped.endswith('"'):
        try:
            decoded = json.loads(stripped)
            if isinstance(decoded, str) and "<html" in decoded.lower():
                html_text = decoded
        except json.JSONDecodeError:
            pass
    parser.feed(html_text)
    extracted_path.parent.mkdir(parents=True, exist_ok=True)
    extracted_path.write_text(parser.get_text(), encoding="utf-8")
    normalize_markdown(
        source_path,
        extracted_path,
        NORMALIZED_ROOT / f"{extracted_path.stem}.md",
        title,
        "HTML text extraction using a conservative parser; boilerplate and navigation chrome may remain.",
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


def main() -> None:
    EXTRACTED_ROOT.mkdir(parents=True, exist_ok=True)
    NORMALIZED_ROOT.mkdir(parents=True, exist_ok=True)
    INVENTORIES_ROOT.mkdir(parents=True, exist_ok=True)
    METADATA_ROOT.mkdir(parents=True, exist_ok=True)

    metadata = {
        "title": "Secondary adoption, retirement, and afterlife sources",
        "retrieved_on": DEFAULT_RETRIEVED_ON,
        "files": [],
    }
    inventory_lines = [
        "# Reference Context Inventory",
        "",
        "| Title | Category | Status | Local Path | Derived Coverage | Notes |",
        "| --- | --- | --- | --- | --- | --- |",
    ]

    for item in REFERENCE_ITEMS:
        source_path = item["source_path"]
        if not source_path.exists():
            continue
        extracted_path = EXTRACTED_ROOT / f"{item['slug']}.txt"
        normalized_path = NORMALIZED_ROOT / f"{item['slug']}.md"
        if source_path.suffix.lower() == ".pdf":
            extract_pdf(source_path, extracted_path, item["title"])
        else:
            extract_html(source_path, extracted_path, item["title"])

        metadata["files"].append(
            {
                "title": item["title"],
                "original_url": item["original_url"],
                "local_path": str(source_path.relative_to(ROOT)),
                "source_type": source_path.suffix.lower().lstrip(".") or "html",
                "source_category": item["category"],
                "retrieval_status": "retrieved",
                "retrieved_on": item.get("retrieved_on", DEFAULT_RETRIEVED_ON),
                "trust_note": item["trust_note"],
                "sha256": sha256(source_path),
            }
        )
        inventory_lines.append(
            "| "
            + " | ".join(
                [
                    item["title"],
                    item["category"],
                    "retrieved",
                    f"`{source_path.relative_to(ROOT)}`",
                    f"`{extracted_path.relative_to(ROOT)}`, `{normalized_path.relative_to(ROOT)}`",
                    item["trust_note"],
                ]
            )
            + " |"
        )

    (METADATA_ROOT / "secondary-adoption-and-afterlife-sources.json").write_text(
        json.dumps(metadata, indent=2) + "\n",
        encoding="utf-8",
    )
    (INVENTORIES_ROOT / "reference-context-inventory.md").write_text(
        "\n".join(inventory_lines) + "\n",
        encoding="utf-8",
    )


if __name__ == "__main__":
    main()
