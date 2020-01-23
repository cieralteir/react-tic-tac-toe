import React from "react";
import Board from "./components/Board";
import History from "./components/History";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      players: ["X", "0"],
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

  setHistory = move => {
    this.setState(state => {
      const history = JSON.parse(JSON.stringify(state.history));

      history.push(move);

      return { history };
    });
  };

  onBoardClick = squares => {
    this.setHistory(squares);
    this.setPlayer();
  };

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board player={this.state.player} onClick={this.onBoardClick} />
        </div>
        <div className="game-info">
          <div>Current Player: {this.state.player}</div>
          <History history={this.state.history} />
        </div>
      </div>
    );
  }
}
