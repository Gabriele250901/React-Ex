
import React from "react";

export class Login extends React.Component {
  state = {
    username: "",
    password: "",
    country: "",
  };
  handleChangingSomething = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  onLogin = () => {
    const onLogin = this.props;
    const { username, password } = this.state;
    onLogin({ username, password });
  };
  handleReset = () => {
    this.setState({
      username: "",
      password: "",
      country: ""
    });
  };

  render() {
    const isDisabled = !this.state.username || !this.state.password || !this.state.country;
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
          <input
            type="text"
            name="country"
            value={this.state.country}
            onChange={this.handleChangingSomething}
          />
          <button onClick={this.onLogin} disabled={isDisabled}>
            Login
          </button>
          <button onClick={this.handleReset} type="reset">Reset</button>
        </form>
      </div>
    );
  }
}
