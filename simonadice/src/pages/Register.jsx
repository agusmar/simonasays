import React, { Component } from "react";

import "./styles/Register.css";

class Register extends React.Component {
  render() {
      return (
        <React.Fragment>
          <section class="registro">
            <section class="registro__container">
              <h2>Regístrate</h2>
              <form action="" class="registro__container--form">
                <input type="text" class="input" placeholder="Nombre" />
                <input type="text" class="input" placeholder="Correo" />
                <input type="password" class="input" placeholder="Contraseña" />
                <h4>¿Te identificas como mujer?</h4>
                <label for="">
                  <input type="checkbox" class="input" placeholder="Contraseña" />
                  Sí
                </label>
                <label for="">
                  <input type="checkbox" class="input" placeholder="Contraseña" />
                  No
                </label>
                <button class="button">Registrarme</button>
              </form>
  
              <div class="registro__container--iniciarsesion">
                <a href="index.html">Iniciar sesión</a>
              </div>
            </section>
          </section>
        </React.Fragment>
      );
  }
}

export default Register;


