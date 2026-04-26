import { promises as fs } from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const appRoot = path.resolve(import.meta.dirname, '..');
const repoRoot = path.resolve(appRoot, '..');
const docsRoot = path.join(appRoot, 'src', 'content', 'docs');
const publicRoot = path.join(appRoot, 'public');
const linkedAssetsDirName = '_llm-wiki-assets';
const linkedAssetsRoot = path.join(publicRoot, linkedAssetsDirName);

const rootMarkdownFiles = ['index.md', 'README.md', 'AGENTS.md', 'log.md'];
const markdownDirs = ['wiki', 'derived'];
const jsonDirs = ['raw/metadata', 'raw/manifests'];

const canonicalMessage =
  'This page is generated automatically for the MSH CUI Wiki view.\nEdit the source in the LLM Wiki, not this mirror.';

function normalizePath(value) {
  return value.replaceAll(path.sep, '/');
}

function humanizeFileName(value) {
  return value
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function yamlQuote(value) {
  return JSON.stringify(value);
}

function normalizeHeadingText(value) {
  return value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function stripFirstHeading(content) {
  const htmlMatch = content.match(/^<h1>([\s\S]+?)<\/h1>\n+/i);
  if (htmlMatch) {
    const htmlTitle = htmlMatch[1]
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, ' ');

    return {
      title: normalizeHeadingText(htmlTitle),
      body: content.slice(htmlMatch[0].length).trimStart(),
    };
  }

  const markdownMatch = content.match(/^#\s+(.+?)\n+/);
  if (!markdownMatch) {
    return { title: null, body: content.trimStart() };
  }

  return {
    title: normalizeHeadingText(markdownMatch[1]),
    body: content.slice(markdownMatch[0].length).trimStart(),
  };
}

function decorateReadmeDisplayTitle(body) {
  return body.replace(/^<h1>([\s\S]+?)<\/h1>/i, '<h1 class="readme-display-title">$1</h1>');
}

function stripAgentsRuleHeadingNumbers(body) {
  return body.replace(/^###\s+\d+\)\s+(.+?)\s*$/gm, '### $1');
}

function buildFrontmatter({ title, description }) {
  const lines = ['---', `title: ${yamlQuote(title)}`];
  if (description) {
    lines.push(`description: ${yamlQuote(description)}`);
  }
  lines.push('---', '');
  return lines.join('\n');
}

function buildCanonicalNote(sourceRelativePath) {
  return [
    '<blockquote class="canonical-note">',
    `  <p><strong>Canonical source:</strong> <code>${sourceRelativePath}</code></p>`,
    `  <p>${canonicalMessage}</p>`,
    '</blockquote>',
    '',
    '',
  ].join('\n');
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function decodeLinkPath(value) {
  try {
    return decodeURI(value);
  } catch {
    return value;
  }
}

function splitLinkTarget(value) {
  const hashIndex = value.indexOf('#');
  const queryIndex = value.indexOf('?');
  let splitIndex = -1;

  if (hashIndex >= 0 && queryIndex >= 0) {
    splitIndex = Math.min(hashIndex, queryIndex);
  } else {
    splitIndex = Math.max(hashIndex, queryIndex);
  }

  if (splitIndex === -1) {
    return { pathPart: value, suffix: '' };
  }

  return {
    pathPart: value.slice(0, splitIndex),
    suffix: value.slice(splitIndex),
  };
}

function isExternalTarget(value) {
  return /^(?:[a-z]+:|\/\/)/i.test(value);
}

function isMirroredDocPath(value) {
  return value.endsWith('.md') || value.endsWith('.json');
}

function toRepoRelativePath(sourceRelativePath, targetPath) {
  const sourceDirectory = path.dirname(path.join(repoRoot, sourceRelativePath));
  const decodedTargetPath = decodeLinkPath(targetPath);
  const resolvedAbsolutePath = path.resolve(sourceDirectory, decodedTargetPath);
  const repoRelativePath = normalizePath(path.relative(repoRoot, resolvedAbsolutePath));

  if (repoRelativePath.startsWith('../') || repoRelativePath === '..') {
    return null;
  }

  return {
    resolvedAbsolutePath,
    repoRelativePath,
  };
}

function buildMirroredDocUrl(repoRelativePath) {
  if (repoRelativePath === 'index.md') {
    return '/';
  }

  if (repoRelativePath.endsWith('.md')) {
    return `/${repoRelativePath.slice(0, -3)}/`;
  }

  if (repoRelativePath.endsWith('.json')) {
    return `/${repoRelativePath.slice(0, -5)}/`;
  }

  return null;
}

function buildLinkedAssetUrl(repoRelativePath, isDirectory = false) {
  const normalizedPath = normalizePath(repoRelativePath);
  const encodedPath = encodeURI(normalizedPath);
  return `/${linkedAssetsDirName}/${encodedPath}${isDirectory ? '/' : ''}`;
}

function buildDirectoryIndexHtml(repoRelativePath, entries) {
  const title = `Linked Repo Directory: ${repoRelativePath}`;
  const items = entries
    .sort((left, right) => left.name.localeCompare(right.name))
    .map((entry) => {
      const href = `${encodeURIComponent(entry.name)}${entry.isDirectory ? '/' : ''}`;
      const label = `${entry.name}${entry.isDirectory ? '/' : ''}`;
      return `    <li><a href="${href}">${escapeHtml(label)}</a></li>`;
    })
    .join('\n');

  return [
    '<!doctype html>',
    '<html lang="en">',
    '  <head>',
    '    <meta charset="utf-8">',
    '    <meta name="viewport" content="width=device-width, initial-scale=1">',
    `    <title>${escapeHtml(title)}</title>`,
    '    <style>',
    '      body { font-family: ui-sans-serif, system-ui, sans-serif; margin: 2rem; line-height: 1.5; }',
    '      code { background: #f3f4f6; padding: 0.15rem 0.35rem; border-radius: 0.25rem; }',
    '      ul { padding-left: 1.25rem; }',
    '    </style>',
    '  </head>',
    '  <body>',
    `    <h1>${escapeHtml(title)}</h1>`,
    '    <p>This directory index is generated for the Astro mirror only. The canonical source remains in the parent LLM Wiki repository.</p>',
    `    <p><code>${escapeHtml(repoRelativePath)}</code></p>`,
    '    <ul>',
    items,
    '    </ul>',
    '  </body>',
    '</html>',
    '',
  ].join('\n');
}

async function publishLinkedArtifacts(linkedArtifacts) {
  await fs.rm(linkedAssetsRoot, { recursive: true, force: true });

  if (linkedArtifacts.size === 0) {
    return;
  }

  for (const artifact of [...linkedArtifacts.values()].sort((left, right) =>
    left.repoRelativePath.localeCompare(right.repoRelativePath),
  )) {
    const targetAbsolutePath = path.join(linkedAssetsRoot, artifact.repoRelativePath);

    if (artifact.type === 'directory') {
      await fs.cp(artifact.sourceAbsolutePath, targetAbsolutePath, { recursive: true });

      const entries = await fs.readdir(artifact.sourceAbsolutePath, { withFileTypes: true });
      const directoryIndexHtml = buildDirectoryIndexHtml(
        artifact.repoRelativePath,
        entries.map((entry) => ({
          name: entry.name,
          isDirectory: entry.isDirectory(),
        })),
      );

      await writeMirrorFile(path.join(targetAbsolutePath, 'index.html'), directoryIndexHtml);
      continue;
    }

    await ensureParentDirectory(targetAbsolutePath);
    await fs.copyFile(artifact.sourceAbsolutePath, targetAbsolutePath);
  }
}

async function rewriteMarkdownLinks(content, sourceRelativePath, linkedArtifacts) {
  const lines = content.split('\n');
  const rewrittenLines = [];
  let inFence = false;

  for (const line of lines) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      rewrittenLines.push(line);
      continue;
    }

    if (inFence) {
      rewrittenLines.push(line);
      continue;
    }

    const rewrittenLineParts = [];
    let lastIndex = 0;
    const linkPattern = /(!?\[[^\]]*\]\()([^)]+)(\))/g;

    for (const match of line.matchAll(linkPattern)) {
      const [fullMatch, prefix, rawTarget, suffix] = match;
      const startIndex = match.index ?? 0;
      rewrittenLineParts.push(line.slice(lastIndex, startIndex));

      let rewrittenTarget = rawTarget.trim();
      let wrappedInAngles = false;

      if (rewrittenTarget.startsWith('<') && rewrittenTarget.endsWith('>')) {
        rewrittenTarget = rewrittenTarget.slice(1, -1);
        wrappedInAngles = true;
      }

      if (!isExternalTarget(rewrittenTarget) && !rewrittenTarget.startsWith('/') && !rewrittenTarget.startsWith('#')) {
        const { pathPart, suffix: targetSuffix } = splitLinkTarget(rewrittenTarget);
        const resolvedTarget = toRepoRelativePath(sourceRelativePath, pathPart);

        if (resolvedTarget) {
          const targetStats = await fs.stat(resolvedTarget.resolvedAbsolutePath).catch(() => null);

          if (targetStats?.isFile() && isMirroredDocPath(resolvedTarget.repoRelativePath)) {
            rewrittenTarget = `${buildMirroredDocUrl(resolvedTarget.repoRelativePath)}${targetSuffix}`;
          } else if (targetStats?.isDirectory()) {
            linkedArtifacts.set(resolvedTarget.repoRelativePath, {
              type: 'directory',
              repoRelativePath: resolvedTarget.repoRelativePath,
              sourceAbsolutePath: resolvedTarget.resolvedAbsolutePath,
            });
            rewrittenTarget = `${buildLinkedAssetUrl(resolvedTarget.repoRelativePath, true)}${targetSuffix}`;
          } else if (targetStats?.isFile()) {
            linkedArtifacts.set(resolvedTarget.repoRelativePath, {
              type: 'file',
              repoRelativePath: resolvedTarget.repoRelativePath,
              sourceAbsolutePath: resolvedTarget.resolvedAbsolutePath,
            });
            rewrittenTarget = `${buildLinkedAssetUrl(resolvedTarget.repoRelativePath)}${targetSuffix}`;
          }
        }
      }

      if (wrappedInAngles) {
        rewrittenTarget = `<${rewrittenTarget}>`;
      }

      rewrittenLineParts.push(`${prefix}${rewrittenTarget}${suffix}`);
      lastIndex = startIndex + fullMatch.length;
    }

    rewrittenLineParts.push(line.slice(lastIndex));
    rewrittenLines.push(rewrittenLineParts.join(''));
  }

  return rewrittenLines.join('\n');
}

function hasLeadingBlockquote(body) {
  return /^\s*(<blockquote\b[^>]*>|>\s)/i.test(body);
}

function hasSecondLevelSections(body) {
  return /^##\s+.+$/m.test(body);
}

function splitSecondLevelSections(body) {
  const matches = [...body.matchAll(/^##\s+(.+?)\s*$/gm)];
  if (matches.length === 0) {
    return { prelude: body.trimEnd(), sections: [] };
  }

  const prelude = body.slice(0, matches[0].index).trimEnd();
  const sections = [];

  for (let index = 0; index < matches.length; index += 1) {
    const current = matches[index];
    const start = current.index + current[0].length;
    const end = index + 1 < matches.length ? matches[index + 1].index : body.length;
    const content = body.slice(start, end).trim();

    sections.push({
      title: current[1].trim(),
      content,
    });
  }

  return { prelude, sections };
}

function renderSecondLevelSectionsAsBlockquotes(body) {
  const { prelude, sections } = splitSecondLevelSections(body);
  if (sections.length === 0) {
    return body.trimEnd();
  }

  const parts = [];
  if (prelude) {
    parts.push(prelude);
  }

  for (const section of sections) {
    const lines = [`> **${section.title}**`];

    if (section.content) {
      lines.push('>');
      const contentLines = section.content.split('\n');
      let previousType = 'blank';

      for (const line of contentLines) {
        const trimmed = line.trim();
        let currentType = 'text';

        if (trimmed === '') {
          currentType = 'blank';
        } else if (/^(?:[-*+]\s+|\d+\.\s+)/.test(trimmed)) {
          currentType = 'list';
        } else if (/^\|/.test(trimmed)) {
          currentType = 'table';
        } else if (/^#{3,}\s+/.test(trimmed)) {
          currentType = 'heading';
        }

        if (
          currentType !== 'blank' &&
          previousType !== 'blank' &&
          ((currentType === 'list' && previousType !== 'list') ||
            (previousType === 'list' && currentType !== 'list') ||
            (currentType === 'table' && previousType !== 'table') ||
            (previousType === 'table' && currentType !== 'table'))
        ) {
          lines.push('>');
        }

        lines.push(trimmed === '' ? '>' : `> ${line}`);
        previousType = currentType;
      }
    } else {
      lines.push('>');
    }

    parts.push(lines.join('\n'));
  }

  return parts.join('\n\n').trimEnd();
}

function renderInlineMarkdown(value) {
  return escapeHtml(value)
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/_([^_]+)_/g, '<em>$1</em>');
}

function renderSectionContentAsHtml(sectionContent) {
  if (!sectionContent) {
    return '';
  }
  const lines = sectionContent.split('\n');
  const blocks = [];
  let current = null;

  function flushCurrent() {
    if (current && current.lines.length > 0) {
      blocks.push(current);
    }
    current = null;
  }

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();

    if (trimmed === '') {
      flushCurrent();
      continue;
    }

    const unorderedMatch = trimmed.match(/^[-*+]\s+(.+)$/);
    if (unorderedMatch) {
      if (!current || current.type !== 'ul') {
        flushCurrent();
        current = { type: 'ul', lines: [] };
      }
      current.lines.push(unorderedMatch[1]);
      continue;
    }

    const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (orderedMatch) {
      if (!current || current.type !== 'ol') {
        flushCurrent();
        current = { type: 'ol', lines: [] };
      }
      current.lines.push(orderedMatch[1]);
      continue;
    }

    if (!current || current.type !== 'p') {
      flushCurrent();
      current = { type: 'p', lines: [] };
    }
    current.lines.push(trimmed);
  }

  flushCurrent();

  return blocks
    .map((block) => {
      if (block.type === 'ul') {
        return ['<ul>', ...block.lines.map((line) => `  <li>${renderInlineMarkdown(line)}</li>`), '</ul>'].join('\n');
      }

      if (block.type === 'ol') {
        return ['<ol>', ...block.lines.map((line) => `  <li>${renderInlineMarkdown(line)}</li>`), '</ol>'].join('\n');
      }

      return `<p>${renderInlineMarkdown(block.lines.join(' '))}</p>`;
    })
    .join('\n');
}

function renderSectionAsHtmlBlockquote(section) {
  const lines = ['<blockquote>', `  <p><strong>${escapeHtml(section.title)}</strong></p>`];
  const renderedContent = renderSectionContentAsHtml(section.content);

  if (renderedContent) {
    lines.push(renderedContent);
  }

  lines.push('</blockquote>');
  return lines.join('\n');
}

function rebuildSecondLevelSections(prelude, sections) {
  return [prelude, ...sections.map((section) => `## ${section.title}${section.content ? `\n\n${section.content}` : ''}`)]
    .filter(Boolean)
    .join('\n\n')
    .trimEnd();
}

function promoteFirstSecondLevelSection(body) {
  const { prelude, sections } = splitSecondLevelSections(body);
  if (sections.length === 0) {
    return { prelude: '', note: '', body: body.trimEnd() };
  }

  const [firstSection, ...remainingSections] = sections;
  const note = `${renderSectionAsHtmlBlockquote(firstSection)}\n\n`;

  return { prelude, note, body: rebuildSecondLevelSections('', remainingSections) };
}

function renderLogSectionsDescending(body) {
  const { prelude, sections } = splitSecondLevelSections(body);
  if (sections.length === 0) {
    return body.trimEnd();
  }

  const datedSections = [];
  const undatedSections = [];

  for (const section of sections) {
    const datedMatch = section.title.match(/^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2} [A-Z]+)\s+—/);
    if (datedMatch) {
      datedSections.push({ ...section, sortKey: datedMatch[1] });
    } else {
      undatedSections.push(section);
    }
  }

  datedSections.sort((left, right) => right.sortKey.localeCompare(left.sortKey));

  return rebuildSecondLevelSections(prelude, [...datedSections, ...undatedSections]);
}

function inferContextText(sourceRelativePath, description, title) {
  if (description) {
    return description;
  }

  if (sourceRelativePath === 'index.md') {
    return 'This page is the navigational entrypoint into the local LLM Wiki corpus.';
  }

  if (sourceRelativePath === 'README.md') {
    return 'This page explains what the Microsoft Health Common User Interface repository is for and how the local LLM Wiki is organized.';
  }

  if (sourceRelativePath === 'AGENTS.md') {
    return 'This page records the repository operating rules so future work stays conservative, traceable, and source-aware.';
  }

  if (sourceRelativePath === 'log.md') {
    return 'This page is the append-only chronology of substantial work carried out in the repository.';
  }

  if (sourceRelativePath.startsWith('wiki/')) {
    return `This page is a maintained wiki entry for ${title}, intended to separate retrieved material from synthesis and modern interpretation.`;
  }

  if (sourceRelativePath.startsWith('derived/extracted-text/')) {
    return 'This page mirrors machine-extracted text from a localized source and may contain OCR or extraction artifacts.';
  }

  if (sourceRelativePath.startsWith('derived/normalized-markdown/')) {
    return 'This page is a cleaned markdown wrapper around localized source material, intended for readable inspection rather than as the canonical maintained interpretation.';
  }

  if (sourceRelativePath.startsWith('derived/inventories/')) {
    return 'This page is a machine-produced inventory to help navigate the corpus and trace artifacts back to their sources.';
  }

  if (sourceRelativePath.startsWith('derived/')) {
    return 'This page is a derived artifact retained for traceability and navigation back to the raw source material.';
  }

  if (sourceRelativePath.startsWith('raw/metadata/')) {
    return 'This page mirrors structured provenance metadata for localized source material.';
  }

  if (sourceRelativePath.startsWith('raw/manifests/')) {
    return 'This page mirrors a machine-readable manifest describing localized source material.';
  }

  if (sourceRelativePath.startsWith('raw/')) {
    return 'This page points to raw source material preserved for provenance and later inspection.';
  }

  return `This page is part of the local LLM Wiki view for ${title}.`;
}

function buildContextNote(sourceRelativePath, description, title, body) {
  const contextTitle = 'Plain English context';
  const contextText = inferContextText(sourceRelativePath, description, title);

  return [
    '<blockquote>',
    `  <p><strong>${escapeHtml(contextTitle)}</strong></p>`,
    `  <p>${escapeHtml(contextText)}</p>`,
    '</blockquote>',
    '',
  ].join('\n');
}

function extractDescriptions(indexContent) {
  const descriptions = new Map();
  const pattern = /^- \[[^\]]+\]\(([^)]+)\)\s+—\s+(.+)$/gm;

  for (const match of indexContent.matchAll(pattern)) {
    const target = match[1].trim();
    const description = match[2].trim();
    descriptions.set(normalizePath(target), description);
  }

  descriptions.set('index.md', 'Navigational entrypoint for the canonical LLM Wiki corpus.');
  descriptions.set('README.md', 'Repository purpose and framing.');
  descriptions.set('AGENTS.md', 'Repository operating rules and workflow expectations.');
  descriptions.set('log.md', 'Append-only chronology of substantial work.');

  return descriptions;
}

async function walkFiles(directoryPath, extension) {
  const entries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directoryPath, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await walkFiles(fullPath, extension)));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith(extension)) {
      files.push(fullPath);
    }
  }

  return files.sort((left, right) => left.localeCompare(right));
}

async function ensureParentDirectory(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true });
}

async function writeMirrorFile(targetPath, content) {
  await ensureParentDirectory(targetPath);
  await fs.writeFile(targetPath, content, 'utf8');
}

async function mirrorMarkdownFile(sourceAbsolutePath, descriptions, linkedArtifacts) {
  const sourceRelativePath = normalizePath(path.relative(repoRoot, sourceAbsolutePath));
  const targetPath = path.join(docsRoot, sourceRelativePath);
  const content = await fs.readFile(sourceAbsolutePath, 'utf8');
  const normalizedContent = content.replace(/^\uFEFF/, '');
  const specialRootTitles = {
    'README.md': 'README.md',
  };
  const specialRootBodyPassthrough = new Set(['README.md']);
  const { title: extractedTitle, body: extractedBody } = stripFirstHeading(normalizedContent);
  const rawBody = specialRootBodyPassthrough.has(sourceRelativePath)
    ? normalizedContent.trimStart()
    : extractedBody;
  const body = sourceRelativePath === 'README.md' ? decorateReadmeDisplayTitle(rawBody) : rawBody;
  const title =
    specialRootTitles[sourceRelativePath] ??
    extractedTitle ??
    humanizeFileName(path.basename(sourceRelativePath));
  const description = descriptions.get(sourceRelativePath);
  const frontmatter = buildFrontmatter({ title, description });
  const canonicalNote = buildCanonicalNote(sourceRelativePath);
  const reorderedBodyBase = sourceRelativePath === 'log.md' ? renderLogSectionsDescending(body) : body.trimEnd();
  const reorderedBody =
    sourceRelativePath === 'AGENTS.md' ? stripAgentsRuleHeadingNumbers(reorderedBodyBase) : reorderedBodyBase;
  let contextNote = '';
  let leadingBody = '';
  let transformedBody = reorderedBody;

  if (sourceRelativePath === 'log.md') {
    transformedBody = reorderedBody;
  } else if (hasLeadingBlockquote(body)) {
    transformedBody = reorderedBody;
  } else if (hasSecondLevelSections(reorderedBody)) {
    const promoted = promoteFirstSecondLevelSection(reorderedBody);
    leadingBody = promoted.prelude ? `${promoted.prelude}\n\n` : '';
    contextNote = promoted.note;
    transformedBody = promoted.body;
  } else {
    contextNote = buildContextNote(sourceRelativePath, description, title, reorderedBody);
    transformedBody = reorderedBody;
  }
  const rewrittenContent = await rewriteMarkdownLinks(
    `${canonicalNote}${leadingBody}${contextNote}${transformedBody}`,
    sourceRelativePath,
    linkedArtifacts,
  );
  const finalContent = `${frontmatter}${rewrittenContent}\n`;

  await writeMirrorFile(targetPath, finalContent);

  if (sourceRelativePath === 'index.md') {
    await writeMirrorFile(path.join(docsRoot, 'index', 'index.md'), finalContent);
  }
}

function renderJsonValue(value) {
  if (value == null) {
    return '`null`';
  }

  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'number' || typeof value === 'boolean') {
    return `\`${String(value)}\``;
  }

  return `\`${JSON.stringify(value)}\``;
}

function buildJsonMarkdown(sourceRelativePath, parsed, description) {
  const title =
    (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && typeof parsed.title === 'string'
      ? parsed.title
      : null) ?? humanizeFileName(path.basename(sourceRelativePath));

  const frontmatter = buildFrontmatter({
    title,
    description: description ?? `Structured provenance mirrored from \`${sourceRelativePath}\`.`,
  });

  const lines = [
    frontmatter,
    buildCanonicalNote(sourceRelativePath),
    buildContextNote(sourceRelativePath, description, title, ''),
  ];

  if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
    const preferredKeys = [
      'original_url',
      'retrieved_on',
      'local_path',
      'source_category',
      'source_type',
      'retrieval_status',
      'trust_note',
    ];

    const availableKeys = preferredKeys.filter((key) => key in parsed);
    if (availableKeys.length > 0) {
      lines.push('## Key fields', '');
      for (const key of availableKeys) {
        lines.push(`- \`${key}\`: ${renderJsonValue(parsed[key])}`);
      }
      lines.push('');
    }

    if (Array.isArray(parsed.trust_notes) && parsed.trust_notes.length > 0) {
      lines.push('## Trust notes', '');
      for (const note of parsed.trust_notes) {
        lines.push(`- ${note}`);
      }
      lines.push('');
    }

    if (Array.isArray(parsed.files) && parsed.files.length > 0) {
      lines.push('## Files', '');
      for (const file of parsed.files) {
        const fileTitle = typeof file.title === 'string' ? file.title : 'Untitled file';
        const category =
          typeof file.source_category === 'string' ? ` (${file.source_category})` : '';
        lines.push(`- **${fileTitle}**${category}`);
      }
      lines.push('');
    }
  }

  lines.push('## Raw JSON', '', '```json', JSON.stringify(parsed, null, 2), '```', '');

  return lines.join('\n');
}

async function mirrorJsonFile(sourceAbsolutePath, descriptions) {
  const sourceRelativePath = normalizePath(path.relative(repoRoot, sourceAbsolutePath));
  const targetPath = path.join(docsRoot, sourceRelativePath.replace(/\.json$/, '.md'));
  const content = await fs.readFile(sourceAbsolutePath, 'utf8');
  const parsed = JSON.parse(content);
  const markdown = buildJsonMarkdown(sourceRelativePath, parsed, descriptions.get(sourceRelativePath));

  await writeMirrorFile(targetPath, markdown);
}

export async function syncRepoToDocs() {
  const indexPath = path.join(repoRoot, 'index.md');
  const indexContent = await fs.readFile(indexPath, 'utf8');
  const descriptions = extractDescriptions(indexContent);
  const linkedArtifacts = new Map();

  await fs.rm(docsRoot, { recursive: true, force: true });
  await fs.mkdir(docsRoot, { recursive: true });

  for (const fileName of rootMarkdownFiles) {
    await mirrorMarkdownFile(path.join(repoRoot, fileName), descriptions, linkedArtifacts);
  }

  for (const directory of markdownDirs) {
    const absoluteDirectory = path.join(repoRoot, directory);
    const markdownFiles = await walkFiles(absoluteDirectory, '.md');
    for (const sourceAbsolutePath of markdownFiles) {
      await mirrorMarkdownFile(sourceAbsolutePath, descriptions, linkedArtifacts);
    }
  }

  for (const directory of jsonDirs) {
    const absoluteDirectory = path.join(repoRoot, directory);
    const jsonFiles = await walkFiles(absoluteDirectory, '.json');
    for (const sourceAbsolutePath of jsonFiles) {
      await mirrorJsonFile(sourceAbsolutePath, descriptions);
    }
  }

  const generatedAt = new Date().toISOString();
  await fs.writeFile(
    path.join(docsRoot, '.sync-meta.json'),
    `${JSON.stringify({ generatedAt }, null, 2)}\n`,
    'utf8',
  );

  await publishLinkedArtifacts(linkedArtifacts);

  return { generatedAt };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const result = await syncRepoToDocs();
  console.log(`[sync-content] Generated docs mirror at ${result.generatedAt}`);
}
