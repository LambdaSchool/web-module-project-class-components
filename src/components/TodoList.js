import React from "react";
import useStyles from "../stylesheets/useStyles";
import Todo from "./Todo";

const TodoList = (props) => {
  const classes = useStyles();

  console.log("Received props from TodoList", props);
  console.log(classes);

  return (
    <div className='d-flex flex-column justify-content-start'>
      <div className="d-flex justify-content-start" style={{justifySelf: 'start'}}>
        <Todo props={props} />
      </div>
      );
    </div>
  );
};

export default TodoList;
