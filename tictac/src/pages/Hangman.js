import React, { useState, useEffect } from 'react';
import '../styles/./HangmanGame.css';
//import '../HangmanGame.css'; // Create this CSS file for styling

const words = ['hangman', 'javascript', 'react', 'developer']; // List of words to guess

function HangmanGame() {
  const [word, setWord] = useState('');
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [guess, setGuess] = useState('');
  const [remainingAttempts, setRemainingAttempts] = useState(6);

  useEffect(() => {
    // Choose a random word from the words array
    const randomWord = words[Math.floor(Math.random() * words.length)];
    setWord(randomWord);
  }, []);

  function handleGuessSubmit(event) {
    event.preventDefault();
    if (!guess) return;

    if (word.includes(guess)) {
      setGuessedLetters([...guessedLetters, guess]);
    } else {
      setRemainingAttempts(remainingAttempts - 1);
    }
    setGuess('');
  }

  function displayWord() {
    return word
      .split('')
      .map((letter) =>
        guessedLetters.includes(letter) ? letter : '_'
      )
      .join(' ');
  }

  function displayMessage() {
    if (word === displayWord()) {
      return 'Congratulations! You guessed the word!';
    } else if (remainingAttempts === 0) {
      return 'Game Over. The word was ' + word;
    } else {
      return 'Remaining Attempts: ' + remainingAttempts;
    }
  }

  return (
    <div className="hangman-game">
      <h1>Hangman Game</h1>
      <p>{displayMessage()}</p>
      <p>{displayWord()}</p>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="text"
          maxLength="1"
          value={guess}
          onChange={(e) => setGuess(e.target.value.toLowerCase())}
        />
        <button className='btnhang' type="submit">Guess</button>
      </form>
    </div>
  );
}

export default HangmanGame;
