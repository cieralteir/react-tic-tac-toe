import React from "react";
import Square from "./Square";

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null)
    };
  }

  renderSquare = index => {
    return (
      <Square
        value={this.state.squares[index]}
        index={index}
        onClick={this.onSquareClick}
      />
    );
  };

  onSquareClick = index => {
    const squares = this.state.squares.map((square, i) =>
      i === index ? this.props.player : square
    );

    this.setState({ squares });
    this.props.onClick(this.state.squares);
  };

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
