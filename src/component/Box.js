import React, { Component } from "react";
import { choice } from "../utilts/helpers";

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: choice(this.props.colors)
    };
    this.handleClick = this.handleClick.bind(this);
  }

  pickColors() {
    let newColor;
    do {
      newColor = choice(this.props.colors);
    } while (newColor === this.state.color);

    this.setState(prevValue => {
      return {
        color: newColor
      };
    });
  }

  handleClick() {
    return this.pickColors();
  }

  render() {
    return (
      <div
        className="Box"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default Box;
