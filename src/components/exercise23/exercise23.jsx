import React from "react";

export class TodoList extends React.Component {
  state = {
    items: [],
    input: "",
  };

  inputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  onAdd = ()=>{
    const obj = {
        name : this.state.input,
        id: Date.now()
    }
    if(this.state.input !== ""){
        this.setState({items: this.state.items.concat(obj)})
        this.setState({value:""})
    }
    this.setState({
        input: "",
    })
  }
 
 

  render() {
    const myList = this.state.items.map(todo =>(
        <li>{todo.name}</li>
    ));
    return (
      <div>
        <h1>Todo List!</h1>
        <input type="text" value={this.state.input} onChange={this.inputChange} />
        <button onClick={this.onAdd}>Add</button>
        <ul>
            {myList}
        </ul>
      </div>
    );
  }
}
