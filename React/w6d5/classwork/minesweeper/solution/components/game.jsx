import Board from './board';
import React from 'react';
import * as Minesweeper from '../minesweeper';

class Game extends React.Component{
  constructor(props) {
    super(props);
    // this is a new JavaScript board
    const board = new Minesweeper.Board(9, 10);
    // we assign the state as the board
    this.state = { board: board };
    this.restartGame = this.restartGame.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  restartGame() {
    const board = new Minesweeper.Board(9, 10);
    this.setState({ board: board });
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    debugger;
    this.setState({ board: this.state.board });
  }

  render() {
    let modal;
    if (this.state.board.lost() || this.state.board.won()) {
      const text = this.state.board.won() ? "You won!" : "You lost!";
      modal =
        <div className='modal-screen'>
          <div className='modal-content'>
            <p>{text}</p>
            <button onClick={this.restartGame}>Play Again</button>
          </div>
        </div>;
    }

    return (
      <div className="wrapper">
        {modal}
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    );
  }
}

export default Game;
