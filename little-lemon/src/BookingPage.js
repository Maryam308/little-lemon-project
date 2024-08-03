import React from 'react';
import BookingForm from './BookingForm';

// BookingPage Component
function BookingPage() {
  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <div>
      <h1>Little Lemon Reservation</h1>
      <BookingForm availableTimes={availableTimes} onSubmit={handleFormSubmit} />
    </div>
  );
}

export default BookingPage;
