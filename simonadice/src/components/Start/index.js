import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

class Start extends React.Component {
  render() {
    return (
      <div className="buttonContainer">
        <Link to="/game">
          <button className="buttonStart">press start</button>
        </Link>
      </div>
    );
  }
}

export default Start;
