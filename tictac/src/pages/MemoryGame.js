import React, { useState, useEffect } from 'react';
import '../styles/MemoryGame.css';
import Card from './Card'; // Make sure to import the Card component from the correct file path
import Confetti from 'react-confetti';

const symbols = ['🐶', '🐱', '🐰', '🐢', '🦄', '🦆', '🐍', '🐙'];

const generateCards = () => {
  const cards = symbols.concat(symbols);
  return cards.map((symbol, index) => ({ id: index, symbol, isFlipped: false, isMatched: false }));
};

export default function MemoryGame() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstCard, secondCard] = flippedCards;
      if (cards[firstCard].symbol === cards[secondCard].symbol) {
        setCards((prevCards) => {
          prevCards[firstCard].isMatched = true;
          prevCards[secondCard].isMatched = true;
          return [...prevCards];
        });
      }
      setTimeout(() => {
        setCards((prevCards) => {
          prevCards[firstCard].isFlipped = false;
          prevCards[secondCard].isFlipped = false;
          return [...prevCards];
        });
        setFlippedCards([]);
      }, 1000);
    }
  }, [flippedCards]);

  const handleCardClick = (index) => {
    if (!cards[index].isFlipped && flippedCards.length < 2) {
      setCards((prevCards) => {
        prevCards[index].isFlipped = true;
        return [...prevCards];
      });
      setFlippedCards((prevFlippedCards) => [...prevFlippedCards, index]);
    }
  };

 
 

  return (
    <div className="memory-game">
      <h1>Memory Matching Game</h1>
      <div className="cards-grid">
        {cards.map((card, index) => (
          <Card
            key={card.id}
            symbol={card.isFlipped || card.isMatched ? card.symbol : '❓'}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

// <Confetti width={window.innerWidth} height={window.innerHeight} />