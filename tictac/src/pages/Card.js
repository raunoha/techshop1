import React from 'react';
import '../styles/Card.css'; // Create a CSS file for styling the cards

export default function Card({ symbol, isFlipped, isMatched, onClick }) {
  const cardClassName = `card ${isFlipped ? 'flipped' : ''} ${isMatched ? 'matched' : ''}`;
  
  return (
    <div className={cardClassName} onClick={onClick}>
      {symbol}
    </div>
  );
}
