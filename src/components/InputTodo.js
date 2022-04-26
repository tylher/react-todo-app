import { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  handleChange = (e) => {
    this.setState({ title: e.target.value });
  };
  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add todo ..."
          value={this.state.title}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default InputTodo;
