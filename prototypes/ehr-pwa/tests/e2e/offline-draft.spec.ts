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

test('adds a coded entry through the accessible combobox', async ({ page }) => {
  await page.goto('/patients/p-1001/consultation')

  await expect(page.getByLabel('Consultation action tray')).toContainText('No coded entries selected.')

  const codeSearch = page.getByRole('combobox', { name: 'Search coded entries' })
  await codeSearch.fill('hypertensive')
  await page.getByRole('option', { name: /Hypertensive disorder/ }).click()

  await expect(page.getByLabel('Added coded entries')).toContainText('Hypertensive disorder')
  await expect(page.getByRole('button', { name: 'Remove Hypertensive disorder' })).toBeVisible()
  await expect(page.getByLabel('Consultation action tray')).toContainText('1 selected')
})

test('uses the compact action block before notes when the consultation area is constrained', async ({ page }) => {
  await page.setViewportSize({ width: 1108, height: 760 })
  await page.goto('/patients/p-1001/consultation?panel=results')

  const workspaceBox = await page.locator('.consultation-workspace').boundingBox()
  const actionBox = await page.locator('.action-stack').boundingBox()
  const sectionBox = await page.locator('.section-stack').boundingBox()

  expect(workspaceBox).not.toBeNull()
  expect(actionBox).not.toBeNull()
  expect(sectionBox).not.toBeNull()

  expect(actionBox!.y).toBeLessThan(sectionBox!.y)
  expect(actionBox!.width).toBeGreaterThan(workspaceBox!.width * 0.9)
})

test('keeps the reference pane usable across tabs and narrow widths', async ({ page }) => {
  for (const viewport of [
    { width: 1108, height: 760 },
    { width: 390, height: 900 },
  ]) {
    await page.setViewportSize(viewport)

    for (const panel of ['medications', 'alerts', 'results']) {
      await page.goto(`/patients/p-1001/consultation?panel=${panel}`)
      await expect(page.getByRole('banner', { name: 'Current patient context' })).toContainText('Alex Morgan')

      const hasHorizontalOverflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)
      expect(hasHorizontalOverflow).toBe(false)
    }
  }

  await page.setViewportSize({ width: 390, height: 900 })
  await page.goto('/patients/p-1001/consultation?panel=results')
  await expect(page.getByLabel('Clinical results list')).toBeVisible()
  await expect(page.locator('.clinical-table')).toBeHidden()
})

test('keeps patient and sync state visible while scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 })
  await page.goto('/patients/p-1001/consultation?panel=results')

  await page.evaluate(() => window.scrollTo(0, 900))

  const chromeBox = await page.locator('.app-chrome').boundingBox()
  const syncBox = await page.getByLabel('Offline and sync state').boundingBox()
  const simulateButtonBox = await page.getByRole('button', { name: 'Simulate sync failure' }).boundingBox()

  expect(chromeBox).not.toBeNull()
  expect(syncBox).not.toBeNull()
  expect(simulateButtonBox).not.toBeNull()

  expect(chromeBox!.y).toBe(0)
  expect(syncBox!.y).toBeGreaterThanOrEqual(0)
  expect(simulateButtonBox!.height).toBeLessThanOrEqual(34)
  expect(simulateButtonBox!.width).toBeLessThan(160)
})
