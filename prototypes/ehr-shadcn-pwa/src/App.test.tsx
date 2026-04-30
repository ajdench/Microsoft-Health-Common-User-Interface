import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('EHR shadcn V2 prototype', () => {
  it('renders the core clinical layout contracts', () => {
    render(<App />)

    expect(screen.getByRole('banner', { name: 'Current patient context' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Offline and sync state' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Consultation capture' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Medication review' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Medication review' })).not.toBeInTheDocument()
    expect(screen.getByText('Medication')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Actionable follow-up task' })).toBeInTheDocument()
    expect(screen.getAllByRole('textbox', { name: 'Add clinical code' })).toHaveLength(7)
  })
})
