import React, { Component } from "react";
import PropTypes from "prop-types";

class MyCompPublicFunction extends Component {
  render() {
    const { name, pw, children } = this.props;
    return (
      <div>
        <h1>이름 : {name}</h1>
        <h1>PW : {pw}</h1>
        <h2>Child : {children}</h2>
      </div>
    );
  }
}

export default MyCompPublicFunction;
