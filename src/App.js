import React from 'react';
import TodoForm from './components/TodoForm'


const toDos = [
  {
    task:'take out trash',
    id:1,
    completed:false
  },
  {
    task:'bake bread',
    id:2,
    completed:false
  },
  {
    task:'do laundry',
    id:3,
    completed: false
  }
]



class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      toDos: toDos
    }
  }
  addItem = task => {
    const newItem = {
      task: task,
      id: Date.now(),
      completed: false
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List MVP</h1>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
