import React, { Component } from "react";
import Box from "./Box";

class BoxContainer extends Component {
  static defaultProps = {
    unmOfColorBox: 18,
    allColors: [
      "purple",
      "magenta",
      "violet",
      "pink",
      "red",
      "yellow",
      "green",
      "orange",
      "maroon",
      "blue",
      "chartreuse",
      "crimson",
      "springgreen",
      'orangered'
    ]
  };
  render() {
    const boxes = Array.from({ length: this.props.unmOfColorBox }).map((_, index) => (
      <Box key={index} colors={this.props.allColors}/>
    ))
    return (
      <div className="BoxContainer">
        {boxes}
      </div>
    );
  }
}

export default BoxContainer;
