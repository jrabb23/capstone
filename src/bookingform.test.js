import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './components/BookingForm';

describe('BookingForm JavaScript validation', () => {
  const mockTimes = ['17:00', '18:00'];
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();

  beforeEach(() => {
    render(<BookingForm availableTimes={mockTimes} dispatch={mockDispatch} submitForm={mockSubmitForm} />);
  });

  test('displays error when date is empty', () => {
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    fireEvent.click(submitButton);
    const errorMsg = screen.getByText(/date is required/i);
    expect(errorMsg).toBeInTheDocument();
  });

  test('displays error when guests is less than 1', () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    fireEvent.change(guestsInput, { target: { value: 0 } });

    const errorMsg = screen.getByText(/guests must be between 1 and 10/i);
    expect(errorMsg).toBeInTheDocument();
  });

  test('submit button is disabled when form is invalid', () => {
    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeDisabled();
  });

  test('no errors when all fields are valid', () => {
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-05-01' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: 4 } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

    const submitButton = screen.getByRole('button', { name: /make your reservation/i });
    expect(submitButton).toBeEnabled();
  });
});
