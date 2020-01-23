import React from "react";

export default class History extends React.Component {
  render() {
    const history = this.props.history.map((squares, index) => (
      <li key={index}>
        <button>Go to move #{index + 1}</button>
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
