import React from "react";
import { Welcome } from "../exercise2/exercise2";

export class Age extends React.Component {
  render() {
    return (
      <div>

        <p>Your age is {this.props.age}</p>

        {this.props.age > 18 ?
        <p>Your age is {this.props.age}</p>
        : <p>You are very young!!</p>
      }

      </div>
    );
  }
}


