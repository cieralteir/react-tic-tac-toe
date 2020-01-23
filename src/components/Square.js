import React from "react";

export default class Square extends React.Component {
  click = () => {
    this.props.onClick(this.props.index);
  };

  render() {
    return (
      <button className="square" onClick={this.click}>
        {this.props.value}
      </button>
    );
  }
}
