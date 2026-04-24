import { expect, test } from '@playwright/test'

test('recovers a consultation draft after offline reload', async ({ page, context }) => {
  await page.goto('/patients/p-1001/consultation?panel=results')
  await expect(page.getByRole('banner', { name: 'Current patient context' })).toContainText('Alex Morgan')

  await page.getByRole('textbox', { name: 'History section' }).fill('Patient reports improved adherence after blister pack change.')
  await expect(page.getByLabel('Offline and sync state')).toContainText('saved locally')

  await context.setOffline(true)
  await page.reload()

  await expect(page.getByRole('textbox', { name: 'History section' })).toHaveValue(
    'Patient reports improved adherence after blister pack change.',
  )
  await expect(page.getByLabel('Offline and sync state')).toContainText('Offline')
  await expect(page.getByLabel('Offline and sync state')).toContainText('Recovered local draft')
  await expect(page.getByRole('banner', { name: 'Current patient context' })).toContainText('MRN 946 730 1120')

  await context.setOffline(false)
})
