import Tile from './tile';
import React from 'react';

class Board extends React.Component{
  constructor(props){
    super(props);
    this.renderRows = this.renderRows.bind(this);
    this.renderTiles = this.renderTiles.bind(this);
  }

  render() {
    debugger;
    return(
      <div id="board">
        {this.renderRows()}
      </div>
    );
  }

  renderRows() {
    //returns a bunch of divs
    const board = this.props.board;
    return board.grid.map( (row, i) => {
      return (
        <div className="row" key={`row-${i}`}>
          {this.renderTiles(row, i)}
        </div>
      );
    });
  }

  renderTiles(row, i){
    // returns a bunch of tiles for each row
    const board = this.props.board;
    return row.map( (tile, j) => {
      return (
        <Tile
          tile={tile}
          updateGame={this.props.updateGame}
          key={i * board.gridSize + j} />
      );
    });
  }

}

export default Board;
