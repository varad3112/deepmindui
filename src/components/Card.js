import React from 'react';
import './Card.css';

const Card = ({ imgSrc, text }) => {
  return (
    <div className="card">
      <img src={imgSrc} alt="Card" />
      <p className="card-text">{text}</p>
      <button className="arrow-btn">→</button>
    </div>
  );
};

export default Card;
