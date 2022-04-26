import { useState } from "react";

const InputTodo = (props) => {
  const [ inputText, setInputText ] = useState({title:""});

  const handleChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    const {title} = inputText
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
     setInputText({
       title: "",
     });
    } else {
      alert("Please write item");
    }
  };
const { title } = inputText;
  return (
    <form onSubmit={() => handleSubmit} className="form-container">
      <input
        className="input-text"
        type="text"
        placeholder="Add todo ..."
        value={title}
        onChange={handleChange}
        name="title"
      />
      <button className="input-submit">Submit</button>
    </form>
  );
};

export default InputTodo;
