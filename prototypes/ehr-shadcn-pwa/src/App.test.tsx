import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { App } from './App'

describe('EHR shadcn V2 prototype', () => {
  it('renders the core clinical layout contracts', () => {
    render(<App />)

    expect(screen.getByRole('banner', { name: 'Current patient context' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Offline and sync state' })).toBeInTheDocument()
    expect(screen.getByRole('region', { name: 'Consultation capture' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Medication review' })).toBeInTheDocument()
  })
})
