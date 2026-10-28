import { render, screen } from '@testing-library/react'
import Terminal from './Terminal'

test('shows the prompt line and the shell symbol', () => {
  render(<Terminal />)
  expect(screen.getByText('briannamansell')).toBeInTheDocument()
  expect(screen.getByText('World-Wide-Web')).toBeInTheDocument()
  expect(screen.getByText('~/workspace')).toBeInTheDocument()
  expect(screen.getByText('develop')).toBeInTheDocument()
  expect(screen.getByText('$')).toBeInTheDocument()
})
