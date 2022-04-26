import { Component } from "react";
import Header from "./Header";
import TodoList from "./TodoList";

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true,
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false,
      },
    ],
    };
    
   handleChange = (id) => {
        console.log('cliked',id)
    }
  render() {
    return (
        <div>
        <Header/>
            <TodoList todos={this.state.todos} onHandleChange={this.handleChange}/>
      </div>
    );
  }
}

export default TodoContainer;
