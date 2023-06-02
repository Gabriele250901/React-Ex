import React, { createRef } from "react";

export class UncontrolledLogin extends React.Component {
  usernameRef = createRef();
  passwordRef = createRef();
  handleLogin = (event) => {
    event.preventDefault();

    const { onLogin } = this.props;
    const username = this.usernameRef.current.value
    const password = this.passwordRef.current.value
    
    onLogin({ username, password});
  };
  componentDidMount(){
    this.usernameRef.current.focus();
  }

  render() {
    const isDisabled = !this.usernameRef.current  || !this.passwordRef.current ;
    return (
      <div>
        <form onSubmit={this.handleLogin}>
          <h1>Uncontrolled Login</h1>
          <input type="text" name="username" ref={this.usernameRef}  />
          <input type="password" name="password" ref={this.passwordRef}  />

          <button type="submit" disabled={isDisabled}>
            Login
          </button>
          <button type="reset">Reset</button>
        </form>
      </div>
    );
  }
}

