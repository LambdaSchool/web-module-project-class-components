// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
 console.log(props.todo)
    return (
        <div>
            {props.todo.map((item) => (
                <Todo key={item.id} item={item} toggleTask={props.toggleTask} />
            ))}
            <button className="clear-btn">Clear Completed</button>
        </div>
    )
}
export default TodoList;