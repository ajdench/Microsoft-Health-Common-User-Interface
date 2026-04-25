import { expect, test } from '@playwright/test'

test('renders shadcn-native V2 consultation shell without horizontal overflow', async ({ page }) => {
  await page.goto('/')

  await expect(page.getByRole('banner', { name: 'Current patient context' })).toBeVisible()
  await expect(page.getByRole('region', { name: 'Offline and sync state' })).toBeVisible()
  await expect(page.getByRole('region', { name: 'Consultation capture' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Medication review' })).toBeVisible()

  await page.getByRole('tab', { name: 'Results' }).click()
  await expect(page.getByRole('heading', { name: 'Recent results' })).toBeVisible()

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(1)
})
