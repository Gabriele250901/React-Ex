import React from "react";
import { Welcome } from "../exercise2/exercise2";

export class Age extends React.Component {
  render() {
    return (
      <div>
        <p>Your age is {this.props.data}</p>
      </div>
    );
  }
}


// guarda anche il file exercise2 ho dovuto modificare anche quello 