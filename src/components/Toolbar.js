import React from "react";
import "./Toolbar.css";

export default class Toolbar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <img src={require("../images/cat-logo.png")} alt="icon" />
      </nav>
    );
  }
}
