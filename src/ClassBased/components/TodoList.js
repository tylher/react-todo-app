import { Component } from "react";
import TodoItem from "../../FunctionBased/components/TodoItem";

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.onHandleChange}
            delTodoProps={this.props.onHandleDelete}
            updateTitleProps={this.props.onHandleUpdate}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
