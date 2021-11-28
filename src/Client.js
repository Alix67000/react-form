import React, { Component } from "react";

class Client extends Component {
  render() {
    return (
      <div>
        <li>
          {this.props.details.nom}
          <button onClick={() => this.props.onDelete(this.props.details.id)}>
            x
          </button>
        </li>
      </div>
    );
  }
}

export default Client;
