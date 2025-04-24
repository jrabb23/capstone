import { render, screen } from "@testing-library/react";
import BookingForm from './components/BookingForm';

test('renders the "Choose date" label', () => {
  // Mock required props
  const mockTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();

  render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} />);
  
  const labelElement = screen.getByText("Choose date");
  expect(labelElement).toBeInTheDocument();
});
