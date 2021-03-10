import React from 'react';

class App extends React.Component {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  //   this.state={
  //     todos: todos
  //   }
  // }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <input type="text" placeholder="Add todo item"></input>
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
