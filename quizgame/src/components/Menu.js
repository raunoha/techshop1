import "../App.css";
import { useContext, } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Menu() {
    
  const { gameState, setGameState, userName, setUserName } = useContext(
    GameStateContext
  );
 
  const startQuiz = () => {
    if (userName !== '') { // Check if a valid username is provided
      setUserName(userName); // Update the username in the context
      setGameState('playing');
    } else {
      alert('Please enter a valid username before starting the quiz.');
    }
  };

  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        type="text"
        placeholder="Ex. John Doe"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
    <button
        className={`start-button ${gameState === 'playing' ? 'start-button-clicked' : ''}`}
        onClick={startQuiz}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
 /* 
const [buttonClicked, setButtonClicked] = useState(false);

  const startQuiz = () => {
    setButtonClicked(true); // Update buttonClicked state when the button is clicked
    setGameState('playing');
  };
 
 <button
        className={buttonClicked ? 'start-button clicked' : 'start-button'}
        onClick={startQuiz}
      >
        Start Quiz
      </button> */