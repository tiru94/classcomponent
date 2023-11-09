import React, { Component } from "react";

export default class Childdata extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
