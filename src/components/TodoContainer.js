import { Component } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
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

  render() {
    return (
      <div>
        <Header />
        <InputTodo />
        <TodoList
          todos={this.state.todos}
          onHandleChange={this.handleChange}
          onHandleDelete={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
