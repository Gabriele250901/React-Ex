import { isDisabled } from "@testing-library/user-event/dist/utils";
import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleChangingSomething = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

 handleLogin = () => {
  this.props.onClick(this.state)
 }

  render() {
    const isDisabled = !this.state.username || !this.state.password;
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.name}
            onChange={this.handleChangingSomething}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChangingSomething}
          />
          <button onClick={this.handleLogin} disabled={isDisabled}>
            Login
          </button>
        </form>
      </div>
    );
  }
}
