import React, { Component } from "react";

class Coin extends Component {
  render() {
    return (
      <div className="Coins">
        <img src={this.props.info.imgSrc} alt={this.props.info.sides} />
      </div>
    );
  }
}

export default Coin;
