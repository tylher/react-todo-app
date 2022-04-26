import { useEffect, useState } from "react";
import Header from "../../ClassBased/components/Header";
import InputTodo from "./InputTodo";
import TodoList from "../../ClassBased/components/TodoList";
import { v4 as uuidv4 } from "uuid";

const TodoContainer = () => {
  const getInitialTodos = () => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos || [];
  };
  const [todos, setTodos] = useState(getInitialTodos());

  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos(
      todos.filter((todo) => todo.id !== id),
    );
  };

  const addTodo = (title) => {
    setTodos([
      ...this.state.todos,
      { id: uuidv4(), title: title, completed: false },
    ]);
  };

  const setUpdateTitle = (UpdatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (id === todo.id) {
          todo.title = UpdatedTitle;
        }
        return todo;
      }),
    });
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoProps={addTodo} />
        <TodoList
          todos={todos}
          onHandleChange={handleChange}
          onHandleDelete={delTodo}
          onHandleUpdate={setUpdateTitle}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
