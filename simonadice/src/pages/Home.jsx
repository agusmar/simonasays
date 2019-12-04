import React, { Component } from "react";
import logo from "../components/images/Logo_WWCode_rainbow.png";
import Start from "../components/Start";
// import "./styles/Home.css";

class Home extends React.Component {
  render() {
    return (
      <section className="">
        <img src={logo} alt="" />
        <Start />
      </section>
    );
  }
}

export default Home;
