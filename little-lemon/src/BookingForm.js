import React, { useState } from 'react';
import './App.css';

function BookingForm({ availableTimes, selectedDate, selectedTime, onDateChange, onTimeChange, onSubmit }) {
  const [guests, setGuests] = useState('1');
  const [occasion, setOccasion] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  // Function to get today's date in YYYY-MM-DD format
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: selectedDate,
      time: selectedTime,
      guests,
      occasion
    };
    onSubmit(formData);
    setShowSuccessPopup(true); // Show success popup
  };

  // Handler for closing the success popup
  const handleClosePopup = () => {
    setShowSuccessPopup(false);
  };

  return (
    <div className="booking-form-container">
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={selectedDate}
          min={getTodayDate()} // Set minimum date to today
          onChange={onDateChange}
          required
        />
        
        <label htmlFor="time">Time:</label>
        <select
          id="time"
          name="time"
          value={selectedTime}
          onChange={onTimeChange}
          required
        >
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))
          ) : (
            <option value="">No available times</option>
          )}
        </select>
        
        <label htmlFor="guests">Number of Guests:</label>
        <select
          id="guests"
          name="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        >
          {Array.from({ length: 10 }, (_, index) => index + 1).map(number => (
            <option key={number} value={number}>{number}</option>
          ))}
        </select>

        <label htmlFor="occasion">Occasion:</label>
        <select
          id="occasion"
          name="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="birthday">Birthday</option>
          <option value="anniversary">Anniversary</option>
        </select>

        <button type="submit">Reserve Table</button>
      </form>

      {showSuccessPopup && (
        <div className="success-popup">
          <p>Your reservation has been successfully made!</p>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default BookingForm;
