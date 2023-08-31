import './App.css';
import { TodoWrapper } from './components/TodoWrapper';


function App() {
  
  return (
    <div className='App'>
     <TodoWrapper />
    
    </div>
  );
}

export default App;

/* 
import { Link, Route, Routes } from 'react-router-dom';
<Link to="tictactoe">
      <button>TicTacToe</button>
    </Link>
import TicTacToe from './pages/tictactoe';
 <Routes>
      <Route path="tictactoe" element={ <TicTacToe />} />
      </Routes>
*/