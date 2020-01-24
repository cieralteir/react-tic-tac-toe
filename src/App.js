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
      history: []
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

  handleBoardClick = squares => {
    this.setBoard(squares);
    this.setPlayer();
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
          <div>Current Player: {this.state.player}</div>
          <History
            history={this.state.history}
            onClick={this.handleHistoryClick}
          />
        </div>
      </div>
    );
  }
}
