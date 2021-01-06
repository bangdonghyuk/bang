import React, { Component } from "react";

class Subject extends Component {
  render() {
    return (
      <header className="">
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
    );
  }
}

export default Subject;
