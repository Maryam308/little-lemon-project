import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './App.css'; 

function CallToAction() {
  return (
    <section id="call-to-action">
      <h1>Welcome to Our Restaurant</h1>
      <p>Experience the best dining with us!</p>
      <Link to="/booking">
        <button>Reserve a Table</button>
      </Link>
    </section>
  );
}

export default CallToAction;
