import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./styles/Home.css";

export default class Home extends Component {
  render() {
    return (
      <section className="">
        <h1>PAGINA DE BIENVENIDA</h1>
        <Link className="btn btn-primary" to="/game">
          Empezar a jugar
        </Link>
      </section>
    );
  }
}
