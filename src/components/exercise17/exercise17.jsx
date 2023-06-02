import React, { createElement } from "react";

export class ClickTracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastButton: "",
    };
  }

  handleButtonClick = (event) => {
    const name = event.target.name;
    const button = event.button;
    this.setState({
        lastButton: name
    })
  };
  render() {
    
    return (
      <div>
        <h1>Last Button: {this.state.lastButton}</h1>
        <button name="button1" onClick={this.handleButtonClick}>
          Button1!
        </button>
        <button name="button2" onClick={this.handleButtonClick}>
          Button2!
        </button>
        <button name="button3" onClick={this.handleButtonClick}>
          Button3!
        </button>
      </div>
    );
  }
}
