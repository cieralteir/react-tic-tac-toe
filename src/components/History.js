import React from "react";

export default class History extends React.Component {
  handleClick = index => {
    this.props.onClick(index);
  };

  reset = () => {
    this.props.onReset();
  };

  render() {
    const history = this.props.history.map((squares, index) => (
      <li key={index}>
        <button onClick={() => this.handleClick(index)}>
          Go to move #{index + 1}
        </button>
      </li>
    ));

    const historyList = (
      <ul>
        <li>
          <button onClick={this.reset}>Reset</button>
        </li>
        {history}
      </ul>
    );

    return historyList;
  }
}
