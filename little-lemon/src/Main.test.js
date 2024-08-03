// src/components/Main.test.js
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { fetchAPI } from '../api'; // Adjust the import path as needed
import Main from './Main'; // Adjust the import path as needed

jest.mock('../api'); // Mock the entire module

describe('Main Component', () => {
  beforeEach(() => {
    fetchAPI.mockResolvedValue(['17:00', '18:00', '19:00']); // Mocked response
  });

  test('updates available times when a new date is selected', async () => {
    render(<Main />);

    // Simulate changing the date
    fireEvent.change(screen.getByLabelText(/Date:/), { target: { value: '2024-08-04' } });

    await waitFor(() => {
      expect(fetchAPI).toHaveBeenCalledWith('2024-08-04'); // Ensure fetchAPI is called with the selected date
      expect(screen.getByText('17:00')).toBeInTheDocument(); // Check if the times are updated
      expect(screen.getByText('18:00')).toBeInTheDocument();
      expect(screen.getByText('19:00')).toBeInTheDocument();
    });
  });
});
