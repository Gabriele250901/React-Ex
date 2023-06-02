import React from "react";
import { Welcome } from "../exercise2/exercise2";

export class InteractiveWelcome extends React.Component {
  state = {
    name: "",
  };
  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({
      name: value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
        />

        <Welcome name={this.state.name} />
      </div>
    );
  }
}
