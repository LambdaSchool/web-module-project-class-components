import React from 'react';
// import ToDoList from '../src/components/ToDoList'
import TodoForm from '../src/components/TodoForm'

// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const notes = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { notes: notes }
    // console.log(this.state.notes) // shows Arr num, then if travered shows the 3 key value pairs.
  }

  addItem = (formStateEmptyString) => { // In class components arrow functions do not need "const"
    this.setState({
      notes: [...this.state.notes, {
        name: formStateEmptyString,
        id: Date.now(),
        purchased: false
      }]
    })
  }


  render() {
    return (
      <div>
        {/* <ToDoList notes={this.state.notes} /> */}
        <TodoForm state={this.state.notes} />
      </div>
    );
  }
}



