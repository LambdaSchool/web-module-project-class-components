// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    
    const handleClick = () => {
        props.clearClicked();
    }

    return (
        <div className = 'todo-list'>
            {props.todo.map(item => (
                <Todo key = {item.id} toggleItem = {props.toggleItem} item = {item}/>
            ))}
            
            <button onClick = {handleClick} className = 'clear-button'>DONE</button>
        </div>
    )
}

export default TodoList;