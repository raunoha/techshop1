import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import TicTacToe from "./pages/TicTacToe";
import NumberGame from './pages/NumberGame';
import Hangman from './pages/Hangman';
import MemoryGame from './pages/MemoryGame';


function App() {
  return (
    <div >
<Link to="/">
  <button>Home</button>
</Link>
<Link to="/tictactoe">
  <button>TicTacToe</button>
</Link>
<Link to="/numberguess">
  <button>Number Guess Game</button>
</Link>
<Link to="/hangman">
  <button>Hangman Game</button>
</Link>
<Link to="/memorygame">
  <button>Memory Game</button>
</Link>
      <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="tictactoe" element={ <TicTacToe />} />
      <Route path="numberguess" element={ <NumberGame />} />
      <Route path="hangman" element={ <Hangman />} />
      <Route path="memorygame" element={ <MemoryGame />} />
      </Routes>
    </div>
  );
}

export default App;
