import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.css';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);
  const {
    todo, handleChangeProps, delTodoProps, updateTitleProps,
  } = props;

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdateDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };
  const { completed, title, id } = todo;

  const editMode = {};
  const viewMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }
  return (
    <li className={styles.item}>
      <div style={viewMode} onDoubleClick={handleEditing}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <span style={completed ? completedStyle : null}>{title}</span>
        <button type="button" onClick={() => delTodoProps(id)}>delete</button>
      </div>

      <input
        type="text"
        value={title}
        style={editMode}
        className={styles.textInput}
        onChange={(e) => updateTitleProps(e.target.value, id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  delTodoProps: PropTypes.func.isRequired,
  updateTitleProps: PropTypes.func.isRequired,
};

export default TodoItem;
