import React from "react";
import { useState } from "react";
import { CounterDisplay } from "./exercise14";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
    };
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.increment,
        };
      });
    }, this.props.timeout);
  }
  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

Counter.defaultProps = {
  initialValue: 0,
  increment: 2,
  timeout: 1000,
};
