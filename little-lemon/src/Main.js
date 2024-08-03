import React, { useReducer, useState, useEffect } from 'react';
import BookingPage from './BookingPage';
import { useNavigate } from 'react-router-dom';

// Fetch available times from the API
const fetchTimesForDate = async (date) => {
  try {
    const times = await fetchAPI(date); // Use the global fetchAPI function
    return times;
  } catch (error) {
    console.error('Error fetching times:', error);
    return [];
  }
};

// Submit booking data to the API
const submitForm = async (formData) => {
  try {
    const success = await submitAPI(formData); // Use the global submitAPI function
    return success;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
};

// Reducer function to manage available times based on actions
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_INITIAL_TIMES':
      return action.times;
    case 'UPDATE_TIMES':
      return action.times;
    default:
      return state;
  }
};

// Main component
function Main() {
  const [availableTimes, dispatch] = useReducer(reducer, []);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const navigate = useNavigate();

  const handleDateChange = async (date) => {
    setSelectedDate(date);
    const times = await fetchTimesForDate(date);
    dispatch({ type: 'UPDATE_TIMES', times });
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      date: selectedDate,
      time: selectedTime,
      guests,
      occasion
    };
    const success = await submitForm(formData);
    if (success) {
      navigate('/confirm');
    } else {
      alert('Failed to make reservation. Please try again.');
    }
  };

  useEffect(() => {
    const initializeTimes = async () => {
      const today = new Date().toISOString().split('T')[0];
      const times = await fetchTimesForDate(today);
      dispatch({ type: 'SET_INITIAL_TIMES', times });
    };

    initializeTimes();
  }, []);

  return (
    <main>
      <BookingPage
        availableTimes={availableTimes}
        selectedDate={selectedDate}
        selectedTime={selectedTime}
        onDateChange={handleDateChange}
        onTimeChange={handleTimeChange}
        onSubmit={handleSubmit}
      />
    </main>
  );
}

export default Main;
