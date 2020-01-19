import React, { Component } from "react";
import ReactDOM from "react-dom";
import Box from "./component/Box";
import BoxContainer from "./component/BoxContainer";
import 'normalize.css/normalize.css';
import "./style/box.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BoxContainer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));