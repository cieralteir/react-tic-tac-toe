import React from "react";
import Board from "./components/Board";
import History from "./components/History";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      players: ["X", "0"],
      // board squares
      squares: Array(9).fill(null),
      // board history
      history: [],
      // is game over
      isOver: false
    };
  }

  componentDidMount() {
    this.setPlayer();
  }

  setPlayer = () => {
    this.setState(state => ({
      player: state.players[state.history.length % 2]
    }));
  };

  setBoard = squares => {
    this.setState({ squares });
    this.setState(state => {
      const history = JSON.parse(JSON.stringify(state.history));
      history.push(squares);
      return { history };
    });
  };

  handleBoardClick = async squares => {
    await this.setBoard(squares);
    await this.checkWinner();

    if (!this.state.isOver) {
      this.setPlayer();
    }
  };

  handleHistoryClick = index => {
    this.setState(state => {
      const history = JSON.parse(JSON.stringify(state.history));
      return {
        squares: state.history[index],
        history: history.slice(0, index + 1)
      };
    });
  };

  checkWinner = () => {
    if (
      this.checkHorizontal() ||
      this.checkVertical() ||
      this.checkSlanting()
    ) {
      this.setState({ isOver: true });
    }
  };

  checkHorizontal = () => {
    for (let x = 0; x < 9; x + 3) {
      if (
        this.state.squares[x] !== null &&
        this.state.squares[x] === this.state.squares[x + 1] &&
        this.state.squares[x] === this.state.squares[x + 2]
      ) {
        return true;
      }

      return false;
    }
  };

  checkVertical = () => {
    for (let x = 0; x < 3; x++) {
      if (
        this.state.squares[x] !== null &&
        this.state.squares[x] === this.state.squares[x + 3] &&
        this.state.squares[x] === this.state.squares[x + 6]
      ) {
        return true;
      }
    }

    return false;
  };

  checkSlanting = () => {
    if (
      this.state.squares[0] !== null &&
      this.state.squares[0] === this.state.squares[4] &&
      this.state.squares[0] === this.state.squares[8]
    ) {
      return true;
    }

    if (
      this.state.squares[2] !== null &&
      this.state.squares[2] === this.state.squares[4] &&
      this.state.squares[2] === this.state.squares[6]
    ) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board
            player={this.state.player}
            squares={this.state.squares}
            onClick={this.handleBoardClick}
          />
        </div>
        <div className="game-info">
          <div>
            Current Player: {this.state.player}{" "}
            {this.state.isOver ? "Winner" : ""}
          </div>
          <History
            history={this.state.history}
            onClick={this.handleHistoryClick}
          />
        </div>
      </div>
    );
  }
}
