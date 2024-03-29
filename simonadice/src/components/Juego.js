const gameboard = document.getElementById("gameboard");
const giroMagico = document.querySelector(".rotate");
const celeste = document.getElementById("celeste");
const violeta = document.getElementById("violeta");
const naranja = document.getElementById("naranja");
const verde = document.getElementById("verde");
const btnEmpezar = document.getElementById("btnEmpezar");
const container = document.getElementById("container");
// const count = document.getElementById("scoreCount");
const ULTIMO_NIVEL = 5;
var acumCount = 0;

class Juego {
  constructor() {
    this.inicializar = this.inicializar.bind(this);
    this.inicializar(); // Podemos declarar cualquier método/accion de THIS (o sea de JUEGO) aunque no exista, y después escribirla
    this.generarSecuencia();
    setTimeout(this.siguienteNivel, 500);
  }

  inicializar() {
    document.getElementById("scoreCount").innerHTML = 0;
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.elegirColor = this.elegirColor.bind(this);
    this.toggleBtnEmpezar();
    this.nivel = 1;
    this.acumRotar = 0;
    this.colores = {
      celeste,
      violeta,
      naranja,
      verde
    };
  }

  toggleBtnEmpezar() {
    if (btnEmpezar.classList.contains("hide")) {
      btnEmpezar.classList.remove("hide");
      container.classList.add("blur");
    } else {
      btnEmpezar.classList.add("hide");
      container.classList.remove("blur");
    }
  }

  generarSecuencia() {
    this.secuencia = new Array(ULTIMO_NIVEL)
      .fill(0)
      .map(n => Math.floor(Math.random() * 4));
  }

  siguienteNivel() {
    this.subnivel = 0;
    this.iluminarSecuencia();
    this.agregarEventosClick();
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

  transformarColoraNumero(color) {
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
      setTimeout(() => this.iluminarColor(color), 1000 * i);
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
    const numeroColor = this.transformarColoraNumero(nombreColor);
    this.iluminarColor(nombreColor);
    if (numeroColor === this.secuencia[this.subnivel]) {
      this.subnivel++;
      if (this.subnivel === this.nivel) {
        this.nivel++;
        this.eliminarEventosClick();
        if (this.nivel === ULTIMO_NIVEL + 1) {
          this.displayCounter();
          this.ganoElJuego();
          this.resetCount();
          this.acumRotar = 0;
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
      this.acumRotar = 0;
      this.resetRotar();
    }
  }

  displayCounter() {
    document.getElementById("scoreCount").innerHTML = acumCount += 1;
  }

  resetCount() {
    return (acumCount = 0);
  }

  rotar() {
    this.acumRotar += 45;
    gameboard.style.transform = `rotate(${this.acumRotar}deg)`;
  }

  resetRotar() {
    gameboard.style.transform = `rotate(0deg)`;
    return (this.acumRotar = 0);
  }

  ganoElJuego() {
    swal(
      "Biennn!!",
      `Llegaste hasta el final! Tu puntaje es de ${acumCount}`,
      "success"
    ).then(() => {
      this.inicializar();
    });
  }

  perdioElJuego() {
    swal(
      "UPSSS",
      `Seguí intentando! Tu puntaje fue de ${acumCount}`,
      "error"
    ).then(() => {
      this.eliminarEventosClick();
      this.inicializar();
    });
  }
}

function empezarJuego() {
  window.juego = new Juego();
}
