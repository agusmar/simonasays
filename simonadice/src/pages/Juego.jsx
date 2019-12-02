import React, { Component } from "react";
// import JuegoJs from "../components/Juego";
import "./styles/Juego.css";

export default class Juego extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="container" className="container blur">
          <div className="score">
            Score:
            <div id="scoreCount" className="scoreCount">
              0
            </div>
          </div>
          <div class="grid">
            <div id="gameboard" className="gameboard">
              <div
                id="celeste"
                className="celeste botones"
                data-color="celeste"
              ></div>
              <div
                id="violeta"
                className="violeta botones"
                data-color="violeta"
              ></div>
              <div
                id="naranja"
                className="naranja botones"
                data-color="naranja"
              ></div>
              <div
                id="verde"
                className="verde botones"
                data-color="verde"
              ></div>
              <div className="centro">
                <div className="centroTexto">SIMONA</div>
              </div>
            </div>
          </div>
        </div>
        <button id="btnEmpezar" className="btn-start" onclick="empezarJuego()">
          Empezar a jugar!
        </button>
      </React.Fragment>
    );
  }
}
