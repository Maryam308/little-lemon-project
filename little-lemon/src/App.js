import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Specials from './Specials'; 
import CallToAction from './CallToAction';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';  // Import the ConfirmedBooking component

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <Chicago />
          </>
        } />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirm" element={<ConfirmedBooking />} />  {/* Add route for ConfirmedBooking */}
        {/* Ensure no other conflicting routes */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
