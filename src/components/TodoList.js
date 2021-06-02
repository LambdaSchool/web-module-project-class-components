// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

import Task from './Todo'

const ToDoList = props => {
    return (
        <div className = 'task-list'>
            {props.tasks.map(task => (
                <Task key = {task.id} task = {task} onClick = {props.toggleCompleted}/>
            ))}
            <button className = 'clear'>
                Clear Completed Tasks
            </button>
        </div>
    )
}

export default ToDoList;