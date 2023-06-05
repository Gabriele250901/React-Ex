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

  onAdd = () => {
    const obj = {
      name: this.state.input,
      id: Date.now(),
    };
    if (this.state.input !== "") {
      this.setState({ items: this.state.items.concat(obj) });
      this.setState({ value: "" });
    }
    this.setState({
      input: "",
    });
  };
  resetTodo = () => {
    this.setState({
      items: [],
    });
  };

  deleteTodo = (itemId) => {
    this.setState({
      items: [...this.state.items].filter((id) => id.id !== itemId),
    });
  };

  render() {
    return (
      <div>
        <h1>Todo List!</h1>
        <input
          type="text"
          value={this.state.input}
          onChange={this.inputChange}
        />
        <button onClick={this.onAdd}>Add</button>
        <ul>
          {this.props.render(
            this.state.items,
            this.deleteTodo
          )}
        </ul>
        <button type="reset" onClick={this.resetTodo}>
          {" "}
          Reset Todo
        </button>
      </div>
    );
  }
}

// {this.state.items.map((todo) => (
//     <li key={todo.id}>
//       {todo.name}
//       <button onClick={() => this.deleteTodo(todo.id)}>&times;</button>
//     </li>
//   ))}
//   ;
