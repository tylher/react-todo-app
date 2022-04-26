import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
  // state = {
  //   editing: false,
  // }
  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }

  const editMode = {}
  const viewMode = {}
  return (
    
      <li className={styles.item}>
      <div style={viewMode}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={props.todo.completed}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      <span style={props.todo.completed ? completedStyle : null}>{props.todo.title}</span>
        <button onClick={() => props.delTodoProps(props.todo.id)}>delete</button>
      </div>

      <input type="text" style={editMode}/>
      </li>
    
  );
};

export default TodoItem;
