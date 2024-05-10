// Todo.jsx
import React from 'react';

function Todo(props) {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {props.task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
