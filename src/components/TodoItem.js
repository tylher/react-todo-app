import { Component } from "react";
import styles from "./TodoItem.module.css";

class TodoItem extends Component {
  state = {
    editing: false,
  };

  completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  handleEditing = () => {
    this.setState({ editing: true });
  };

  handleUpdateDone = (event) => {
    if (event.key === "Enter") {
      this.setState({ editing: false });
    }
  }
  render() {
    // const { completed, title, id, handleChangeProps, delTodoProps } =
    //   this.props.todo;

    let editMode = {};
    let viewMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }
    return (
      <li className={styles.item}>
      <div style={viewMode}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={this.props.todo.completed}
        onChange={() => this.props.handleChangeProps(this.props.todo.id)}
      />
      <span style={this.props.todo.completed ? this.completedStyle : null}>{this.props.todo.title}</span>
        <button onClick={() => this.props.delTodoProps(this.props.todo.id)}>delete</button>
      </div>

        <input
          type="text"
          value={this.props.todo.title}
          style={editMode}
          className={styles.textInput}
          onChange={(e) => this.props.updateTitleProps(e.target.value, this.props.todo.id)}
          onKeyDown={this.handleUpdateDone}
        />
      </li>
    );
  }
}

export default TodoItem;
