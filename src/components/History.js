import React from "react";

export default class History extends React.Component {
  handleClick = index => {
    this.props.onClick(index);
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
          <button>Go to start</button>
        </li>
        {history}
      </ul>
    );

    return historyList;
  }
}
