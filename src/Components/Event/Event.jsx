import React from 'react';
import './Event.css';

function Event(props) {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {props.event.map((task, index) => (
          <li key={index}>{task.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
