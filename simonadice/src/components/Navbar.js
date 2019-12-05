import React from "react";
import { Link } from "react-router-dom";

import "./styles/Navbar.css";
import logouno from "../public/img/WWCode Logo_BUENOS AIRES-1.png";

class Navbar extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__img">
          <Link to="/">
            <img src={logouno} alt="Logo de Women Who Code" />
          </Link>
        </div>
      </header>
    );
  }
}

export default Navbar;
