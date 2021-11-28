import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ nouveauClient: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.nouveauClient;

    this.props.onClientAdd({ id, nom });
    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.nouveauClient}
            onChange={this.handleChange}
            // ref={this.clientInput}
            type="text"
            placeholder="ajouter un client"
          />{" "}
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

export default ClientForm;
