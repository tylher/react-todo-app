import PropTypes from 'prop-types';
import TodoItem from '../../FunctionBased/components/TodoItem';

const TodoList = (props) => {
  const {
    todos, onHandleChange, onHandleDelete, onHandleUpdate,
  } = props;
  return (
    <ul>
      {todos.map((todo) => {
        const { id } = todo;
        return (
          <TodoItem
            key={id}
            todo={todo}
            handleChangeProps={onHandleChange}
            delTodoProps={onHandleDelete}
            updateTitleProps={onHandleUpdate}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onHandleChange: PropTypes.func.isRequired,
  onHandleDelete: PropTypes.func.isRequired,
  onHandleUpdate: PropTypes.func.isRequired,
};

export default TodoList;
