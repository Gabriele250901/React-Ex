import React from "react";

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome ,{this.props.name}</p>
        {/* <p>Your age is {this.props.age}</p> */}
      </div>
    );
  }
}

Welcome.defaultProps = { name: "nome default" };
/* 
sono esercizio 2 / 3 / 4  / 5 / insieme  , ho dovuto
commentare quella parte perche` un esercizio mi richiedeva di ricrearlo,
ti sto lasciando le varie consegne cosi che puoi` guardarle e vedere se ho scritto 
bene il codice. :) 
*/
