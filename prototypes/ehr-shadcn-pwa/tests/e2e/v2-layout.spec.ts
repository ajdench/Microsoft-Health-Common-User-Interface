import { expect, test } from '@playwright/test'

const DEMO_CLINICAL_CODE_COUNT = 29

test('renders shadcn-native V2 consultation shell without horizontal overflow', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 900 })
  await page.goto('/')
  await expect(page.locator('[data-medication-column-header]').getByText('Medication', { exact: true })).toBeVisible()
  const mobileColumnMetrics = await page.locator('[data-app-main-grid]').evaluate((main) => {
    const consultation = main.querySelector('[data-consultation-column]')
    const reference = main.querySelector('[data-reference-panel]')

    if (!consultation || !reference) {
      return null
    }

    const consultationBox = consultation.getBoundingClientRect()
    const referenceBox = reference.getBoundingClientRect()

    return {
      columns: getComputedStyle(main).gridTemplateColumns.split(' ').length,
      consultationTop: Math.round(consultationBox.top),
      consultationWidth: Math.round(consultationBox.width),
      referenceTop: Math.round(referenceBox.top),
      consultationLeft: Math.round(consultationBox.left),
      referenceLeft: Math.round(referenceBox.left),
      referenceWidth: Math.round(referenceBox.width),
    }
  })
  expect(mobileColumnMetrics).not.toBeNull()
  expect(mobileColumnMetrics?.columns).toBe(1)
  expect(mobileColumnMetrics?.referenceTop).toBeLessThan(mobileColumnMetrics?.consultationTop ?? 0)
  expect(mobileColumnMetrics?.referenceLeft).toBe(mobileColumnMetrics?.consultationLeft)
  expect(mobileColumnMetrics?.referenceWidth).toBe(mobileColumnMetrics?.consultationWidth)

  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto('/')

  await expect(page.getByRole('banner', { name: 'Current patient context' })).toBeVisible()
  await expect(page.getByText('Margaret Ellis')).toBeVisible()
  await expect(page.getByText('DOB 1958-04-17')).toBeVisible()
  await expect(page.getByText('68 years')).toBeVisible()
  await expect(page.getByText('Female')).toBeVisible()
  await expect(page.getByRole('region', { name: 'Offline and sync state' })).toBeVisible()
  const consultation = page.getByRole('region', { name: 'Consultation capture' })
  await expect(consultation).toBeVisible()
  const cardTitleMetrics = await page.locator('[data-slot="card-title"]').evaluateAll((titles) => {
    const foregroundProbe = document.createElement('span')
    foregroundProbe.className = 'text-foreground'
    document.body.append(foregroundProbe)
    const foreground = getComputedStyle(foregroundProbe).color
    foregroundProbe.remove()

    return titles.map((title) => {
      const styles = getComputedStyle(title)

      return {
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        color: styles.color,
        foreground,
      }
    })
  })
  expect(cardTitleMetrics.length).toBeGreaterThan(0)
  for (const metric of cardTitleMetrics) {
    expect(metric.fontSize).toBe('14px')
    expect(Number(metric.fontWeight)).toBeGreaterThanOrEqual(500)
    expect(metric.color).toBe(metric.foreground)
  }
  const desktopColumnMetrics = await page.locator('[data-app-main-grid]').evaluate((main) => {
    const consultationColumn = main.querySelector('[data-consultation-column]')
    const reference = main.querySelector('[data-reference-panel]')

    if (!consultationColumn || !reference) {
      return null
    }

    const consultationBox = consultationColumn.getBoundingClientRect()
    const referenceBox = reference.getBoundingClientRect()

    return {
      columns: getComputedStyle(main).gridTemplateColumns.split(' ').length,
      consultationTop: Math.round(consultationBox.top),
      consultationWidth: Math.round(consultationBox.width),
      referenceTop: Math.round(referenceBox.top),
      consultationLeft: Math.round(consultationBox.left),
      referenceLeft: Math.round(referenceBox.left),
      referenceWidth: Math.round(referenceBox.width),
    }
  })
  expect(desktopColumnMetrics).not.toBeNull()
  expect(desktopColumnMetrics?.columns).toBe(1)
  expect(desktopColumnMetrics?.referenceTop).toBeLessThan(desktopColumnMetrics?.consultationTop ?? 0)
  expect(desktopColumnMetrics?.referenceLeft).toBe(desktopColumnMetrics?.consultationLeft)
  expect(desktopColumnMetrics?.referenceWidth).toBe(desktopColumnMetrics?.consultationWidth)
  await expect(consultation.getByText('Validation open')).toBeVisible()
  await expect(consultation.getByText('Author Dr Taylor Reed · 3 required sections incomplete')).toHaveCount(0)
  await expect(consultation.locator('[data-consultation-banner-clinician]')).toHaveText('Dr Taylor Reed')
  await expect(consultation.locator('[data-consultation-banner-incomplete-status]')).toHaveText('3 required sections incomplete')
  await expect(consultation.getByText('Not saved locally')).toBeVisible()
  await expect(consultation.getByText('Consultation not signed')).toBeVisible()
  await expect(consultation.getByRole('button', { name: 'Review Validation' })).toHaveAttribute('data-variant', 'clinicalWarn')
  await expect(consultation.getByRole('button', { name: 'Save Locally' })).toHaveAttribute('data-variant', 'clinicalSuccess')
  await expect(consultation.getByRole('button', { name: 'Sign Consultation' })).toHaveAttribute('data-variant', 'clinicalPurple')
  await expect(consultation.getByRole('button', { name: 'Review Validation' })).toHaveClass(/bg-\[#efc52e\]/)
  await expect(consultation.getByRole('button', { name: 'Review Validation' })).toHaveClass(/border-\[#efc52e\]/)
  await expect(consultation.getByRole('button', { name: 'Review Validation' })).toHaveClass(/text-white/)
  await expect(consultation.getByRole('button', { name: 'Save Locally' })).toHaveClass(/bg-emerald-700/)
  await expect(consultation.getByRole('button', { name: 'Save Locally' })).toHaveClass(/border-emerald-700/)
  await expect(consultation.getByRole('button', { name: 'Sign Consultation' })).toHaveClass(/bg-purple-900/)
  await expect(consultation.getByRole('button', { name: 'Sign Consultation' })).toHaveClass(/border-purple-900/)
  const railMetrics = await consultation.getByTestId('consultation-banner-action-rail').evaluate((rail) => {
    const pills = Array.from(rail.querySelectorAll('[data-slot="badge"]')).map((element) => Math.round(element.getBoundingClientRect().width))
    const buttons = Array.from(rail.querySelectorAll('[data-slot="button"]')).map((element) => Math.round(element.getBoundingClientRect().width))
    const [pillRow, buttonRow] = Array.from(rail.children)

    return {
      pills,
      buttons,
      rowGap: getComputedStyle(rail).rowGap,
      pillColumnGap: pillRow ? getComputedStyle(pillRow).columnGap : '',
      buttonColumnGap: buttonRow ? getComputedStyle(buttonRow).columnGap : '',
    }
  })
  expect(railMetrics.pills).toEqual(railMetrics.buttons)
  expect(railMetrics.pills).toEqual([160, 160, 160])
  expect(railMetrics.rowGap).toBe('13px')
  expect(railMetrics.pillColumnGap).toBe('16px')
  expect(railMetrics.buttonColumnGap).toBe('16px')
  const headerRailMetrics = await consultation.getByTestId('consultation-banner-action-rail').evaluate((rail) => {
    const header = rail.closest('[data-slot="card-header"]')
    const card = rail.closest('[data-slot="card"]')
    if (!header || !card) {
      return null
    }

    const stack = header.querySelector('[data-consultation-banner-text-stack]')
    const title = header.querySelector('[data-slot="card-title"]')
    const clinicianText = header.querySelector('[data-consultation-banner-clinician]')
    const incompleteText = header.querySelector('[data-consultation-banner-incomplete-status]')
    const incompleteTextInner = header.querySelector('[data-consultation-banner-incomplete-text]')
    const firstPill = rail.querySelector('[data-slot="badge"]')
    const firstButton = header.querySelector('[data-slot="button"]')
    const firstButtonText = header.querySelector('[data-consultation-banner-action-text]')

    if (!stack || !title || !clinicianText || !incompleteText || !incompleteTextInner || !firstPill || !firstButton || !firstButtonText) {
      return null
    }

    const stackBox = stack.getBoundingClientRect()
    const cardBox = card.getBoundingClientRect()
    const headerBox = header.getBoundingClientRect()
    const titleBox = title.getBoundingClientRect()
    const clinicianTextBox = clinicianText.getBoundingClientRect()
    const incompleteTextBox = incompleteText.getBoundingClientRect()
    const incompleteTextInnerBox = incompleteTextInner.getBoundingClientRect()
    const railBox = rail.getBoundingClientRect()
    const firstPillBox = firstPill.getBoundingClientRect()
    const firstButtonTextBox = firstButtonText.getBoundingClientRect()

    return {
      stackTop: Math.round(stackBox.top),
      stackHeight: Math.round(stackBox.height),
      cardTop: Math.round(cardBox.top),
      cardBottom: Math.round(cardBox.bottom),
      headerTop: Math.round(headerBox.top),
      headerBottom: Math.round(headerBox.bottom),
      headerRowGap: getComputedStyle(header).rowGap,
      railTop: Math.round(railBox.top),
      railHeight: Math.round(railBox.height),
      pillTop: Math.round(firstPillBox.top),
      titleCenter: Math.round(titleBox.top + titleBox.height / 2),
      titleTop: Math.round(titleBox.top),
      titleBottom: Math.round(titleBox.bottom),
      clinicianTop: Math.round(clinicianTextBox.top),
      clinicianCenter: Math.round(clinicianTextBox.top + clinicianTextBox.height / 2),
      clinicianBottom: Math.round(clinicianTextBox.bottom),
      clinicianColor: getComputedStyle(clinicianText).color,
      clinicianFontWeight: getComputedStyle(clinicianText).fontWeight,
      incompleteTop: Math.round(incompleteTextBox.top),
      incompleteCenter: Math.round(incompleteTextBox.top + incompleteTextBox.height / 2),
      incompleteTextTop: Math.round(incompleteTextInnerBox.top),
      incompleteTextCenter: Math.round(incompleteTextInnerBox.top + incompleteTextInnerBox.height / 2),
      clinicianGapCenterOffset: clinicianTextBox.top + clinicianTextBox.height / 2 - ((titleBox.bottom + incompleteTextInnerBox.top) / 2),
      incompleteColor: getComputedStyle(incompleteText).color,
      incompleteFontWeight: getComputedStyle(incompleteText).fontWeight,
      firstButtonTextCenter: Math.round(firstButtonTextBox.top + firstButtonTextBox.height / 2),
    }
  })
  expect(headerRailMetrics).not.toBeNull()
  expect(headerRailMetrics?.stackTop).toBe(headerRailMetrics?.railTop)
  expect(headerRailMetrics?.stackHeight).toBe(headerRailMetrics?.railHeight)
  expect(headerRailMetrics?.headerRowGap).toBe('0px')
  expect((headerRailMetrics?.headerTop ?? 0) - (headerRailMetrics?.cardTop ?? 0)).toBe(16)
  expect((headerRailMetrics?.cardBottom ?? 0) - (headerRailMetrics?.headerBottom ?? 0)).toBe(16)
  expect(headerRailMetrics?.titleTop).toBe(headerRailMetrics?.pillTop)
  expect(headerRailMetrics?.clinicianCenter).toBeGreaterThan(headerRailMetrics?.titleCenter ?? 0)
  expect(headerRailMetrics?.incompleteCenter).toBeGreaterThan(headerRailMetrics?.clinicianCenter ?? 0)
  expect(headerRailMetrics?.clinicianTop).toBeGreaterThanOrEqual(headerRailMetrics?.titleBottom ?? 0)
  expect(headerRailMetrics?.incompleteTextTop).toBeGreaterThanOrEqual(headerRailMetrics?.clinicianBottom ?? 0)
  expect(Math.abs((headerRailMetrics?.clinicianCenter ?? 0) - Math.round(((headerRailMetrics?.titleBottom ?? 0) + (headerRailMetrics?.incompleteTextTop ?? 0)) / 2))).toBeLessThanOrEqual(1)
  expect(Math.abs(headerRailMetrics?.clinicianGapCenterOffset ?? 0)).toBeLessThanOrEqual(0.25)
  expect(Math.abs((headerRailMetrics?.incompleteCenter ?? 0) - (headerRailMetrics?.firstButtonTextCenter ?? 0))).toBeLessThanOrEqual(1)
  expect(headerRailMetrics?.clinicianColor).toBe(headerRailMetrics?.incompleteColor)
  expect(Number(headerRailMetrics?.clinicianFontWeight)).toBeGreaterThan(Number(headerRailMetrics?.incompleteFontWeight))
  expect(Number(headerRailMetrics?.incompleteFontWeight)).toBeLessThanOrEqual(400)
  await expect(consultation.locator('[data-slot="card-title"]').filter({ hasText: 'Follow-up' })).toBeVisible()
  await expect(consultation.locator('[data-tasks-pane]')).toBeVisible()
  await expect(consultation.locator('[data-tasks-pane]').locator('[data-slot="card-title"]')).toHaveText('Tasks')
  await expect(consultation.locator('[data-tasks-pane-status]')).toHaveText('Optional')
  const actionableTaskInput = consultation.getByRole('textbox', { name: 'Actionable follow-up task' })
  await expect(actionableTaskInput).toBeVisible()
  await expect(consultation.getByRole('button', { name: 'Add task' })).toBeVisible()
  await expect(consultation.getByPlaceholder('Add actionable follow-up task')).toBeVisible()
  await expect(consultation.getByText('Actionable follow-up work')).toHaveCount(0)
  await expect(consultation.getByRole('list', { name: 'Tasks' }).getByText('Book diabetes review bloods')).toBeVisible()
  await expect(consultation.getByRole('list', { name: 'Tasks' }).getByText('Within 2 weeks')).toBeVisible()
  await actionableTaskInput.fill('Arrange diabetic foot review')
  await expect(consultation.locator('[data-tasks-pane-status]')).toHaveText('Ready')
  await actionableTaskInput.fill('')
  await expect(consultation.locator('[data-tasks-pane-status]')).toHaveText('Optional')
  const tasksPane = consultation.locator('[data-tasks-pane]')
  await tasksPane.evaluate((pane) => pane.scrollIntoView({ block: 'start' }))
  const tasksPaneMetrics = await tasksPane.evaluate((pane) => {
    const content = pane.querySelector('[data-slot="card-content"]')
    const listPane = pane.querySelector('[data-tasks-list-pane]')
    const heading = pane.querySelector('[data-tasks-pane-heading]')
    const status = pane.querySelector('[data-tasks-pane-status]')
    const entryPane = pane.querySelector('[data-tasks-entry-pane]')
    const coding = pane.querySelector('[data-section-coding-field]')

    if (!content || !listPane || !heading || !status || !entryPane || !coding) {
      return null
    }

    const contentStyles = getComputedStyle(content)
    const listPaneBox = listPane.getBoundingClientRect()
    const headingBox = heading.getBoundingClientRect()
    const statusBox = status.getBoundingClientRect()
    const entryPaneBox = entryPane.getBoundingClientRect()
    const codingBox = coding.getBoundingClientRect()

    return {
      directCardHeaders: Array.from(pane.children).filter((child) => child.getAttribute('data-slot') === 'card-header').length,
      contentColumns: contentStyles.gridTemplateColumns,
      contentColumnGap: contentStyles.columnGap,
      listPaneTop: Math.round(listPaneBox.top),
      headingTop: Math.round(headingBox.top),
      statusTop: Math.round(statusBox.top),
      entryPaneTop: Math.round(entryPaneBox.top),
      codingTop: Math.round(codingBox.top),
      entryPaneRight: Math.round(entryPaneBox.right),
      codingLeft: Math.round(codingBox.left),
    }
  })
  expect(tasksPaneMetrics).not.toBeNull()
  if (!tasksPaneMetrics) {
    throw new Error('Tasks pane split layout metrics were not available')
  }
  expect(tasksPaneMetrics.directCardHeaders).toBe(0)
  expect(tasksPaneMetrics.contentColumns.split(' ').length).toBe(2)
  expect(tasksPaneMetrics.contentColumnGap).toBe('12px')
  expect(tasksPaneMetrics.listPaneTop).toBe(tasksPaneMetrics.codingTop)
  expect(tasksPaneMetrics.headingTop).toBe(tasksPaneMetrics.statusTop)
  expect(tasksPaneMetrics.entryPaneTop).toBeGreaterThan(tasksPaneMetrics.codingTop)
  expect(tasksPaneMetrics.entryPaneRight).toBeLessThanOrEqual(tasksPaneMetrics.codingLeft)
  await expect(tasksPane.locator('[data-section-coding-field]')).toBeVisible()
  await expect(tasksPane.locator('[data-section-coding-field]')).toHaveAttribute('data-section-coding-field-frameless', 'true')
  const taskCodeSearch = tasksPane.getByRole('textbox', { name: 'Add clinical code' })
  await expect(taskCodeSearch).toBeVisible()
  await expect(tasksPane.locator('[data-snomed-search-field]')).toBeVisible()
  await expect(tasksPane.locator('[data-snomed-search-field]')).toHaveClass(/bg-background/)
  await expect(tasksPane.locator('[data-snomed-search-field]').getByText('SNOMED CT')).toBeVisible()
  const taskShellMetrics = await tasksPane.locator('[data-task-result-shell]').first().evaluate((shell) => {
    const styles = getComputedStyle(shell)

    return {
      display: styles.display,
      borderRadius: styles.borderRadius,
      gridTemplateColumns: styles.gridTemplateColumns,
      columnGap: styles.columnGap,
      width: Math.round(shell.getBoundingClientRect().width),
      parentWidth: Math.round(shell.parentElement?.getBoundingClientRect().width ?? 0),
    }
  })
  expect(taskShellMetrics.display).toBe('grid')
  expect(taskShellMetrics.borderRadius).toBe('20.8px')
  expect(taskShellMetrics.gridTemplateColumns.split(' ').length).toBe(2)
  expect(taskShellMetrics.columnGap).toBe('12px')
  expect(taskShellMetrics.width).toBe(taskShellMetrics.parentWidth)
  await taskCodeSearch.fill('medication')
  const taskResults = page.locator('[data-slot="popover-content"]').last()
  const longMedicationResult = taskResults.locator('[data-slot="command-item"]').filter({ hasText: 'Medication review done by doctor' })
  await expect(longMedicationResult.locator('[data-snomed-result-code]')).toHaveText('719328007')
  await expect(longMedicationResult.getByText('SNOMED CT 719328007')).toHaveCount(0)
  const longMedicationTitleMetrics = await longMedicationResult.locator('[data-snomed-result-title]').evaluate((title) => {
    const style = getComputedStyle(title)

    return {
      fontSize: parseFloat(style.fontSize),
      lineHeight: parseFloat(style.lineHeight),
    }
  })
  expect(longMedicationTitleMetrics.fontSize).toBe(14)
  expect(longMedicationTitleMetrics.lineHeight).toBe(20)
  await expect(longMedicationResult.locator('[data-snomed-expand-control]')).toHaveCount(0)
  await expect(longMedicationResult.locator('[data-snomed-result-title]')).not.toHaveClass(/underline/)
  await expect(longMedicationResult.locator('[data-snomed-result-column="type"]')).toHaveClass(/border-dashed/)
  await expect(longMedicationResult.locator('[data-snomed-result-column="priority"]')).toHaveClass(/border-r/)
  await expect(taskResults.locator('[data-snomed-result-header-column="type"]')).toHaveClass(/border-dashed/)
  await expect(taskResults.locator('[data-snomed-result-header-column="priority"]')).toHaveClass(/border-r/)
  const longMedicationRowMetrics = await longMedicationResult.evaluate((row) => {
    const typeBadge = row.querySelector('[data-snomed-result-type]')
    const priorityBadge = row.querySelector('[data-snomed-result-priority]')

    if (!typeBadge || !priorityBadge) {
      return null
    }

    return {
      columnGap: getComputedStyle(row).columnGap,
      typePriorityBadgeGap: Math.round(priorityBadge.getBoundingClientRect().left - typeBadge.getBoundingClientRect().right),
    }
  })
  expect(longMedicationRowMetrics).not.toBeNull()
  if (!longMedicationRowMetrics) {
    throw new Error('Long medication row metrics were not available')
  }
  expect(longMedicationRowMetrics.columnGap).toBe('12px')
  expect(longMedicationRowMetrics.typePriorityBadgeGap).toBeGreaterThanOrEqual(12)
  const reviewMedicationResult = taskResults.locator('[data-slot="command-item"]').filter({ hasText: 'Review of medication' })
  await expect(reviewMedicationResult.locator('[data-snomed-result-type]')).toHaveText('Procedure')
  await expect(reviewMedicationResult.locator('[data-snomed-result-type]')).toHaveClass(/bg-orange-50/)
  await expect(reviewMedicationResult.locator('[data-snomed-result-type]')).not.toHaveClass(/bg-blue-50/)
  await expect(reviewMedicationResult.locator('[data-snomed-result-type]')).not.toHaveClass(/bg-violet-50/)
  await expect(longMedicationResult.locator('[data-snomed-result-type]')).toHaveClass(/bg-lime-50/)
  await taskResults.locator('[data-slot="command-item"]').filter({ hasText: 'Review of medication' }).click({ force: true })
  await expect(tasksPane.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Review of medication')).toBeVisible()
  await expect(tasksPane.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Procedure')).toBeVisible()
  await expect(tasksPane.locator('[aria-label="Selected SNOMED CT concepts"] li').filter({ hasText: 'Review of medication' })).toHaveClass(/w-full/)
  await expect(page.getByRole('heading', { name: 'Medication review' })).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'Alerts and decision support' })).toHaveCount(0)
  await expect(page.getByRole('heading', { name: 'Recent results' })).toHaveCount(0)
  await expect(page.getByText('Dose, route, frequency, and current state stay visible.')).toHaveCount(0)
  await expect(page.locator('[data-medication-column-header]').getByText('Medication', { exact: true })).toBeVisible()
  await expect(page.locator('[data-medication-column-header]').getByText('Dose', { exact: true })).toBeVisible()
  await expect(page.locator('[data-medication-column-header]').getByText('Route', { exact: true })).toBeVisible()
  await expect(page.locator('[data-medication-column-header]').getByText('Frequency', { exact: true })).toBeVisible()
  await expect(page.locator('[data-medication-column-header]').getByText('State', { exact: true })).toBeVisible()
  const medicationCards = page.locator('[data-medication-card]')
  await expect(medicationCards).toHaveCount(3)
  const metforminCard = medicationCards.filter({ hasText: 'Metformin modified-release tablets' })
  await expect(metforminCard.getByText('Dose', { exact: true })).toHaveCount(0)
  await expect(metforminCard.getByText('Route', { exact: true })).toHaveCount(0)
  await expect(metforminCard.getByText('Frequency', { exact: true })).toHaveCount(0)
  await expect(metforminCard.getByText('Two tablets')).toBeVisible()
  await expect(metforminCard.getByText('Oral')).toBeVisible()
  await expect(metforminCard.getByText('Twice daily with food')).toBeVisible()
  await expect(metforminCard).toHaveClass(/border-emerald-200/)
  await expect(metforminCard).toHaveClass(/bg-emerald-50\/50/)
  await expect(medicationCards.filter({ hasText: 'Ramipril capsules' })).toHaveClass(/border-emerald-200/)
  await expect(medicationCards.filter({ hasText: 'Ramipril capsules' })).toHaveClass(/bg-emerald-50\/50/)
  const atorvastatinCard = medicationCards.filter({ hasText: 'Atorvastatin tablets' })
  await expect(atorvastatinCard.getByText('One tablet')).toBeVisible()
  await expect(atorvastatinCard.getByText('Once nightly')).toBeVisible()
  await expect(atorvastatinCard).toHaveClass(/border-emerald-200/)
  await expect(atorvastatinCard).toHaveClass(/bg-emerald-50\/50/)
  const medicationCardMetrics = await page.locator('[data-medication-review-list]').evaluate((list) => {
    const cards = Array.from(list.querySelectorAll('[data-medication-card]'))
    const marCard = document.querySelector('[data-mar-card]')
    const header = document.querySelector('[data-medication-column-header]')
    const firstCardHeader = cards[0]?.querySelector('[data-slot="card-header"]')
    const headerCells = header ? Array.from(header.children) : []
    const firstRowCells = firstCardHeader ? Array.from(firstCardHeader.children) : []

    return {
      marCardHeight: marCard ? Math.round(marCard.getBoundingClientRect().height) : 0,
      listHeight: Math.round(list.getBoundingClientRect().height),
      listGap: getComputedStyle(list).rowGap,
      cardHeights: cards.map((card) => Math.round(card.getBoundingClientRect().height)),
      cardContentCenterOffsets: cards.map((card) => {
        const header = card.querySelector('[data-slot="card-header"]')
        if (!header) {
          return null
        }

        const cardBox = card.getBoundingClientRect()
        const headerBox = header.getBoundingClientRect()

        return Math.round(headerBox.top + headerBox.height / 2 - (cardBox.top + cardBox.height / 2))
      }),
      cardHeaderColumns: cards.map((card) => {
        const header = card.querySelector('[data-slot="card-header"]')
        return header ? getComputedStyle(header).gridTemplateColumns.split(' ').length : 0
      }),
      columnHeaderColumns: header ? getComputedStyle(header).gridTemplateColumns.split(' ').length : 0,
      columnAlignmentOffsets: headerCells.map((headerCell, index) => {
        const rowCell = firstRowCells[index]

        if (!rowCell) {
          return null
        }

        const useRightEdge = index === headerCells.length - 1
        const headerBox = headerCell.getBoundingClientRect()
        const rowBox = rowCell.getBoundingClientRect()

        return Math.round((useRightEdge ? rowBox.right : rowBox.left) - (useRightEdge ? headerBox.right : headerBox.left))
      }),
      detailLabelCount: list.querySelectorAll('[data-medication-detail-label]').length,
      cardContentCount: cards.reduce((count, card) => count + card.querySelectorAll('[data-slot="card-content"]').length, 0),
    }
  })
  expect(medicationCardMetrics.marCardHeight).toBe(325)
  expect(medicationCardMetrics.listGap).toBe('8px')
  expect(Math.max(...medicationCardMetrics.cardHeights)).toBeLessThanOrEqual(64)
  expect(medicationCardMetrics.cardContentCenterOffsets).toEqual([0, 0, 0])
  expect(medicationCardMetrics.columnHeaderColumns).toBe(5)
  expect(medicationCardMetrics.cardHeaderColumns).toEqual([5, 5, 5])
  expect(medicationCardMetrics.columnAlignmentOffsets).toEqual([0, 0, 0, 0, 0])
  expect(medicationCardMetrics.detailLabelCount).toBe(0)
  expect(medicationCardMetrics.cardContentCount).toBe(0)
  await page.getByRole('tab', { name: 'Results' }).click()
  await expect(page.locator('[data-results-column-header]').getByText('Result', { exact: true })).toBeVisible()
  await expect(page.getByText('Result state remains attached to the data.')).toHaveCount(0)
  await expect(page.locator('[data-results-column-header]').getByText('Date', { exact: true })).toBeVisible()
  await expect(page.locator('[data-results-column-header]').getByText('Result', { exact: true })).toBeVisible()
  await expect(page.locator('[data-results-column-header]').getByText('Value', { exact: true })).toBeVisible()
  await expect(page.locator('[data-results-column-header]').getByText('Status', { exact: true })).toBeVisible()
  const resultCards = page.locator('[data-result-card]')
  await expect(resultCards).toHaveCount(5)
  const hba1cCard = resultCards.filter({ hasText: 'HbA1c' })
  await expect(hba1cCard.getByText('Date', { exact: true })).toHaveCount(0)
  await expect(hba1cCard.getByText('Result', { exact: true })).toHaveCount(0)
  await expect(hba1cCard.getByText('Value', { exact: true })).toHaveCount(0)
  await expect(hba1cCard.getByText('2026-04-18')).toBeVisible()
  await expect(hba1cCard.getByText('HbA1c')).toBeVisible()
  await expect(hba1cCard.getByText('68 mmol/mol')).toBeVisible()
  await expect(hba1cCard).toHaveClass(/border-amber-200/)
  await expect(hba1cCard).toHaveClass(/bg-amber-50\/50/)
  await expect(resultCards.filter({ hasText: 'Blood pressure' })).toHaveClass(/border-emerald-200/)
  await expect(resultCards.filter({ hasText: 'Blood pressure' })).toHaveClass(/bg-emerald-50\/50/)
  await expect(resultCards.filter({ hasText: 'Body mass index' }).getByText('24.8 kg/m2')).toBeVisible()
  await expect(resultCards.filter({ hasText: 'Body mass index' })).toHaveClass(/border-emerald-200/)
  await expect(resultCards.filter({ hasText: 'Body mass index' })).toHaveClass(/bg-emerald-50\/50/)
  await expect(resultCards.filter({ hasText: 'Urine ACR' })).toHaveClass(/bg-secondary\/50/)
  const resultCardMetrics = await page.locator('[data-results-list]').evaluate((list) => {
    const cards = Array.from(list.querySelectorAll('[data-result-card]'))
    const marCard = document.querySelector('[data-mar-card]')
    const header = document.querySelector('[data-results-column-header]')
    const firstCardHeader = cards[0]?.querySelector('[data-slot="card-header"]')
    const headerCells = header ? Array.from(header.children) : []
    const firstRowCells = firstCardHeader ? Array.from(firstCardHeader.children) : []

    return {
      marCardHeight: marCard ? Math.round(marCard.getBoundingClientRect().height) : 0,
      listHeight: Math.round(list.getBoundingClientRect().height),
      listGap: getComputedStyle(list).rowGap,
      cardHeights: cards.map((card) => Math.round(card.getBoundingClientRect().height)),
      cardContentCenterOffsets: cards.map((card) => {
        const header = card.querySelector('[data-slot="card-header"]')
        if (!header) {
          return null
        }

        const cardBox = card.getBoundingClientRect()
        const headerBox = header.getBoundingClientRect()

        return Math.round(headerBox.top + headerBox.height / 2 - (cardBox.top + cardBox.height / 2))
      }),
      cardHeaderColumns: cards.map((card) => {
        const header = card.querySelector('[data-slot="card-header"]')
        return header ? getComputedStyle(header).gridTemplateColumns.split(' ').length : 0
      }),
      columnHeaderColumns: header ? getComputedStyle(header).gridTemplateColumns.split(' ').length : 0,
      columnAlignmentOffsets: headerCells.map((headerCell, index) => {
        const rowCell = firstRowCells[index]

        if (!rowCell) {
          return null
        }

        const useRightEdge = index === headerCells.length - 1
        const headerBox = headerCell.getBoundingClientRect()
        const rowBox = rowCell.getBoundingClientRect()

        return Math.round((useRightEdge ? rowBox.right : rowBox.left) - (useRightEdge ? headerBox.right : headerBox.left))
      }),
      cardContentCount: cards.reduce((count, card) => count + card.querySelectorAll('[data-slot="card-content"]').length, 0),
    }
  })
  expect(resultCardMetrics.marCardHeight).toBe(325)
  expect(resultCardMetrics.listGap).toBe('8px')
  expect(Math.max(...resultCardMetrics.cardHeights)).toBeLessThanOrEqual(44)
  expect(resultCardMetrics.cardContentCenterOffsets).toEqual([0, 0, 0, 0, 0])
  expect(Math.abs(resultCardMetrics.listHeight - medicationCardMetrics.listHeight)).toBeLessThanOrEqual(1)
  expect(resultCardMetrics.columnHeaderColumns).toBe(4)
  expect(resultCardMetrics.cardHeaderColumns).toEqual([4, 4, 4, 4, 4])
  expect(resultCardMetrics.columnAlignmentOffsets).toEqual([0, 0, 0, 0])
  expect(resultCardMetrics.cardContentCount).toBe(0)
  await page.getByRole('tab', { name: 'Alerts' }).click()
  await expect(page.locator('[data-alerts-column-header]').getByText('Alert', { exact: true })).toBeVisible()
  await expect(page.locator('[data-alerts-column-header]').getByText('Rationale', { exact: true })).toBeVisible()
  await expect(page.locator('[data-alerts-column-header]').getByText('State', { exact: true })).toBeVisible()
  await expect(page.getByText('High-risk context is available without leaving the consultation.')).toHaveCount(0)
  const alertCards = page.locator('[data-alert-card]')
  await expect(alertCards).toHaveCount(3)
  await expect(alertCards.filter({ hasText: 'Penicillin allergy recorded' })).toHaveClass(/border-red-200/)
  await expect(alertCards.filter({ hasText: 'Penicillin allergy recorded' })).toHaveClass(/bg-red-50\/50/)
  await expect(alertCards.filter({ hasText: 'Renal function monitoring overdue' })).toHaveClass(/border-amber-200/)
  await expect(alertCards.filter({ hasText: 'Renal function monitoring overdue' })).toHaveClass(/bg-amber-50\/50/)
  await expect(alertCards.filter({ hasText: 'Annual diabetes review due' })).toHaveClass(/bg-secondary\/50/)
  const alertCardMetrics = await page.locator('[data-alerts-list]').evaluate((list) => {
    const cards = Array.from(list.querySelectorAll('[data-alert-card]'))
    const marCard = document.querySelector('[data-mar-card]')
    const header = document.querySelector('[data-alerts-column-header]')
    const firstCardHeader = cards[0]?.querySelector('[data-slot="card-header"]')
    const headerCells = header ? Array.from(header.children) : []
    const firstRowCells = firstCardHeader ? Array.from(firstCardHeader.children) : []

    return {
      marCardHeight: marCard ? Math.round(marCard.getBoundingClientRect().height) : 0,
      listHeight: Math.round(list.getBoundingClientRect().height),
      listGap: getComputedStyle(list).rowGap,
      cardHeights: cards.map((card) => Math.round(card.getBoundingClientRect().height)),
      cardContentCenterOffsets: cards.map((card) => {
        const header = card.querySelector('[data-slot="card-header"]')
        if (!header) {
          return null
        }

        const cardBox = card.getBoundingClientRect()
        const headerBox = header.getBoundingClientRect()

        return Math.round(headerBox.top + headerBox.height / 2 - (cardBox.top + cardBox.height / 2))
      }),
      cardHeaderColumns: cards.map((card) => {
        const header = card.querySelector('[data-slot="card-header"]')
        return header ? getComputedStyle(header).gridTemplateColumns.split(' ').length : 0
      }),
      columnHeaderColumns: header ? getComputedStyle(header).gridTemplateColumns.split(' ').length : 0,
      columnAlignmentOffsets: headerCells.map((headerCell, index) => {
        const rowCell = firstRowCells[index]

        if (!rowCell) {
          return null
        }

        const useRightEdge = index === headerCells.length - 1
        const headerBox = headerCell.getBoundingClientRect()
        const rowBox = rowCell.getBoundingClientRect()

        return Math.round((useRightEdge ? rowBox.right : rowBox.left) - (useRightEdge ? headerBox.right : headerBox.left))
      }),
      cardContentCount: cards.reduce((count, card) => count + card.querySelectorAll('[data-slot="card-content"]').length, 0),
    }
  })
  expect(alertCardMetrics.marCardHeight).toBe(325)
  expect(alertCardMetrics.listGap).toBe('8px')
  expect(Math.max(...alertCardMetrics.cardHeights)).toBeLessThanOrEqual(64)
  expect(alertCardMetrics.cardContentCenterOffsets).toEqual([0, 0, 0])
  expect(alertCardMetrics.columnHeaderColumns).toBe(3)
  expect(alertCardMetrics.cardHeaderColumns).toEqual([3, 3, 3])
  expect(alertCardMetrics.columnAlignmentOffsets).toEqual([0, 0, 0])
  expect(alertCardMetrics.cardContentCount).toBe(0)
  expect(new Set(medicationCardMetrics.cardHeights).size).toBe(1)
  expect(Math.abs(alertCardMetrics.listHeight - medicationCardMetrics.listHeight)).toBeLessThanOrEqual(1)
  expect(medicationCardMetrics.cardHeights[0]).toBe(alertCardMetrics.cardHeights[0])
  expect(new Set(resultCardMetrics.cardHeights).size).toBe(1)
  expect(resultCardMetrics.cardHeights[0]).toBeLessThan(alertCardMetrics.cardHeights[0])

  const reason = consultation.locator('[data-section-id="reason"]')
  await expect(reason.locator('[data-consultation-notes-pane]').locator('[data-consultation-section-status]')).toHaveText('Needs entry')
  await expect(page.getByText('Required before sign-off', { exact: true })).toHaveCount(0)
  await expect(page.getByText('Optional clinical context', { exact: true })).toHaveCount(0)
  const historySection = consultation.locator('[data-section-id="history"]')
  await expect(historySection.locator('[data-consultation-section-status]')).toHaveText('Optional')
  await expect(historySection.locator('[data-consultation-section-status]')).toHaveClass(/border-\[#80adce\]/)
  await expect(historySection.locator('[data-consultation-section-status]')).toHaveClass(/bg-\[#80adce\]\/15/)
  const historyNotesForStatus = historySection.getByRole('textbox', { name: 'History notes' })
  await historyNotesForStatus.fill('Polyuria')
  await expect(historySection.locator('[data-consultation-section-status]')).toHaveText('Ready')
  await expect(historySection.locator('[data-consultation-section-status]')).toHaveClass(/bg-emerald-50/)
  await historyNotesForStatus.fill('')
  await expect(historySection.locator('[data-consultation-section-status]')).toHaveText('Optional')
  const reasonSplitMetrics = await reason.evaluate((section) => {
    const content = section.querySelector('[data-slot="card-content"]')
    const notesPane = section.querySelector('[data-consultation-notes-pane]')
    const heading = section.querySelector('[data-consultation-section-heading]')
    const status = section.querySelector('[data-consultation-section-status]')
    const textarea = section.querySelector('[data-clinical-text-editor]')
    const coding = section.querySelector('[data-section-coding-field]')

    if (!content || !notesPane || !heading || !status || !textarea || !coding) {
      return null
    }

    const contentStyles = getComputedStyle(content)
    const notesPaneBox = notesPane.getBoundingClientRect()
    const headingBox = heading.getBoundingClientRect()
    const statusBox = status.getBoundingClientRect()
    const textareaBox = textarea.getBoundingClientRect()
    const codingBox = coding.getBoundingClientRect()
    const codingStyles = getComputedStyle(coding)

    return {
      directSectionHeaders: Array.from(section.children).filter((child) => child.getAttribute('data-slot') === 'card-header').length,
      contentColumns: contentStyles.gridTemplateColumns,
      contentColumnGap: contentStyles.columnGap,
      codingBackground: codingStyles.backgroundColor,
      codingBoxShadow: codingStyles.boxShadow,
      notesPaneTop: Math.round(notesPaneBox.top),
      notesPaneLeft: Math.round(notesPaneBox.left),
      notesPaneRight: Math.round(notesPaneBox.right),
      headingTop: Math.round(headingBox.top),
      statusTop: Math.round(statusBox.top),
      statusLeft: Math.round(statusBox.left),
      statusRight: Math.round(statusBox.right),
      textareaTop: Math.round(textareaBox.top),
      codingTop: Math.round(codingBox.top),
      textareaRight: Math.round(textareaBox.right),
      codingLeft: Math.round(codingBox.left),
      textareaHeight: Math.round(textareaBox.height),
    }
  })
  expect(reasonSplitMetrics).not.toBeNull()
  if (!reasonSplitMetrics) {
    throw new Error('Reason section split-pane metrics were not available')
  }
  expect(reasonSplitMetrics.directSectionHeaders).toBe(0)
  expect(reasonSplitMetrics.contentColumns.split(' ').length).toBe(2)
  expect(reasonSplitMetrics.contentColumnGap).toBe('12px')
  expect(reasonSplitMetrics.codingBackground).toBe('rgba(0, 0, 0, 0)')
  expect(reasonSplitMetrics.codingBoxShadow).toBe('none')
  expect(reasonSplitMetrics.notesPaneTop).toBe(reasonSplitMetrics.codingTop)
  expect(reasonSplitMetrics.statusTop).toBeGreaterThanOrEqual(reasonSplitMetrics.headingTop)
  expect(reasonSplitMetrics.statusLeft).toBeGreaterThanOrEqual(reasonSplitMetrics.notesPaneLeft)
  expect(reasonSplitMetrics.statusRight).toBeLessThanOrEqual(reasonSplitMetrics.notesPaneRight)
  expect(reasonSplitMetrics.textareaTop).toBeGreaterThan(reasonSplitMetrics.codingTop)
  expect(reasonSplitMetrics.textareaRight).toBeLessThanOrEqual(reasonSplitMetrics.codingLeft)
  expect(reasonSplitMetrics.textareaHeight).toBeGreaterThanOrEqual(160)
  await expect(reason.getByText('Coded content', { exact: true })).toHaveCount(0)
  await expect(page.getByText('No codes added.', { exact: true })).toHaveCount(0)
  await expect(reason.getByRole('textbox', { name: 'Reason notes' })).toHaveAttribute('data-clinical-text-instruction', 'Type: "Diabetes medication review and diabetic annual review."')
  await expect(consultation.locator('[data-section-id="history"]').getByRole('textbox', { name: 'History notes' })).toHaveAttribute('data-clinical-text-instruction', 'Type: "Polyuria and foot numbness."')
  await expect(consultation.locator('[data-section-id="examination"]').getByRole('textbox', { name: 'Examination notes' })).toHaveAttribute('data-clinical-text-instruction', 'Type: "BP, BMI and diabetic foot check."')
  await expect(consultation.locator('[data-section-id="assessment"]').getByRole('textbox', { name: 'Assessment notes' })).toHaveAttribute('data-clinical-text-instruction', 'Type: "Type 2 diabetes with raised HbA1c."')
  await expect(consultation.locator('[data-section-id="plan"]').getByRole('textbox', { name: 'Plan notes' })).toHaveAttribute('data-clinical-text-instruction', 'Type: "Diabetes medication review and diet education."')
  await expect(consultation.locator('[data-section-id="follow-up"]').getByRole('textbox', { name: 'Follow-up notes' })).toHaveAttribute('data-clinical-text-instruction', 'Type: "HbA1c, eGFR and urine ACR."')
  await expect(reason.locator('[data-clinical-text-candidate]')).toHaveCount(0)
  const reasonNotes = reason.getByRole('textbox', { name: 'Reason notes' })
  const instructionStyle = await reasonNotes.evaluate((editor) => {
    const style = getComputedStyle(editor, '::after')

    return {
      bottom: style.bottom,
      content: style.content,
      fontStyle: style.fontStyle,
      position: style.position,
    }
  })
  expect(instructionStyle.bottom).toBe('8px')
  expect(instructionStyle.content).toContain('Diabetes medication review and diabetic annual review.')
  expect(instructionStyle.fontStyle).toBe('italic')
  expect(instructionStyle.position).toBe('absolute')
  await reasonNotes.evaluate((editor) => {
    editor.style.height = '260px'
  })
  const resizedInstructionBottom = await reasonNotes.evaluate((editor) => getComputedStyle(editor, '::after').bottom)
  expect(resizedInstructionBottom).toBe('8px')
  await reasonNotes.click()
  await expect(reasonNotes).toHaveAttribute('data-clinical-text-instruction', 'Type: "Diabetes medication review and diabetic annual review."')
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]')).toHaveCount(0)
  const reasonHypertensionSearch = reason.getByRole('textbox', { name: 'Add clinical code' })
  await reasonHypertensionSearch.click()
  await reasonHypertensionSearch.fill('hypertension')
  const hypertensionResults = page.locator('[data-slot="popover-content"]').last()
  await hypertensionResults.locator('[data-slot="command-item"]').filter({ hasText: 'Hypertensive disorder' }).click({ force: true })
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Hypertensive disorder')).toBeVisible()
  const consultationCodingRailMetrics = await reason.evaluate((section) => {
    const textarea = section.querySelector('[data-clinical-text-editor]')
    const firstConcept = section.querySelector('[aria-label="Selected SNOMED CT concepts"] li')
    const searchField = section.querySelector('[data-snomed-search-field]')
    const codingField = section.querySelector('[data-section-coding-field]')

    if (!textarea || !firstConcept || !searchField || !codingField) {
      return null
    }

    const textareaBox = textarea.getBoundingClientRect()
    const firstConceptBox = firstConcept.getBoundingClientRect()
    const searchFieldBox = searchField.getBoundingClientRect()
    const codingFieldBox = codingField.getBoundingClientRect()

    return {
      codingLeftInset: Math.round(searchFieldBox.left - codingFieldBox.left),
      codingTop: Math.round(codingFieldBox.top),
      conceptTop: Math.round(firstConceptBox.top),
      searchTop: Math.round(searchFieldBox.top),
      textareaTop: Math.round(textareaBox.top),
    }
  })
  expect(consultationCodingRailMetrics).not.toBeNull()
  if (!consultationCodingRailMetrics) {
    throw new Error('Consultation coding rail metrics were not available')
  }
  expect(consultationCodingRailMetrics.codingLeftInset).toBe(0)
  expect(consultationCodingRailMetrics.searchTop).toBe(consultationCodingRailMetrics.codingTop)
  expect(consultationCodingRailMetrics.conceptTop).toBe(consultationCodingRailMetrics.textareaTop)
  expect(consultationCodingRailMetrics.searchTop).toBeLessThan(consultationCodingRailMetrics.conceptTop)
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('38341003')).toHaveCount(0)
  await expect(reason.getByText('[38341003]')).toHaveCount(0)
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Disorder', { exact: true })).toBeVisible()
  await expect(reason.getByText('Prioritised')).toBeVisible()
  const hypertensionChip = reason.locator('[aria-label="Selected SNOMED CT concepts"] li').filter({ hasText: 'Hypertensive disorder' })
  await expect(hypertensionChip.getByText('Hypertensive disorder')).toHaveClass(/text-sm/)
  await expect(hypertensionChip.getByText('Hypertensive disorder')).toHaveClass(/font-normal/)
  await expect(hypertensionChip.getByText('Hypertensive disorder')).not.toHaveClass(/font-medium/)
  await expect(hypertensionChip).toHaveClass(/bg-blue-50\/40/)
  await expect(hypertensionChip).toHaveClass(/border-blue-100/)
  await expect(hypertensionChip.locator('[data-snomed-selected-type]')).toHaveClass(/bg-blue-50/)
  await expect(hypertensionChip.locator('[data-snomed-selected-type]')).toHaveClass(/border-blue-200/)
  await expect(hypertensionChip.locator('[data-snomed-selected-type]')).toHaveClass(/text-blue-900/)
  await expect(hypertensionChip.locator('[data-snomed-selected-type]')).not.toHaveClass(/rose/)
  await expect(hypertensionChip).toHaveClass(/w-full/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/rounded-full/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/size-3/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/translate-x-1/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/border-0/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/bg-transparent/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/before:-inset-1\.5/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/before:border-transparent/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/hover:before:border-red-200/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/hover:before:bg-red-50/)
  await expect(hypertensionChip.getByRole('button', { name: 'Remove Hypertensive disorder' })).toHaveClass(/text-red-700/)
  await expect(hypertensionChip.locator('svg')).toHaveAttribute('stroke-width', '3')
  const hypertensionChipMetrics = await hypertensionChip.evaluate((chip) => {
    const title = chip.querySelector('[data-snomed-selected-title]')
    const type = chip.querySelector('[data-snomed-selected-type]')
    const typeColumn = chip.querySelector('[data-snomed-selected-type-column]')
    const priority = chip.querySelector('[data-snomed-selected-priority]')
    const priorityColumn = chip.querySelector('[data-snomed-selected-priority-column]')
    const button = chip.querySelector('button')
    const removeIcon = button?.querySelector('svg')
    const list = chip.parentElement

    if (!title || !type || !typeColumn || !priority || !priorityColumn || !button || !removeIcon || !list) {
      return null
    }

    const chipBox = chip.getBoundingClientRect()
    const listBox = list.getBoundingClientRect()
    const elements = [title, type, priority, removeIcon]
    const buttonBox = button.getBoundingClientRect()
    const removeIconBox = removeIcon.getBoundingClientRect()
    const beforeInset = Math.abs(parseFloat(getComputedStyle(button, '::before').inset))

    return {
      chipWidth: Math.round(chipBox.width),
      listWidth: Math.round(listBox.width),
      leftInset: Math.round(title.getBoundingClientRect().left - chipBox.left),
      rightInset: Math.round(chipBox.right - removeIconBox.right),
      buttonWidth: Math.round(buttonBox.width),
      removeIconWidth: Math.round(removeIconBox.width),
      typeColumnWidth: Math.round(typeColumn.getBoundingClientRect().width),
      priorityColumnWidth: Math.round(priorityColumn.getBoundingClientRect().width),
      circleTopMargin: Math.round(buttonBox.top - beforeInset - chipBox.top),
      circleRightMargin: Math.round(chipBox.right - (buttonBox.right + beforeInset)),
      circleBottomMargin: Math.round(chipBox.bottom - (buttonBox.bottom + beforeInset)),
      centres: elements.map((element) => Math.round(element.getBoundingClientRect().top + element.getBoundingClientRect().height / 2)),
    }
  })
  expect(hypertensionChipMetrics).not.toBeNull()
  if (!hypertensionChipMetrics) {
    throw new Error('Selected SNOMED concept chip metrics were not available')
  }
  expect(hypertensionChipMetrics.chipWidth).toBe(hypertensionChipMetrics.listWidth)
  expect(hypertensionChipMetrics.buttonWidth).toBe(hypertensionChipMetrics.removeIconWidth)
  expect(Math.abs(hypertensionChipMetrics.leftInset - hypertensionChipMetrics.rightInset)).toBeLessThanOrEqual(1)
  expect(hypertensionChipMetrics.typeColumnWidth).toBeGreaterThan(0)
  expect(hypertensionChipMetrics.priorityColumnWidth).toBeGreaterThan(0)
  expect(Math.abs(hypertensionChipMetrics.circleRightMargin - hypertensionChipMetrics.circleTopMargin)).toBeLessThanOrEqual(1)
  expect(Math.abs(hypertensionChipMetrics.circleRightMargin - hypertensionChipMetrics.circleBottomMargin)).toBeLessThanOrEqual(1)
  expect(new Set(hypertensionChipMetrics.centres).size).toBe(1)
  const history = consultation.locator('[data-section-id="history"]')
  const historyNotes = history.getByRole('textbox', { name: 'History notes' })
  await historyNotes.fill('diab')
  const historyLiveResults = page.locator('[data-slot="popover-content"]').last()
  await expect(historyLiveResults.locator('[data-slot="command-item"]').filter({ hasText: 'Type 2 diabetes mellitus' })).toBeVisible()
  await expect(historyLiveResults.locator('[data-slot="command-item"]').filter({ hasText: 'Prediabetes' })).toBeVisible()
  await expect(history.getByRole('textbox', { name: 'Add clinical code' })).toHaveValue('diab')
  await expect(history.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Type 2 diabetes mellitus')).toHaveCount(0)
  await expect(historyNotes).toBeFocused()
  let activeHistoryResult = historyLiveResults.locator('[data-snomed-result-active="true"]')
  await expect(activeHistoryResult).toContainText('Type 2 diabetes mellitus')
  const activeHistoryResultId = await activeHistoryResult.locator('[id*="result-44054006"]').getAttribute('id')
  expect(activeHistoryResultId).toBeTruthy()
  await expect(historyNotes).toHaveAttribute('aria-activedescendant', activeHistoryResultId ?? '')
  const initialPassiveResultBackgrounds = await historyLiveResults.locator('[data-slot="command-item"]').evaluateAll((rows) => {
    const activeRow = rows.find((row) => row.getAttribute('data-snomed-result-active') === 'true')

    return {
      active: activeRow ? getComputedStyle(activeRow).backgroundColor : '',
      next: rows[1] ? getComputedStyle(rows[1]).backgroundColor : '',
    }
  })
  expect(initialPassiveResultBackgrounds.active).not.toBe(initialPassiveResultBackgrounds.next)
  await historyNotes.press('ArrowDown')
  activeHistoryResult = historyLiveResults.locator('[data-snomed-result-active="true"]')
  await expect(activeHistoryResult).toContainText('Diabetes mellitus')
  const passiveResultBackgrounds = await historyLiveResults.locator('[data-slot="command-item"]').evaluateAll((rows) => {
    const activeRow = rows.find((row) => row.getAttribute('data-snomed-result-active') === 'true')

    return {
      active: activeRow ? getComputedStyle(activeRow).backgroundColor : '',
      first: rows[0] ? getComputedStyle(rows[0]).backgroundColor : '',
    }
  })
  expect(passiveResultBackgrounds.first).not.toBe(passiveResultBackgrounds.active)
  await historyNotes.press('Shift+Enter')
  await expect(historyNotes).toBeFocused()
  await expect(history.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Diabetes mellitus', { exact: true })).toHaveCount(0)
  await historyNotes.fill('diab')
  activeHistoryResult = historyLiveResults.locator('[data-snomed-result-active="true"]')
  await expect(activeHistoryResult).toContainText('Type 2 diabetes mellitus')
  await historyNotes.press('Enter')
  await expect(history.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Type 2 diabetes mellitus')).toBeVisible()
  await expect(history.locator('[data-inline-clinical-code]').filter({ hasText: 'Type 2 diabetes mellitus' })).toBeVisible()
  await expect(historyNotes).toBeFocused()
  await history.getByRole('button', { name: 'Remove Type 2 diabetes mellitus' }).click()
  await page.getByRole('button', { name: 'Remove concept' }).click()
  await expect(history.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Type 2 diabetes mellitus')).toHaveCount(0)
  await expect(history.locator('[data-inline-clinical-code]').filter({ hasText: 'Type 2 diabetes mellitus' })).toHaveCount(0)
  await historyNotes.fill('diab')
  await expect(historyNotes).toBeFocused()
  await page.keyboard.type('etes')
  await expect(historyNotes).toContainText('diabetes')
  await expect(history.getByRole('textbox', { name: 'Add clinical code' })).toHaveValue('diabetes')
  await expect(historyLiveResults.locator('[data-slot="command-item"]').filter({ hasText: '73211009' })).toBeVisible()
  await expect(history.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Diabetes mellitus', { exact: true })).toHaveCount(0)
  await expect(historyNotes).toBeFocused()
  await historyNotes.fill('t2dm')
  await expect(history.locator('[data-clinical-text-candidates]')).toHaveCount(0)
  await expect(history.getByRole('textbox', { name: 'Add clinical code' })).toHaveValue('t2dm')
  await expect(history.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Type 2 diabetes mellitus')).toHaveCount(0)
  const t2dmCandidate = page.locator('[data-clinical-text-candidate]').filter({ hasText: 'Type 2 diabetes mellitus' })
  await expect(t2dmCandidate).toBeVisible()
  await expect(t2dmCandidate.locator('[data-snomed-result-code]')).toHaveText('44054006')
  await expect(t2dmCandidate.locator('[data-clinical-text-candidate-term]')).toHaveText('Type 2 diabetes mellitus')
  await t2dmCandidate.click()
  await expect(history.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Type 2 diabetes mellitus')).toBeVisible()
  const historyInlineCode = history.locator('[data-inline-clinical-code]').filter({ hasText: 'Type 2 diabetes mellitus' })
  await expect(historyInlineCode).toBeVisible()
  await expect(historyInlineCode).toHaveAttribute('data-snomed-code', '44054006')
  await expect(historyInlineCode).toHaveAttribute('data-clinical-code-type', 'disorder')
  await expect(historyInlineCode).toHaveClass(/bg-blue-50\/40/)
  await expect(historyInlineCode).toHaveClass(/border-blue-100/)
  await expect(historyInlineCode).toHaveClass(/font-normal/)
  await historyNotes.evaluate((editor) => {
    editor.querySelector('[data-inline-clinical-code]')?.remove()
    editor.dispatchEvent(new InputEvent('input', { bubbles: true, inputType: 'deleteContentBackward' }))
  })
  await expect(history.locator('[data-inline-clinical-code]').filter({ hasText: 'Type 2 diabetes mellitus' })).toHaveCount(0)
  await expect(history.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Type 2 diabetes mellitus')).toHaveCount(0)
  const historyCaret = await historyNotes.evaluate((element) => {
    const selection = window.getSelection()
    const range = selection?.rangeCount ? selection.getRangeAt(0) : null

    return {
      isActive: document.activeElement === element,
      isCollapsed: selection?.isCollapsed ?? false,
      isInsideEditor: range ? element.contains(range.startContainer) : false,
    }
  })
  expect(historyCaret.isActive).toBe(true)
  expect(historyCaret.isCollapsed).toBe(true)
  expect(historyCaret.isInsideEditor).toBe(true)
  await historyNotes.fill('t2dm')
  await expect(history.getByRole('textbox', { name: 'Add clinical code' })).toHaveValue('t2dm')
  const restoredT2dmCandidate = page.locator('[data-clinical-text-candidate]').filter({ hasText: 'Type 2 diabetes mellitus' })
  await expect(restoredT2dmCandidate).toBeVisible()
  await expect(restoredT2dmCandidate.locator('[data-snomed-result-code]')).toHaveText('44054006')
  await expect(reason.getByRole('button', { name: 'Search SNOMED CT concepts' })).toHaveCount(0)
  await expect(reason.getByRole('textbox', { name: 'Search SNOMED CT concepts' })).toHaveCount(0)
  const reasonCodeSearch = reason.getByRole('textbox', { name: 'Add clinical code' })
  await expect(reasonCodeSearch).toBeVisible()
  await expect(reason.locator('[data-section-coding-field]')).toHaveAttribute('data-section-coding-field-frameless', 'true')
  await expect(reason.locator('[data-snomed-search-field]')).toBeVisible()
  await expect(reason.locator('[data-snomed-search-field]')).toHaveClass(/bg-background/)
  await expect(reason.locator('[data-snomed-search-field]').getByText('SNOMED CT')).toBeVisible()
  await reasonCodeSearch.click()
  const initialReasonResults = page.locator('[data-slot="popover-content"]').last()
  await expect(initialReasonResults.locator('[data-slot="command-item"]')).toHaveCount(DEMO_CLINICAL_CODE_COUNT)
  await page.waitForTimeout(250)
  await expect(initialReasonResults.locator('[data-slot="command-item"]')).toHaveCount(DEMO_CLINICAL_CODE_COUNT)
  await expect(initialReasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'Type 2 diabetes mellitus' })).toBeVisible()
  await expect(initialReasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'Body mass index' })).toBeVisible()
  await expect(initialReasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'HbA1c measurement (DCCT aligned)' })).toBeVisible()
  let activeReasonResult = initialReasonResults.locator('[data-snomed-result-active="true"]')
  await expect(activeReasonResult).toContainText('Type 2 diabetes mellitus')
  const activeReasonResultId = await activeReasonResult.locator('[id*="result-44054006"]').getAttribute('id')
  expect(activeReasonResultId).toBeTruthy()
  await expect(reasonCodeSearch).toHaveAttribute('aria-activedescendant', activeReasonResultId ?? '')
  await reasonCodeSearch.press('ArrowDown')
  activeReasonResult = initialReasonResults.locator('[data-snomed-result-active="true"]')
  await expect(activeReasonResult).toContainText('Diabetes mellitus')
  await reasonCodeSearch.press('ArrowUp')
  activeReasonResult = initialReasonResults.locator('[data-snomed-result-active="true"]')
  await expect(activeReasonResult).toContainText('Type 2 diabetes mellitus')
  await reasonCodeSearch.press('ArrowUp')
  activeReasonResult = initialReasonResults.locator('[data-snomed-result-active="true"]')
  await expect(activeReasonResult).toContainText('Type 2 diabetes mellitus')
  for (let index = 0; index < DEMO_CLINICAL_CODE_COUNT; index += 1) {
    await reasonCodeSearch.press('ArrowDown')
  }
  activeReasonResult = initialReasonResults.locator('[data-snomed-result-active="true"]')
  await expect(activeReasonResult).toContainText('Blood glucose monitoring')
  await reasonCodeSearch.press('ArrowDown')
  activeReasonResult = initialReasonResults.locator('[data-snomed-result-active="true"]')
  await expect(activeReasonResult).toContainText('Blood glucose monitoring')
  await reasonCodeSearch.press('Enter')
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Blood glucose monitoring')).toBeVisible()
  await expect(reason.locator('[data-inline-clinical-code]').filter({ hasText: 'Blood glucose monitoring' })).toBeVisible()
  await reason.getByRole('button', { name: 'Remove Blood glucose monitoring' }).click()
  await page.getByRole('button', { name: 'Remove concept' }).click()
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Blood glucose monitoring')).toHaveCount(0)
  await expect(reason.locator('[data-inline-clinical-code]').filter({ hasText: 'Blood glucose monitoring' })).toHaveCount(0)
  await reasonCodeSearch.fill('diabetic')
  const reasonResults = page.locator('[data-slot="popover-content"]').last()
  const diabeticFootResult = reasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'Diabetic foot examination' })
  await expect(diabeticFootResult.locator('[data-snomed-result-type]')).toHaveText('Regime/therapy')
  await expect(diabeticFootResult.locator('[data-snomed-result-type]')).toHaveClass(/bg-violet-50/)
  await expect(diabeticFootResult.locator('[data-snomed-result-type]')).not.toHaveClass(/bg-pink-50/)
  const regimeColumnMetrics = await diabeticFootResult.evaluate((row) => {
    const conceptColumn = row.querySelector('[data-snomed-result-title]')?.parentElement
    const typeColumn = row.querySelector('[data-snomed-result-column="type"]')
    const typeBadge = row.querySelector('[data-snomed-result-type]')

    if (!conceptColumn || !typeColumn || !typeBadge) {
      return null
    }

    return {
      conceptToTypeColumnGap: Math.round(typeColumn.getBoundingClientRect().left - conceptColumn.getBoundingClientRect().right),
      typeColumnLeftToBadgeLeft: Math.round(typeBadge.getBoundingClientRect().left - typeColumn.getBoundingClientRect().left),
      typeColumnWidth: Math.round(typeColumn.getBoundingClientRect().width),
      typeBadgeWidth: Math.round(typeBadge.getBoundingClientRect().width),
    }
  })
  expect(regimeColumnMetrics).not.toBeNull()
  if (!regimeColumnMetrics) {
    throw new Error('Regime/therapy result column metrics were not available')
  }
  expect(Math.abs(regimeColumnMetrics.conceptToTypeColumnGap - 12)).toBeLessThanOrEqual(1)
  expect(Math.abs(regimeColumnMetrics.typeColumnLeftToBadgeLeft)).toBeLessThanOrEqual(1)
  expect(Math.abs(regimeColumnMetrics.typeColumnWidth - regimeColumnMetrics.typeBadgeWidth)).toBeLessThanOrEqual(1)
  await reasonCodeSearch.fill('diabetes')
  await expect(page.getByText('Suggested concepts', { exact: true })).toHaveCount(0)
  await expect(reasonResults.locator('[data-snomed-result-header]').getByText('Concept')).toBeVisible()
  await expect(reasonResults.locator('[data-snomed-result-header]').getByText('Type')).toBeVisible()
  await expect(reasonResults.locator('[data-snomed-result-header]').getByText('Priority')).toBeVisible()
  const diabetesRows = reasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'diabetes' })
  const prediabetesResult = reasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'Prediabetes' })
  await expect(prediabetesResult.locator('[data-snomed-result-type]')).toHaveText('Disorder')
  await expect(prediabetesResult.locator('[data-snomed-result-type]')).toHaveClass(/bg-blue-50/)
  await expect(prediabetesResult.locator('[data-snomed-result-type]')).toHaveClass(/text-blue-900/)
  await expect(prediabetesResult.locator('[data-snomed-result-type]')).not.toHaveClass(/bg-pink-50/)
  await expect(prediabetesResult.locator('[data-snomed-result-type]')).not.toHaveClass(/bg-violet-50/)
  const resultColumnMetrics = await diabetesRows.evaluateAll((rows) => {
    return rows.map((row) => {
      const popover = row.closest('[data-slot="popover-content"]')
      const header = popover?.querySelector('[data-snomed-result-header]')
      const headerTypeColumn = popover?.querySelector('[data-snomed-result-header-column="type"]')
      const headerPriorityColumn = popover?.querySelector('[data-snomed-result-header-column="priority"]')
      const headerTypeLabel = popover?.querySelector('[data-snomed-result-header-label="type"]')
      const headerPriorityLabel = popover?.querySelector('[data-snomed-result-header-label="priority"]')
      const typeColumn = row.querySelector('[data-snomed-result-column="type"]')
      const priorityColumn = row.querySelector('[data-snomed-result-column="priority"]')
      const typeBadge = row.querySelector('[data-snomed-result-type]')
      const priorityBadge = row.querySelector('[data-snomed-result-priority]')
      const title = row.querySelector('[data-snomed-result-title]')
      const conceptColumn = title?.parentElement

      if (
        !header ||
        !headerTypeColumn ||
        !headerPriorityColumn ||
        !headerTypeLabel ||
        !headerPriorityLabel ||
        !typeColumn ||
        !priorityColumn ||
        !typeBadge ||
        !priorityBadge ||
        !conceptColumn
      ) {
        return null
      }

      const typeBadgeStyle = getComputedStyle(typeBadge)
      const priorityBadgeStyle = getComputedStyle(priorityBadge)

      return {
        headerColumnGap: getComputedStyle(header).columnGap,
        rowColumnGap: getComputedStyle(row).columnGap,
        headerTypeLabelRight: Math.round(headerTypeLabel.getBoundingClientRect().right),
        headerPriorityLabelRight: Math.round(headerPriorityLabel.getBoundingClientRect().right),
        headerTypeWidth: Math.round(headerTypeColumn.getBoundingClientRect().width),
        headerPriorityWidth: Math.round(headerPriorityColumn.getBoundingClientRect().width),
        headerTypeRightGap: Math.round(header.getBoundingClientRect().right - headerTypeColumn.getBoundingClientRect().right),
        headerPriorityRightGap: Math.round(header.getBoundingClientRect().right - headerPriorityColumn.getBoundingClientRect().right),
        typeWidth: Math.round(typeColumn.getBoundingClientRect().width),
        priorityWidth: Math.round(priorityColumn.getBoundingClientRect().width),
        priorityBadgeWidth: Math.round(priorityBadge.getBoundingClientRect().width),
        typeBadgeTextRight: Math.round(typeBadge.getBoundingClientRect().right - parseFloat(typeBadgeStyle.paddingRight)),
        priorityBadgeTextRight: Math.round(priorityBadge.getBoundingClientRect().right - parseFloat(priorityBadgeStyle.paddingRight)),
        conceptToTypeColumnGap: Math.round(typeColumn.getBoundingClientRect().left - conceptColumn.getBoundingClientRect().right),
        conceptToTypeBadgeGap: Math.round(typeBadge.getBoundingClientRect().left - conceptColumn.getBoundingClientRect().right),
        typeRightGap: Math.round(row.getBoundingClientRect().right - typeColumn.getBoundingClientRect().right),
        priorityRightGap: Math.round(row.getBoundingClientRect().right - priorityColumn.getBoundingClientRect().right),
        priorityBadgeRightGap: Math.round(row.getBoundingClientRect().right - priorityBadge.getBoundingClientRect().right),
        typePriorityBadgeGap: Math.round(priorityBadge.getBoundingClientRect().left - typeBadge.getBoundingClientRect().right),
      }
    })
  })
  const validColumnMetrics = resultColumnMetrics.filter((metrics): metrics is NonNullable<typeof metrics> => metrics !== null)
  expect(validColumnMetrics.length).toBeGreaterThan(1)
  expect(new Set(validColumnMetrics.map((metrics) => metrics.typeWidth)).size).toBe(1)
  expect(validColumnMetrics[0].typeWidth).toBeGreaterThanOrEqual(108)
  expect(validColumnMetrics[0].typeWidth).toBeLessThanOrEqual(115)
  expect(new Set(validColumnMetrics.map((metrics) => metrics.priorityWidth)).size).toBe(1)
  expect(new Set(validColumnMetrics.map((metrics) => metrics.priorityBadgeWidth)).size).toBeGreaterThan(1)
  expect(new Set(validColumnMetrics.map((metrics) => metrics.priorityBadgeTextRight)).size).toBe(1)
  expect(new Set(validColumnMetrics.map((metrics) => metrics.priorityRightGap)).size).toBe(1)
  validColumnMetrics.forEach((metrics) => {
    expect(metrics.headerColumnGap).toBe('12px')
    expect(metrics.rowColumnGap).toBe('12px')
    expect(metrics.headerTypeWidth).toBe(metrics.typeWidth)
    expect(metrics.headerPriorityWidth).toBe(metrics.priorityWidth)
    expect(metrics.headerTypeRightGap).toBe(metrics.typeRightGap)
    expect(metrics.headerPriorityRightGap).toBe(metrics.priorityRightGap)
    expect(Math.abs(metrics.headerTypeLabelRight - metrics.typeBadgeTextRight)).toBeLessThanOrEqual(1)
    expect(Math.abs(metrics.headerPriorityLabelRight - metrics.priorityBadgeTextRight)).toBeLessThanOrEqual(1)
    expect(Math.abs(metrics.priorityBadgeRightGap - metrics.priorityRightGap)).toBeLessThanOrEqual(1)
    expect(metrics.typeRightGap).toBeGreaterThan(metrics.priorityRightGap)
    expect(Math.abs(metrics.conceptToTypeColumnGap - 12)).toBeLessThanOrEqual(1)
    expect(metrics.conceptToTypeBadgeGap).toBeGreaterThanOrEqual(11)
    expect(metrics.typePriorityBadgeGap).toBeGreaterThanOrEqual(12)
  })
  await reasonCodeSearch.fill('blood')
  const bloodPressureResult = reasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'Blood pressure' }).first()
  await expect(bloodPressureResult.locator('[data-snomed-result-type]')).toHaveText('Observable')
  await expect(bloodPressureResult.locator('[data-snomed-result-type]')).toHaveClass(/bg-cyan-50/)
  await expect(bloodPressureResult.locator('[data-snomed-result-type]')).not.toHaveClass(/bg-teal-50/)
  await reasonCodeSearch.fill('hba1c')
  const hba1cFindingResult = reasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'Haemoglobin A1c above reference range' })
  await expect(hba1cFindingResult.locator('[data-snomed-result-code]')).toHaveText('444751005')
  await expect(hba1cFindingResult.locator('[data-snomed-result-type]')).toHaveText('Finding')
  await expect(hba1cFindingResult.locator('[data-snomed-result-type]')).toHaveClass(/bg-pink-50/)
  await expect(hba1cFindingResult.locator('[data-snomed-result-type]')).not.toHaveClass(/bg-blue-50/)
  await reasonCodeSearch.fill('diabetes')
  const type2DiabetesResult = reasonResults.locator('[data-slot="command-item"]').filter({ hasText: 'Type 2 diabetes mellitus' })
  await expect(type2DiabetesResult).toBeVisible()
  await expect(type2DiabetesResult.locator('[data-snomed-result-code]')).toHaveText('44054006')
  await expect(type2DiabetesResult.getByText('SNOMED CT 44054006')).toHaveCount(0)
  await type2DiabetesResult.click({ force: true })
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Type 2 diabetes mellitus')).toBeVisible()
  await expect(reason.locator('[data-inline-clinical-code]').filter({ hasText: 'Type 2 diabetes mellitus' })).toBeVisible()
  const type2SelectedTitleMetrics = await reason
    .locator('[aria-label="Selected SNOMED CT concepts"] li')
    .filter({ hasText: 'Type 2 diabetes mellitus' })
    .locator('[data-snomed-selected-title]')
    .evaluate((title) => {
      const style = getComputedStyle(title)

      return {
        fontSize: parseFloat(style.fontSize),
        lineHeight: parseFloat(style.lineHeight),
      }
    })
  expect(type2SelectedTitleMetrics.fontSize).toBe(14)
  expect(type2SelectedTitleMetrics.lineHeight).toBe(20)
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('44054006')).toHaveCount(0)
  await expect(reason.getByText('[44054006]')).toHaveCount(0)
  const reasonType2InlineCode = reason.locator('[data-inline-clinical-code]').filter({ hasText: 'Type 2 diabetes mellitus' })
  await expect(reasonType2InlineCode).toBeVisible()
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Disorder', { exact: true })).toHaveCount(2)
  await expect(reason.locator('[aria-label="Selected SNOMED CT concepts"]').getByText('Prioritised')).toHaveCount(2)
  const selectedConceptAlignment = await reason.locator('[aria-label="Selected SNOMED CT concepts"]').evaluate((list) => {
    const listBox = list.getBoundingClientRect()
    return Array.from(list.querySelectorAll('li')).map((chip) => {
      const typeColumn = chip.querySelector('[data-snomed-selected-type-column]')
      const priorityColumn = chip.querySelector('[data-snomed-selected-priority-column]')
      const typeBadge = chip.querySelector('[data-snomed-selected-type]')
      const priorityBadge = chip.querySelector('[data-snomed-selected-priority]')

      if (!typeColumn || !priorityColumn || !typeBadge || !priorityBadge) {
        return null
      }

      const chipBox = chip.getBoundingClientRect()

      return {
        columnGap: getComputedStyle(chip).columnGap,
        chipWidth: Math.round(chipBox.width),
        listWidth: Math.round(listBox.width),
        typeColumnWidth: Math.round(typeColumn.getBoundingClientRect().width),
        typeColumnRightGap: Math.round(chipBox.right - typeColumn.getBoundingClientRect().right),
        priorityColumnWidth: Math.round(priorityColumn.getBoundingClientRect().width),
        priorityBadgeWidth: Math.round(priorityBadge.getBoundingClientRect().width),
        priorityColumnRightGap: Math.round(chipBox.right - priorityColumn.getBoundingClientRect().right),
        typePriorityBadgeGap: Math.round(priorityBadge.getBoundingClientRect().left - typeBadge.getBoundingClientRect().right),
      }
    })
  })
  const validSelectedConceptAlignment = selectedConceptAlignment.filter((metrics): metrics is NonNullable<typeof metrics> => metrics !== null)
  expect(validSelectedConceptAlignment.length).toBe(2)
  expect(new Set(validSelectedConceptAlignment.map((metrics) => metrics.chipWidth)).size).toBe(1)
  validSelectedConceptAlignment.forEach((metrics) => {
    expect(metrics.chipWidth).toBe(metrics.listWidth)
  })
  expect(new Set(validSelectedConceptAlignment.map((metrics) => metrics.typeColumnWidth)).size).toBe(1)
  expect(new Set(validSelectedConceptAlignment.map((metrics) => metrics.typeColumnRightGap)).size).toBe(1)
  expect(new Set(validSelectedConceptAlignment.map((metrics) => metrics.priorityColumnWidth)).size).toBe(1)
  expect(new Set(validSelectedConceptAlignment.map((metrics) => metrics.priorityColumnRightGap)).size).toBe(1)
  validSelectedConceptAlignment.forEach((metrics) => {
    expect(metrics.columnGap).toBe('12px')
    expect(metrics.typeColumnRightGap).toBeGreaterThan(metrics.priorityColumnRightGap)
    expect(metrics.priorityBadgeWidth).toBeLessThan(metrics.priorityColumnWidth)
    expect(metrics.typePriorityBadgeGap).toBeGreaterThanOrEqual(12)
    expect(metrics.typePriorityBadgeGap).toBeLessThanOrEqual(28)
  })

  await page.setViewportSize({ width: 390, height: 900 })
  const followUp = consultation.locator('[data-section-id="follow-up"]')
  const followUpCodeSearch = followUp.getByRole('textbox', { name: 'Add clinical code' })
  await followUpCodeSearch.click()
  await followUpCodeSearch.fill('glomerular')
  const followUpResults = page.locator('[data-slot="popover-content"]').last()
  await followUpResults.locator('[data-slot="command-item"]').filter({ hasText: 'Glomerular filtration rate below reference range' }).locator('[data-snomed-result-code]').click({ force: true })
  const selectedGfr = followUp.locator('[aria-label="Selected SNOMED CT concepts"] li').filter({ hasText: 'Glomerular filtration rate below reference range' })
  const selectedGfrTitle = selectedGfr.locator('[data-snomed-selected-title]')
  await expect(selectedGfrTitle).toHaveClass(/underline/)
  await selectedGfrTitle.click()
  await expect(selectedGfrTitle).toHaveAttribute('aria-expanded', 'true')
  await expect(selectedGfr.locator('[data-snomed-selected-type]')).toHaveCount(0)
  await expect(selectedGfr.locator('[data-snomed-selected-priority]')).toHaveCount(0)
  await expect(followUp.getByRole('button', { name: 'Remove Glomerular filtration rate below reference range' })).toHaveCount(0)
  await followUp.locator('[data-consultation-section-heading]').click()
  await expect(selectedGfrTitle).toHaveAttribute('aria-expanded', 'false')
  await expect(selectedGfr.locator('[data-snomed-selected-type]')).toBeVisible()
  await expect(selectedGfr.locator('[data-snomed-selected-priority]')).toBeVisible()
  await page.setViewportSize({ width: 1440, height: 900 })

  await reason.getByRole('button', { name: 'Remove Type 2 diabetes mellitus' }).click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await expect(page.getByText('Remove coded concept?')).toBeVisible()
  await page.getByRole('button', { name: 'Remove concept' }).click()
  await expect(reason.getByText('Type 2 diabetes mellitus')).toHaveCount(0)
  await expect(reasonType2InlineCode).toHaveCount(0)

  await consultation.getByRole('button', { name: 'Review Validation' }).click()
  await expect(consultation.locator('[data-section-id="assessment"]')).toHaveClass(/ring-2/)
  await expect(page.getByLabel('Assessment notes')).toBeFocused()

  await page.getByRole('tab', { name: 'Results' }).click()
  await expect(page.locator('[data-results-column-header]').getByText('Result', { exact: true })).toBeVisible()

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)
  expect(overflow).toBeLessThanOrEqual(1)

  const sectionOrder = await page
    .getByRole('region', { name: 'Consultation capture' })
    .locator('[data-slot="card-title"]')
    .evaluateAll((titles) => titles.map((title) => title.textContent?.trim()))
  expect(sectionOrder.indexOf('Plan')).toBeGreaterThan(-1)
  expect(sectionOrder.indexOf('Follow-up')).toBeGreaterThan(sectionOrder.indexOf('Plan'))
  expect(sectionOrder.indexOf('Tasks')).toBeGreaterThan(sectionOrder.indexOf('Follow-up'))
})
