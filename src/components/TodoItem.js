import { Component } from "react"
import styles from "./TodoItem.module.css"

class TodoItem extends Component{
  state = {
    editing: false,
  }

  completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  
  handleEditing = () => {
    this.setState({ editing: true ,});
  }
  render() {
    const { completed, title, id, handleChangeProps, delTodoProps } = this.props.todo

   let editMode = {}
   let viewMode = {}

    if (this.state.editing) {
      viewMode.display = 'none'
    }
    else {
      editMode.display = 'none'
    }
    return (
      
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            className={styles.checkbox}
            type="checkbox"
            checked={completed}
            onChange={() => handleChangeProps(id)}
          />
          <span style={completed ? this.completedStyle : null}>{title}</span>
          <button onClick={() => delTodoProps(id)}>delete</button>
        </div>

        <input type="text" value={title} style={editMode} className={ styles.textInput}/>
      </li>
    );
}
  
};

export default TodoItem;
