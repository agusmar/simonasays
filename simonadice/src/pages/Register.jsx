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
              
                
                <button class="button">Enviar</button>
              </form>
  
             
            </section>
          </section>
        </React.Fragment>
      );
  }
}

export default Register;


