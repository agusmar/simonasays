import React, { Component } from "react";
// import JuegoJs from "../components/Juego";
import swal from 'sweetalert';
import r from 'react-router' 
import "./styles/Juego.css";

class JuegoJS extends Component {
  constructor(props) {
    super(props);

    this.inicializar = this.inicializar.bind(this);
    this.elegirColor = this.elegirColor.bind(this);
    this.iluminarColor = this.iluminarColor.bind(this);
    this.iluminarSecuencia = this.iluminarSecuencia.bind(this);
    this.btnEmpezar = React.createRef();
    this.container = React.createRef();
    // this.inicializar(); // Podemos declarar cualquier método/accion de THIS (o sea de JUEGO) aunque no exista, y después escribirla
  }

  inicializar () {
    this.domRefs = {
      gameboard: document.getElementById("gameboard"),
      giroMagico: document.querySelector(".rotate"),
      celeste: document.getElementById("celeste"),
      violeta: document.getElementById("violeta"),
      naranja: document.getElementById("naranja"),
      verde: document.getElementById("verde"),
      btnEmpezar: document.getElementById("btnEmpezar"),
      container: document.getElementById("container"),
      // count: document.getElementById("scoreCount");
    }

    
    
    this.ULTIMO_NIVEL = 8;
    this.acumCount = 0;
    this.subnivel = 0;

    this.colores = {
      celeste: this.domRefs.celeste,
      violeta: this.domRefs.violeta,
      naranja: this.domRefs.naranja,
      verde: this.domRefs.verde
    };

    // document.getElementById("scoreCount").innerHTML = 0;
    this.siguienteNivel = this.siguienteNivel.bind(this);
    // this.elegirColor = this.elegirColor.bind(this);
    // this.elegirColor = this.Juego.bind(this);
    this.toggleBtnEmpezar();
    this.nivel = 1;
    this.acumRotar = 0;

    this.generarSecuencia();
    setTimeout(this.siguienteNivel, 500);
  }

  toggleBtnEmpezar() {
    if (this.domRefs.btnEmpezar.classList.contains("hide")) {
      this.domRefs.btnEmpezar.classList.remove("hide");
      this.domRefs.container.classList.add("blur");
    } else {
      this.domRefs.btnEmpezar.classList.add("hide");
      this.domRefs.container.classList.remove("blur");
    }
  }

  generarSecuencia() {
    this.secuencia = new Array(this.ULTIMO_NIVEL)
      .fill(0)
      .map(n => Math.floor(Math.random() * 4));
  }

  siguienteNivel() {
    this.subnivel = 0;
    this.eliminarEventosClick();
    this.iluminarSecuencia();
    // setTimeout(() => this.agregarEventosClick(), 0);
  }

  transformarNumeroAColor(numero) {
    switch (numero) {
      case 0:
        return "celeste";
      case 1:
        return "violeta";
      case 2:
        return "naranja";
      case 3:
        return "verde";
    }
  }

  transfColoraNumero(color) {
    switch (color) {
      case "celeste":
        return 0;
      case "violeta":
        return 1;
      case "naranja":
        return 2;
      case "verde":
        return 3;
    }
  }

  iluminarSecuencia() {
    for (let i = 0; i < this.nivel; i++) {
      let color = this.transformarNumeroAColor(this.secuencia[i]);
      setTimeout(() => {
        this.iluminarColor(color);
        
        if (i == (this.nivel - 1)) {
          this.agregarEventosClick();
        }
      }, 1000 * i + 1);

    }
  }

  iluminarColor(color) {
    this.colores[color].classList.add("light");
    setTimeout(() => this.apagarColor(color), 150);
  }

  apagarColor(color) {
    this.colores[color].classList.remove("light");
  }

  agregarEventosClick() {
    this.colores.celeste.addEventListener("click", this.elegirColor);
    this.colores.verde.addEventListener("click", this.elegirColor);
    this.colores.violeta.addEventListener("click", this.elegirColor);
    this.colores.naranja.addEventListener("click", this.elegirColor);
  }

  eliminarEventosClick() {
    this.colores.celeste.removeEventListener("click", this.elegirColor);
    this.colores.verde.removeEventListener("click", this.elegirColor);
    this.colores.violeta.removeEventListener("click", this.elegirColor);
    this.colores.naranja.removeEventListener("click", this.elegirColor);
  }

  elegirColor(ev) {
    const nombreColor = ev.target.dataset.color;
    const numeroColor = this.transfColoraNumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.eliminarEventosClick();
        if (this.nivel === this.ULTIMO_NIVEL + 1) {
          this.displayCounter();
          this.ganoElJuego();
          this.resetCount();
          this.resetRotar();
        } else {
          this.rotar();
          this.displayCounter();
          setTimeout(this.siguienteNivel, 1300);
        }
      }
    } else {
      this.perdioElJuego();
      this.resetCount();
      this.resetRotar();
    }
  }

  displayCounter() {
    document.getElementById("scoreCount").innerHTML = this.acumCount += 1;
  }

  resetCount() {
    return (this.acumCount = 0);
  }

  rotar() {
    this.acumRotar += 45;
    this.domRefs.gameboard.style.transform = `rotate(${this.acumRotar}deg)`;
  }

  resetRotar() {
    this.domRefs.gameboard.style.transform = `rotate(0deg)`;
    this.acumRotar = 0;
  }

  ganoElJuego() {
    swal({
      title: "GANASTE",
      text: '¡Participas del sorteo!',
      icon: 'https://media.tenor.com/images/9d120658658c120ef86628105f42a89e/tenor.gif',
      button: "¡Yay!",
    }).then(() => {
      this.inicializar();
      this.props.history.push('/register')
    });
  }

  perdioElJuego() {
    swal({
      title: "PERDISTE",
      text: '¡Seguí intentando!',
      icon: 'https://media0.giphy.com/media/11o8iIgiTvbNNC/source.gif'
    }).then(() => {
      this.eliminarEventosClick();
      this.inicializar();
    });
  }

  render (props) {
    console.log(this.props);
    
    return (
    <React.Fragment>
      <div id="container" className="container blur">
        <div className="score">
          <div id="scoreCount" className="scoreCount">
            0
          </div>
        </div>
  
        <div className="grid">
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
            <div id="verde" className="verde botones" data-color="verde"></div>
            <div className="centro">
              <div className="centroTexto">simona</div>
            </div>
          </div>
        </div>
      </div>
      <button
        id="btnEmpezar"
        className="btn-start"
        onClick={this.inicializar}
      >
        PLAY
      </button>
    </React.Fragment>
    )
  }
}

// const pepito = new JuegoJS();

// function Juego() {
// }

export default JuegoJS;
