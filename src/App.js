import React from "react";
import Board from "./components/Board";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: "X"
    };
  }

  onBoardClick = () => {
    this.setState({
      player: this.state.player === "X" ? "O" : "X"
    });
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board player={this.state.player} onClick={this.onBoardClick} />
        </div>
        <div className="game-info">
          <div>Current Player: {this.state.player}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
