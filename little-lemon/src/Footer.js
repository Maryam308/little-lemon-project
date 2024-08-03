import React from 'react';
import './App.css';
import logo from './assets/little-lemon-logo.png'; // Import the logo image

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="logo">
          <img src={logo} alt="Little Lemon Logo" />
        </div>
        
        <div className="site-map">
          <h3>SITE MAP</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#About">About</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Reservations</a></li>
            <li><a href="#">Order Online</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
        
        <div className="contact">
          <h3>CONTACT</h3>
          <p>Some address</p>
          <p>123-456-7890</p>
          <p>Give us a call</p>
          <p><a href="mailto:info@little-lemon.com">info@little-lemon.com</a></p>
          <p><a href="#">Write us a letter</a></p>
        </div>
        
        <div className="social-media">
          <h3>SOCIAL MEDIA</h3>
          <ul>
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li><a href="#"><i className="fab fa-youtube"></i></a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
