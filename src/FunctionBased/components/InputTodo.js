import { useState } from 'react';
import PropTypes from 'prop-types';

const InputTodo = (props) => {
  const { addTodoProps } = props;
  const [inputText, setInputText] = useState({ title: '' });

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { title } = inputText;
    e.preventDefault();
    if (title.trim()) {
      addTodoProps(title);
      setInputText({
        title: '',
      });
    }
  };
  const { title } = inputText;
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        placeholder="Add todo ..."
        value={title}
        onChange={handleChange}
        name="title"
      />
      <button type="submit" className="input-submit">
        Submit
      </button>
    </form>
  );
};

InputTodo.propTypes = {
  addTodoProps: PropTypes.func.isRequired,
};

export default InputTodo;
