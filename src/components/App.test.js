import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders with name', () => {
  render(<App />);
  const nameText = screen.getByText(/Brianna Mansell/i);
  expect(nameText).toBeInTheDocument();
});
