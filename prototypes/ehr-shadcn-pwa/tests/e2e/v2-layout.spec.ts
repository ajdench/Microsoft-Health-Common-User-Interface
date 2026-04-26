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
  await expect(consultation.getByRole('button', { name: 'Review validation' })).toBeVisible()
  await expect(consultation.getByRole('button', { name: 'Save locally' })).toBeVisible()
  await expect(consultation.getByRole('button', { name: 'Sign consultation' })).toBeVisible()
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
  await expect(reason.getByText('Prioritised')).toBeVisible()
  await reason.getByRole('button', { name: 'Search SNOMED CT concepts' }).click()
  await page.getByPlaceholder('Search SNOMED CT concepts...').fill('diabetes')
  await page.getByText('Type 2 diabetes mellitus').click()
  await expect(reason.getByText('Type 2 diabetes mellitus')).toBeVisible()
  await expect(reason.getByText('44054006')).toBeVisible()
  await expect(reason.getByText('[44054006]')).toHaveCount(0)
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Prioritised')).toHaveCount(2)

  await reason.getByRole('button', { name: 'Remove Type 2 diabetes mellitus' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByText('Remove coded concept?')).toBeVisible()
  await page.getByRole('button', { name: 'Remove concept' }).click()
  await expect(reason.getByText('Type 2 diabetes mellitus')).toHaveCount(0)

  await consultation.getByRole('button', { name: 'Review validation' }).click()
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
