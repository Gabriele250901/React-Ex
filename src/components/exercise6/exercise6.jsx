import React from "react";
import { Welcome } from "../exercise2/exercise2";

export class Age extends React.Component {
  render() {
    return (
      <div>
        <Welcome>Your age is {this.props.age}</Welcome>
      </div>
    );
  }
}
