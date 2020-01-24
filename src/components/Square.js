import React from "react";

export default class Square extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <button className="square" onClick={this.handleClick}>
        {this.props.value}
      </button>
    );
  }
}
