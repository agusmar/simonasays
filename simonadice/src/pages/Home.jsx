import React, { Component } from "react";
import { Link } from "react-router-dom";

// import "./styles/Home.css";

class Home extends React.Component {
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

export default Home;