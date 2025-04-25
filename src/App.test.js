jest.mock('./api', () => ({
  fetchAPI: (date) => ["17:00", "18:00", "19:00", "20:00"],
  submitAPI: (formData) => true
}));
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage heading', () => {
  render(<App />);
  const heading = screen.getByText(/This Week’s Specials!/i);
  expect(heading).toBeInTheDocument();
});

test('renders the booking page when navigated to', () => {
  render(<App />);
});
