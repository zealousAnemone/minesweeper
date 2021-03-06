import React from 'react';
import './App.css';
import Square from './Square.js';

function gameBoardConstructor() {
  let gameBoard = [];
  for (let i = 0; i < 36; i++) {
    let rando = Math.floor(Math.random() * 2);
    if (rando === 0) {
      gameBoard.push("-");
    } else {
      gameBoard.push("*");
    }
  }
  let board = gameBoard.map((square) =>
    <Square mine={square} />
  );
  return board;
}

class App extends React.Component {
  render() {
    return (
      <div className="gamearea">
        {gameBoardConstructor()}
      </div>
    );
  }
}

//ReactDOM.render(<App />, document.getElementById("root"));

export default App;
