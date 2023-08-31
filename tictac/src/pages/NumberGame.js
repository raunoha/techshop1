import React, { useState } from 'react';
import '../styles/./numbergame.css';

function NumberGuessingGame() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [feedback, setFeedback] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuessSubmit(event) {
    event.preventDefault();
    const guess = parseInt(userGuess, 10);
    
    if (isNaN(guess)) {
      setFeedback('Please enter a valid number.');
    } else if (guess < targetNumber) {
      setFeedback('Higher!');
    } else if (guess > targetNumber) {
      setFeedback('Lower!');
    } else {
      setFeedback('Congratulations! You guessed the number.');
      setTargetNumber(generateRandomNumber());
    }
  }

  return (
    <div className="game">
      <h1>Number Guessing Game</h1>
      <p>{feedback}</p>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="number"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
        />
        <button className='btn' type="submit">Submit Guess</button>
      </form>
    </div>
  );
}

export default NumberGuessingGame;
