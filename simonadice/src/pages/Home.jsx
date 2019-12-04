import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../components/images/Logo_WWCode_rainbow.png";
import Start from "../components/Start";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <section className="main-container">
        <div className="logo-container">
          <img src={logo} alt="logo women who code" />
        </div>
        <Link className="btn btn-primary" to="/game">
            <Start />
          </Link>
      </section>
    );
  }
}

export default Home;