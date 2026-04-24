import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

const cssPath = resolve('src/styles.css')
const css = readFileSync(cssPath, 'utf8')
const spacingProperties = /^(gap|row-gap|column-gap|padding(?:-[\w-]+)?|margin(?:-[\w-]+)?|inset(?:-[\w-]+)?|top|right|bottom|left)$/
const allowedRawValues = new Set(['0', 'auto', 'none'])
const allowedRawPatterns = [
  /^var\(--/,
  /^calc\(/,
  /^min\(/,
  /^max\(/,
  /^clamp\(/,
  /^repeat\(/,
  /^rgba?\(/,
  /^#[0-9a-fA-F]{3,8}$/,
]

const violations = []

for (const [index, line] of css.split('\n').entries()) {
  const trimmed = line.trim()
  const declaration = trimmed.match(/^([\w-]+)\s*:\s*([^;]+);/)

  if (!declaration) {
    continue
  }

  const [, property, value] = declaration

  if (!spacingProperties.test(property)) {
    continue
  }

  const tokens = value.split(/\s+/)
  const hasRawLength = tokens.some((token) => {
    const normalized = token.replace(/[(),]/g, '')

    if (allowedRawValues.has(normalized)) {
      return false
    }

    if (allowedRawPatterns.some((pattern) => pattern.test(normalized))) {
      return false
    }

    return /^-?\d*\.?\d+(px|rem|em|vh|vw|%)$/.test(normalized)
  })

  if (hasRawLength) {
    violations.push(`${cssPath}:${index + 1} ${trimmed}`)
  }
}

if (violations.length > 0) {
  console.error('Spacing declarations must use design tokens or documented custom properties.')
  console.error(violations.join('\n'))
  process.exit(1)
}

console.log('Spacing token check passed.')

