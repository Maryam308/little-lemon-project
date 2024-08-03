import React from 'react';
import './App.css';
import food1 from './assets/food1.jpg'; 
import food2 from './assets/food2.webp'; 
import food3 from './assets/food3.webp'; 

function Specials() {
  return (
    <section id="specials">
      <h2>Our Specials</h2>
      <div className="special">
        <img src={food1} alt="Shawarma" />
        <div className="special-info">
          <h3>Shawarma</h3>
          <p>Grilled meat with spices and vegetables wrapped in pita bread.</p>
        </div>
      </div>
      <div className="special">
        <img src={food2} alt="Kebba" />
        <div className="special-info">
          <h3>Kebba</h3>
          <p>Spiced ground meat mixed with bulgur and fried to perfection.</p>
        </div>
      </div>
      <div className="special">
        <img src={food3} alt="Manaeesh" />
        <div className="special-info">
          <h3>Manaeesh</h3>
          <p>Traditional flatbread topped with thyme, cheese, or meat.</p>
        </div>
      </div>
    </section>
  );
}

export default Specials;
