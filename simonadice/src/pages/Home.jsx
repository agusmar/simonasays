import React, { Component } from "react";
import logo from "../components/images/Logo_WWCode_rainbow.png";
import Start from "../components/Start";
import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <section className="">
        <img src={logo} alt="" />
        <Start />
=======
      <section className="main-container">
        <div className="logo-container">
          <img src={logo} alt="logo women who code" />
        </div>
        <Link className="btn btn-primary" to="/game">
            <Start />
          </Link>
>>>>>>> 930c743df62cf92971901a742ce923540308f591
      </section>
    );
  }
}

export default Home;
