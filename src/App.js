import React, { Component } from "react";
import "./styles.css";

import Childdata from "./Childdata";

export default class App extends Component {
  state = {
    name: "tiru"
  };

  render() {
    return (
      <div>
        <Childdata name={this.state.name} />
      </div>
    );
  }
}
