import React from "react";
import "./card.css";

export function First_Card() {
  return (
    <div className="card_div">
      <div className="text">
        <h1>Rent Your Dream Dress Now!</h1>
        <span>Rent a designer-quality dress, or buy one to wear on repeat.</span>
        <div className="btn">
          <button id="rent">RENT NOW</button>
          <button id='exp'>Explore Our Collection</button>
        </div>
      </div>
      <img
        src="src/assets/chatbot.jpg" 
        alt="Dream Dress"
      />
    </div>
  );
}


export  function Rent_Card(props) {
  return (
    <div className="rent_Card">
      <h1>Just Rent</h1>
      <p>{props.text}</p>
      <button>RENT NOW</button>
    </div>
  )
}

