import React from 'react';
import './Todo.css';

function Todo(props) {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {props.task.map((task, index) => (
          <li key={index}>{task.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
