import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Start extends React.Component {
  constructor() {
    super();
    // this.inicializar = this.inicializar.bind(this);
  }

  goToGame () {

  }

  render() {
    return (
      <div className="buttonContainer">
        <Link to="/game" className="buttonStart"><p>press start</p></Link>
      </div>
    );
  }
}

export default Start;
