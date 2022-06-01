import TicTacToe from '../ticTacToe'
import RandomNameGenerator from '../randomNameGen';
import NoToolSelectedScreen from '../noToolSelectedScreen';
import HangmanGame from '../hangman'

export default function GameDisplay(props) {
  
  const classToolID = 3

  function showTool(classToolID){
    switch(3) {
      case 1:
          return <TicTacToe />
      case 2:
          return <RandomNameGenerator />
      case 3:
          return <HangmanGame />
      default:
         return <NoToolSelectedScreen />
    }
  }

    return (
      <div className="justify-content-center">
        {showTool(props.selected)}
      </div>
    );
  }