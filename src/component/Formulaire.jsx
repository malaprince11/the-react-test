import React, { Component } from "react";


class Formulaire extends Component {
  // constructor(props) {
  // super(props);
  state = {
    nom: "",
    prenom: "",
    adesse: "",
  };
  // }

  handleSubmit(event) {
    alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
  }
  resetForm() {
    this.setState({ nom: "", prenom: "", adresse: "" });
  }

  onNameChange(event) {
    this.setState({ nom: event.target.value });
  }

  onPrenomChange(event) {
    this.setState({ prenom: event.target.value });
  }

  onAdresseChange(event) {
    this.setState({ adresse: event.target.value });
  }

  render() {
    return (
      <div className="contact-div">
        <form
          className="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          
        >
          <div className="txtb">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={this.state.nom}
              onChange={this.onNameChange.bind(this)}
            />
          </div>
          <div className="txtb">
            <label htmlFor="name">Prenom</label>
            <input
              type="text"
              id="Prenom"
              name="Prenom"

              value={this.state.prenom}
              onChange={this.onPrenomChange.bind(this)}
            />
          </div>
          <div className="txtb">
            <label htmlFor="message">Adesse</label>
            <input
               type="text"
              id="adresse"
              name="adresse"
              value={this.state.adresse}
              onChange={this.onAdresseChange.bind(this)}
            />
          </div>
          <button type="submit" className="btni ">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Formulaire;
