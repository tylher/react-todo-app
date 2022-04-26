import { Component } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
  state = {
    todos: [],
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => res.json())
      .then((data) => this.setState({ todos: data }));
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  addTodo = (title) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { id: uuidv4(), title: title, completed: false },
      ],
    });
  };

  setUpdateTitle = (UpdatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
          todo.title = UpdatedTitle;
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodo} />
          <TodoList
            todos={this.state.todos}
            onHandleChange={this.handleChange}
            onHandleDelete={this.delTodo}
            onHandleUpdate={this.setUpdateTitle}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
