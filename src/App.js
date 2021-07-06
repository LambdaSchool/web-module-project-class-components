import React from 'react';
import ToDoList from "./components/TodoList";
import TodoForm from "./components/TodoForm"

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false,
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false,
        },
      ],
    };
  }

  addItem = (title) => {
    const newToDo = {
      task: title,
      id: new Date(),
      completed: false,
    };
    const newToDos = [...this.state.todos, newToDo];

    this.setState({
      todos: newToDos,
    });
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      }),
    });
  };

  clearDone = () => {
    const newToDos = this.state.todos.filter(todo => {
      return (todo.completed === false);
    });

    this.setState({
      todos: newToDos,
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo pp!</h2>
        <ToDoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
        />
        <TodoForm addItem={this.addItem} clearDone={this.clearDone} />
      </div>
    );
  }
}

export default App;
