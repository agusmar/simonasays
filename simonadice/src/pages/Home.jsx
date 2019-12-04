import React, { Component } from "react";
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
        <Start />
      </section>
    );
  }
}

export default Home;
