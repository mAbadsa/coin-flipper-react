import React, { Component } from "react";
import { choice } from "../utilts/helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { sides: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { sides: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handlClick = this.handlClick.bind(this);
  }

  coinFlip() {
    const newChoice = choice(this.props.coins);
    this.setState(prevValue => {
      let newState = {
        ...prevValue,
        currCoin: newChoice,
        nFlips: prevValue.nFlips + 1
      };
      if (newChoice.sides === "heads") {
        newState.nHeads += 1;
      } else {
        newState.nTails += 1;
      }
      return newState;
    });
  }

  handlClick() {
    return this.coinFlip();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Flip A Coin!</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handlClick}>Click to Flip</button>
        <p>
          Out of {this.state.nFlips} flips, There have been {this.state.nHeads}
          Heads, and {this.state.nTails} Tials.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
