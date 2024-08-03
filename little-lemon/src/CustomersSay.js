import React from 'react';
import cust1 from './assets/customer1.jpeg'; 
import cust2 from './assets/customer2.png'; 
import cust3 from './assets/cust3.jpg'; 
import './App.css';

function CustomersSay() {
  const renderStars = (rating) => {
    return (
      <div className="stars">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <span key={i}>&#9733;</span>
          ))}
        {Array(5 - rating)
          .fill()
          .map((_, i) => (
            <span key={i}>&#9734;</span>
          ))}
      </div>
    );
  };

  return (
    <section id="customers-say">
      <h2>What Our Customers Say</h2>
      <div className="testimonial">
        <img src={cust1} alt="customer 1" />
        <p>"The food was amazing!"</p>
        <h4>- John Doe</h4>
        {renderStars(5)}
      </div>
      <div className="testimonial">
        <img src={cust2} alt="Customer 2" />
        <p>"Excellent service and atmosphere."</p>
        <h4>- Jane Smith</h4>
        {renderStars(4)}
      </div>
      <div className="testimonial">
        <img src={cust3} alt="Customer 3" />
        <p>"I will definitely come back!"</p>
        <h4>- Alice Johnson</h4>
        {renderStars(5)}
      </div>
    </section>
  );
}

export default CustomersSay;
