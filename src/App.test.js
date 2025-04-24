// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the homepage heading', () => {
  render(<App />);
  const heading = screen.getByText(/This Week’s Specials!/i);
  expect(heading).toBeInTheDocument();
});

test('renders the booking page when navigated to', () => {
  // This may need a navigation trigger since you can't set an initial path
  render(<App />);
  // optional: simulate nav to /booking and test there
});
