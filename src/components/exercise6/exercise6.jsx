import React from "react";
import { Welcome } from "../exercise2/exercise2";

export class Age extends React.Component {
  render() {
    return (
      <div>
        {this.props.age >= 18 && this.props.age <= 65 && (
          <p>Your age is {this.props.age}</p>
        )}
      </div>
    );
  }
}

// guarda anche il file exercise2 ho dovuto modificare anche quello
