import React, { Component } from "react";
import { Link } from "react-router-dom";
import twitter from "../components/images/twitter2.svg"
import instagram from "../components/images/instagram.svg"
import meetup from "../components/images/meetup3.svg";
import "./styles/GoodBye.css"


// import "./styles/Home.css";

class Goodbye extends React.Component {
  render() {
    return (
      <section className="contact-us">
        <p className="info">¡Seguinos en nuestras redes!</p>
        <div className="wrap-contact">
          <div className="net">
            <div className="logo">
              <a className="twitter" href="https://twitter.com/wwcodeba/"><i class="fab fa-twitter"></i></a>
            </div>
            <div className="logo">
              <a classname="meetup" href="https://www.meetup.com/es/Women-Who-Code-Buenos-Aires/"><i class="fab fa-meetup"></i></a>
              </div>
            <div className="logo">
              <a className="instagram" href="https://www.instagram.com/wwcodebuenosaires/"> <i class="fab fa-instagram"></i></a>
          </div>
        </div>
        </div>
      </section>
    );
  }
}

export default Goodbye;

