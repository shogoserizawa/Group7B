import React from 'react';
import './Event.css';

function Event(props) {
  const handleCheckboxChange = (index) => {
    props.delete(index);
  };

  return (
    <div className="event-container">
      <h2>Event List</h2>
      <ul>
        {/* filterを使うことでisClickが2のもののみを表示している。props.eventで親から渡されたmessagesを参照 */}
        {props.event.filter(event=>event.isClick === 2).map((event, index) => (
          // task.messageでオブジェクトの中のメッセージを表示。日時を表示したい場合はtask.date
          <li key={event.id}>
            <label>
              <input type="checkbox" onChange={() => handleCheckboxChange(event.id)}/> {/*チェックボックス追加*/}
              {event.date.slice(-5)} | {event.message}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
