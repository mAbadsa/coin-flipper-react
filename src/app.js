import React, { Component } from "react";
import ReactDOM from "react-dom";
import CoinContainer from "./component/CoinContainer";
import 'normalize.css/normalize.css';
import "./style/coin.css";

class App extends Component {
  render() {
    return (
      <div>
        <CoinContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));