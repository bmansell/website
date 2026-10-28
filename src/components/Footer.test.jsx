import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
  beforeEach(() => render(<Footer />))

  test('links to email, GitHub and LinkedIn', () => {
    expect(screen.getByRole('link', { name: 'Email Contact' })).toHaveAttribute('href', 'mailto:briannajmansell@gmail.com')
    expect(screen.getByRole('link', { name: 'Github Profile' })).toHaveAttribute('href', 'https://github.com/bmansell')
    expect(screen.getByRole('link', { name: 'LinkedIn Profile' })).toHaveAttribute('href', 'https://www.linkedin.com/in/briannamansell/')
  })

  test('opens external links in a new tab', () => {
    expect(screen.getByRole('link', { name: 'Github Profile' })).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('link', { name: 'LinkedIn Profile' })).toHaveAttribute('target', '_blank')
  })

  test('does not open the email link in a new tab', () => {
    expect(screen.getByRole('link', { name: 'Email Contact' })).not.toHaveAttribute('target')
  })

  test('shows the copyright', () => {
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
