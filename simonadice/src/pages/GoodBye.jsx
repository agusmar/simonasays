import React, { Component } from "react";
import { Link } from "react-router-dom";
import twitter from "../components/images/twitter.png"
import instagram from "../components/images/instagram.png"
import meetup from "../components/images/meetup.png";
import "./styles/GoodBye.css"

// import "./styles/Home.css";

class Goodbye extends React.Component {
  render() {
    return (
      <section className="contact-us">
        <p>ENTERATE SI GANASTE</p>
        <p>ACERCANDOTE AL STAND A LAS</p>
        <p className="hour">5.30 PM</p>

        <p className="info">seguinos en </p>
        <p className="info">nuestras redes!</p>
        <div className="wrap-contact">
          <div className="net">
            <div className="logo">
              <a href="https://www.meetup.com/es/Women-Who-Code-Buenos-Aires/"><img src={twitter} /></a></div>
            <div className="logo">
              <a href="https://www.meetup.com/es/Women-Who-Code-Buenos-Aires/"><img src={meetup} /></a></div>
            <div className="logo">
              <a href="https://www.instagram.com/wwcodebuenosaires/"><img src={instagram} /></a></div>
          </div>
        </div>
      </section>
    );
  }
}

export default Goodbye;