import React from 'react';
import './Todo.css';

function Todo(props) {
  // const {messages, setMessages} = useSharedState();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {props.task.filter(task=>task.isClick === 1).map((task, index) => (
          <li key={index}>{task.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
