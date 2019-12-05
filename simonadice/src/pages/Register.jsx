import React, { Component } from "react";
import swal from 'sweetalert';

import "./styles/Register.css";

class Register extends React.Component {
  constructor(props) {
    super(props)

    this.postData = async (name, email) => {
      const response = await fetch('https://simona-says.herokuapp.com/players/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          mail: email
        })
      });

      if (response.ok) {
        swal({
          title: 'Genial',
          text: '¡Ya estás participando!',
          icon: 'success',
          button: '¡Yay!'
        }).then(() => {
          this.props.history.push('/goodbye')
        });
      } else {
        swal({
          title: 'Error',
          text: 'Revisá los datos que ingresaste',
          type: 'error',
          icon: 'error'
        })
      }
    }

    this.name = '';
    this.email = '';

    this.onSubmit = (e) => {
      e.preventDefault();

      this.postData(this.name, this.email);
    }
  }

  render() {
      return (
        <React.Fragment>
          <section className="registro">
            <section className="registro__container">
              <h2>Para poder participar del sorteo, necesitamos algunos datos tuyos</h2>
              <form onSubmit={this.onSubmit} action="" className="registro__container--form">
                <input type="text" required className="input" placeholder="Nombre" onChange={(e) => { this.name = e.target.value }} />
                <input type="text" required className="input" placeholder="Email" onChange={(e) => { this.email = e.target.value }} />
                
                <button type="submit" className="buttonStart"><p>Send</p></button>
              </form>             
            </section>
          </section>
        </React.Fragment>
      );
  }
}

export default Register;


