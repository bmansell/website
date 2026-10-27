import { render, screen } from '@testing-library/react'
import App from './App'

test('Renders with name', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: /Brianna\s*Mansell/i })).toBeInTheDocument()
})
