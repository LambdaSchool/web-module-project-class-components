import React from 'react'

const Todo = props => {
    return (
        <div className = {`obj${props.obj.completed ? 'completed' : ''}`}
        onClick={() => props.toggleDone(props.obj.id)}>
            <p>{props.obj.name}</p>
            </div>
    );
};

export default Todo;