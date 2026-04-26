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
  await expect(page.getByText('Follow-up tasks')).toHaveCount(0)
  await expect(consultation.locator('[data-slot="card-title"]').filter({ hasText: 'Follow-up' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Medication review' })).toBeVisible()

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
