import React from 'react';
import './App.css'; // Import the CSS file
import city from './assets/city.jpg'; 

function Chicago() {
  return (
    <section id="chicago">
      <div className="content">
        <div className="text">
          <h2>About Us</h2>
          <p>Located in the heart of Chicago, our restaurant offers a unique dining experience with a blend of traditional and modern cuisines.</p>
        </div>
        <div className="image">
          <img src={city} alt="Chicago" />
        </div>
      </div>
    </section>
  );
}

export default Chicago;
