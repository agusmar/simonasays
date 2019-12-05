import React, { Component } from "react";
import { Link } from "react-router-dom";
import twitter from "../components/images/twitter.png"
import instagram from "../components/images/instagram.png"
import meetup from "../components/images/meetup.png";
import logo from "../components/images/Logo_WWCode_rainbow.png";
import "./styles/GoodBye.css"

// import "./styles/Home.css";

class Goodbye extends React.Component {
  render() {
    return (
      <section className="contact-us">
        <img className="contact-logo" src={logo} alt="logo women who code" />
        {/* <p>ACERCATE AL STAND PARA ENTERARTE SOBRE LA HORA DEL CONCURSO</p> */}

        <p className="info">¡Seguinos en nuestras redes!</p>
        <div className="wrap-contact">
          <div className="net">
            <div className="logo">
              <a target="_blank" href="https://www.meetup.com/es/Women-Who-Code-Buenos-Aires/"><img src={twitter} /></a></div>
            <div className="logo">
              <a target="_blank" href="https://www.meetup.com/es/Women-Who-Code-Buenos-Aires/"><img src={meetup} /></a></div>
            <div className="logo">
              <a target="_blank" href="https://www.instagram.com/wwcodebuenosaires/"><img src={instagram} /></a></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Goodbye;