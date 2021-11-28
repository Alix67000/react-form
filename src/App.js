import "./App.css";
import React, { Component } from "react";
import Client from "./Client";
import ClientForm from "./ClientForm";

class App extends Component {
  // clientInput = React.createRef();
  state = {
    clients: [
      { id: 1, nom: "Caro Chrismann" },
      { id: 2, nom: "Axel Nabli" },
      { id: 3, nom: "Doraiane Frnaz" },
    ],
    // compteur: 0,
    nouveauClient: "",
  };

  // handleClick = () => {
  //   const clients = this.state.clients.slice();
  //   clients.push({ id: 4, nom: "Ali AHMADI" });

  //   this.setState({ clients: clients });
  // };

  handleDelete = (id) => {
    const clients = this.state.clients.slice();
    const index = clients.findIndex((client) => client.id === id);

    clients.splice(index, 1);
    this.setState({ clients: clients });
  };

  handleAdd = (client) => {
    const clients = this.state.clients.slice();
    clients.push(client);

    this.setState({ clients });
  };

  render() {
    const title = "Liste des clients";

    return (
      <div className="App">
        <h1>{title}</h1>
        {/* {this.state.compteur}
        <button onClick={this.handleClick}>Click me</button> */}
        <ul>
          {this.state.clients.map((client) => (
            <Client details={client} onDelete={this.handleDelete} />
          ))}
        </ul>
        <ClientForm onClientAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
