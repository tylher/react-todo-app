/* eslint-disable react/prop-types */
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

export default TodoList;
