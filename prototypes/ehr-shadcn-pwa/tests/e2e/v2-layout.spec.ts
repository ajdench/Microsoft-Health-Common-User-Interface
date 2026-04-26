import { expect, test } from '@playwright/test'

test('renders shadcn-native V2 consultation shell without horizontal overflow', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('banner', { name: 'Current patient context' })).toBeVisible()
  await expect(page.getByRole('region', { name: 'Offline and sync state' })).toBeVisible()
  const consultation = page.getByRole('region', { name: 'Consultation capture' })
  await expect(consultation).toBeVisible()
  await expect(consultation.getByText('Validation open')).toBeVisible()
  await expect(consultation.getByText('Not saved locally')).toBeVisible()
  await expect(consultation.getByText('Consultation not signed')).toBeVisible()
  await expect(consultation.getByRole('button', { name: 'Review Validation' })).toHaveAttribute('data-variant', 'clinicalWarn')
  await expect(consultation.getByRole('button', { name: 'Save Locally' })).toHaveAttribute('data-variant', 'clinicalSuccess')
  await expect(consultation.getByRole('button', { name: 'Sign Consultation' })).toHaveAttribute('data-variant', 'clinicalPurple')
  const railMetrics = await consultation.getByTestId('consultation-banner-action-rail').evaluate((rail) => {
    const pills = Array.from(rail.querySelectorAll('[data-slot="badge"]')).map((element) => Math.round(element.getBoundingClientRect().width))
    const buttons = Array.from(rail.querySelectorAll('[data-slot="button"]')).map((element) => Math.round(element.getBoundingClientRect().width))
    return { pills, buttons }
  })
  expect(railMetrics.pills).toEqual(railMetrics.buttons)
  await expect(page.getByText('Follow-up tasks')).toHaveCount(0)
  await expect(consultation.locator('[data-slot="card-title"]').filter({ hasText: 'Follow-up' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Medication review' })).toBeVisible()

  const reason = consultation.locator('[data-section-id="reason"]')
  await expect(reason.getByText('Hypertensive disorder')).toBeVisible()
  await expect(reason.getByText('38341003')).toBeVisible()
  await expect(reason.getByText('[38341003]')).toHaveCount(0)
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Disorder', { exact: true })).toBeVisible()
  await expect(reason.getByText('Prioritised')).toBeVisible()
  const hypertensionChip = reason.locator('[aria-label="Selected SNOMED CT concepts"] li').filter({ hasText: 'Hypertensive disorder' })
  await expect(hypertensionChip.getByText('Hypertensive disorder')).toHaveClass(/text-sm/)
  await expect(hypertensionChip.getByText('Hypertensive disorder')).toHaveClass(/font-normal/)
  await expect(hypertensionChip.getByText('Hypertensive disorder')).not.toHaveClass(/font-medium/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/text-destructive/)
  await expect(hypertensionChip.locator('svg')).toHaveAttribute('stroke-width', '3')
  const hypertensionRemoveAlignment = await hypertensionChip.evaluate((chip) => {
    const button = chip.querySelector('button')

    if (!button) {
      return Number.POSITIVE_INFINITY
    }

    return Math.round(chip.getBoundingClientRect().right - button.getBoundingClientRect().right)
  })
  expect(hypertensionRemoveAlignment).toBeLessThanOrEqual(8)
  await expect(reason.getByRole('button', { name: 'Search SNOMED CT concepts' })).toHaveCount(0)
  const reasonCodeSearch = reason.getByRole('textbox', { name: 'Search SNOMED CT concepts' })
  await expect(reasonCodeSearch).toBeVisible()
  await reasonCodeSearch.fill('diabetes')
  await expect(page.locator('[data-snomed-result-header]').getByText('Concept')).toBeVisible()
  await expect(page.locator('[data-snomed-result-header]').getByText('Type')).toBeVisible()
  await expect(page.locator('[data-snomed-result-header]').getByText('Priority')).toBeVisible()
  const diabetesRows = page.locator('[data-slot="command-item"]').filter({ hasText: 'diabetes' })
  const resultColumnMetrics = await diabetesRows.evaluateAll((rows) => {
    const header = document.querySelector('[data-snomed-result-header]')
    const headerTypeColumn = document.querySelector('[data-snomed-result-header-column="type"]')
    const headerPriorityColumn = document.querySelector('[data-snomed-result-header-column="priority"]')

    return rows.map((row) => {
      const typeColumn = row.querySelector('[data-snomed-result-column="type"]')
      const priorityColumn = row.querySelector('[data-snomed-result-column="priority"]')

      if (!header || !headerTypeColumn || !headerPriorityColumn || !typeColumn || !priorityColumn) {
        return null
      }

      return {
        headerTypeWidth: Math.round(headerTypeColumn.getBoundingClientRect().width),
        headerPriorityWidth: Math.round(headerPriorityColumn.getBoundingClientRect().width),
        headerTypeRightGap: Math.round(header.getBoundingClientRect().right - headerTypeColumn.getBoundingClientRect().right),
        headerPriorityRightGap: Math.round(header.getBoundingClientRect().right - headerPriorityColumn.getBoundingClientRect().right),
        typeWidth: Math.round(typeColumn.getBoundingClientRect().width),
        priorityWidth: Math.round(priorityColumn.getBoundingClientRect().width),
        typeRightGap: Math.round(row.getBoundingClientRect().right - typeColumn.getBoundingClientRect().right),
        priorityRightGap: Math.round(row.getBoundingClientRect().right - priorityColumn.getBoundingClientRect().right),
      }
    })
  })
  const validColumnMetrics = resultColumnMetrics.filter((metrics): metrics is NonNullable<typeof metrics> => metrics !== null)
  expect(validColumnMetrics.length).toBeGreaterThan(1)
  expect(new Set(validColumnMetrics.map((metrics) => metrics.typeWidth)).size).toBe(1)
  expect(new Set(validColumnMetrics.map((metrics) => metrics.priorityWidth)).size).toBe(1)
  expect(new Set(validColumnMetrics.map((metrics) => metrics.priorityRightGap)).size).toBe(1)
  validColumnMetrics.forEach((metrics) => {
    expect(metrics.headerTypeWidth).toBe(metrics.typeWidth)
    expect(metrics.headerPriorityWidth).toBe(metrics.priorityWidth)
    expect(metrics.headerTypeRightGap).toBe(metrics.typeRightGap)
    expect(metrics.headerPriorityRightGap).toBe(metrics.priorityRightGap)
    expect(metrics.typeRightGap).toBeGreaterThan(metrics.priorityRightGap)
  })
  const type2DiabetesResult = page.locator('[data-slot="command-item"]').filter({ hasText: 'Type 2 diabetes mellitus' })
  await expect(type2DiabetesResult).toBeVisible()
  await type2DiabetesResult.click({ force: true })
  await expect(reason.getByText('Type 2 diabetes mellitus')).toBeVisible()
  await expect(reason.getByText('44054006')).toBeVisible()
  await expect(reason.getByText('[44054006]')).toHaveCount(0)
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Disorder', { exact: true })).toHaveCount(2)
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Prioritised')).toHaveCount(2)

  await reason.getByRole('button', { name: 'Remove Type 2 diabetes mellitus' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByText('Remove coded concept?')).toBeVisible()
  await page.getByRole('button', { name: 'Remove concept' }).click()
  await expect(reason.getByText('Type 2 diabetes mellitus')).toHaveCount(0)

  await consultation.getByRole('button', { name: 'Review Validation' }).click()
  await expect(consultation.locator('[data-section-id="assessment"]')).toHaveClass(/ring-2/)
  await expect(page.getByLabel('Assessment notes')).toBeFocused()

  await page.getByRole('tab', { name: 'Results' }).click()
  await expect(page.getByRole('heading', { name: 'Recent results' })).toBeVisible()

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(1)

  const sectionOrder = await page
    .getByRole('region', { name: 'Consultation capture' })
    .locator('[data-slot="card-title"]')
    .evaluateAll((titles) => titles.map((title) => title.textContent?.trim()))
  expect(sectionOrder.indexOf('Plan')).toBeGreaterThan(-1)
  expect(sectionOrder.indexOf('Follow-up')).toBeGreaterThan(sectionOrder.indexOf('Plan'))
})
