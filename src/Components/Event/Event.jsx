import React from 'react';
import './Event.css';

function Event(props) {
  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {/* filterを使うことでisClickが2のもののみを表示している。props.eventで親から渡されたmessagesを参照 */}
        {props.event.filter(event=>event.isClick === 2).map((event, index) => (
          // task.messageでオブジェクトの中のメッセージを表示。日時を表示したい場合はtask.date
          <li key={index}>{event.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
