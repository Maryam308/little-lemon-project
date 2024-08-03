import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm'; // Adjust import path as needed

describe('BookingForm JavaScript Validation', () => {
  test('Shows validation error when date is missing', () => {
    render(<BookingForm availableTimes={[]} selectedDate="" selectedTime="17:00" onDateChange={() => {}} onTimeChange={() => {}} onSubmit={() => {}} />);
    fireEvent.click(screen.getByText(/Reserve Table/));
    expect(screen.getByText(/Date is required/)).toBeInTheDocument();
  });

  test('Shows validation error when time is missing', () => {
    render(<BookingForm availableTimes={[]} selectedDate="2024-08-04" selectedTime="" onDateChange={() => {}} onTimeChange={() => {}} onSubmit={() => {}} />);
    fireEvent.click(screen.getByText(/Reserve Table/));
    expect(screen.getByText(/Time is required/)).toBeInTheDocument();
  });

  test('Shows validation error when guests number is less than 1', () => {
    render(<BookingForm availableTimes={[]} selectedDate="2024-08-04" selectedTime="17:00" onDateChange={() => {}} onTimeChange={() => {}} onSubmit={() => {}} />);
    fireEvent.change(screen.getByLabelText(/Number of Guests:/), { target: { value: '0' } });
    fireEvent.click(screen.getByText(/Reserve Table/));
    expect(screen.getByText(/Number of guests must be at least 1/)).toBeInTheDocument();
  });

  test('Form submits when all fields are valid', () => {
    const handleSubmit = jest.fn();
    render(<BookingForm availableTimes={['17:00', '18:00', '19:00']} selectedDate="2024-08-04" selectedTime="17:00" onDateChange={() => {}} onTimeChange={() => {}} onSubmit={handleSubmit} />);
    
    fireEvent.change(screen.getByLabelText(/Number of Guests:/), { target: { value: '2' } });
    fireEvent.click(screen.getByText(/Reserve Table/));
    
    expect(handleSubmit).toHaveBeenCalledWith({
      selectedDate: '2024-08-04',
      selectedTime: '17:00',
      guests: '2',
      occasion: 'birthday',
    });
  });
});
