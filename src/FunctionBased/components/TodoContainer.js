import { Component } from "react";
import Header from "../ClassBased/Header";
import InputTodo from "./InputTodo";
import TodoList from "../TodoList";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends Component {
  state = {
    todos: [],
  };

  componentDidMount = () => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  };

  componentDidUpdate = (prevState,prevProps) => {
    if(prevState.todos !== this.state.todos){
      const temp = JSON.stringify(this.state.todos)
      localStorage.setItem('todos', temp);
    }
  }

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
