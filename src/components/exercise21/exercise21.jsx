import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  usernameRef = createRef();
  passwordRef = createRef();
  handleLogin = (event) => {
    event.preventDefault();

    const { onLogin } = this.props;
    const username = this.usernameRef.current.value;
    const password = this.passwordRef.current.value;

    onLogin({ username, password });
  };

  tryingDisabled = () => {
    const btnD = document.querySelector("#provaD");
    if (this.usernameRef.current.value && this.passwordRef.current.value) {
      btnD.disabled = false;
    } else {
      btnD.disabled = true;
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <h1>Uncontrolled Login</h1>
          <input
            type="text"
            name="username"
            onChange={this.tryingDisabled}
            ref={this.usernameRef}
          />
          <input
            type="password"
            name="password"
            onChange={this.tryingDisabled}
            ref={this.passwordRef}
          />

          <button type="submit" id="provaD">
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
