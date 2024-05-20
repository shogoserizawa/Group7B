import React from 'react';
import './Event.css';

function Event(props) {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {props.event.filter(event=>event.isClick === 2).map((event, index) => (
          <li key={index}>{event.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
