import React, { Component } from "react";

import "./styles/Register.css";

class Register extends React.Component {
  render() {
      return (
        <React.Fragment>
          <section class="registro">
            <section class="registro__container">
              <form action="" class="registro__container--form">
                <input type="text" class="input" placeholder="nombre" />
                <input type="text" class="input" placeholder="email" />
              
                
                <button class="button">send</button>
              </form>
  
             
            </section>
          </section>
        </React.Fragment>
      );
  }
}

export default Register;


