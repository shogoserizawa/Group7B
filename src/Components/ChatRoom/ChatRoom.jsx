import React, { useState, useEffect, useRef } from "react";
import "./ChatRoom.css";

const ChatRoom = (props) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [text2, setText2] = useState("");
  const [date2, setDate2] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    const websocket = new WebSocket("ws://localhost:60000");
    socketRef.current = websocket;

    websocket.onopen = () => {
      console.log("WebSocket connected");
    };

    websocket.onmessage = (e) => {
      const [sender, message, date, type] = e.data.split("<%>");
      const isClick = 0;
      const newMessage = { sender, message, date , type, isClick };
      props.addmessage(newMessage);
    };

    return () => {
      websocket.close = () => {
        console.log("WebSocket connection closed");
      };
      websocket.removeEventListener("message", onmessage);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedString = `${text}<%>${date}<%>0`;
    setText("")
    setDate("")
    socketRef.current.send(combinedString);
  };

  const EventhandleSubmit = (e) => {
    e.preventDefault();
    const combinedString = `${text2}<%>${date2}<%>1`;
    setText2("")
    setDate2("")
    socketRef.current.send(combinedString);
  };

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${parseInt(month, 10)}/${parseInt(day, 10)}`;
  };

  const handleClick = (msg, index) => {
    if (msg.type === '0') {
      props.addtask(index);
    } else {
      props.addevent(index);
    }
  };

  return (
    <div>
      <div className="chatbox">
        {props.messages.map((msg, index) => (
          <button key={index} onClick={() => handleClick(msg, index)}>
            {msg.message} {formatDate(msg.date)}
          </button>
        ))}
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-item">Todo</div>
        <div className="form-item">
          <label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </label>
        </div>
        <div className="form-item">
          <label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </div>
        <div className="form-item">
          <button type="submit">送信</button>
        </div>
      </form>

      <form className="form-container" onSubmit={EventhandleSubmit}>
        <div className="form-item">Event</div>
        <div className="form-item">
          <label>
            <input
              type="text"
              value={text2}
              onChange={(e) => setText2(e.target.value)}
            />
          </label>
        </div>
        <div className="form-item">
          <label>
            <input
              type="date"
              value={date2}
              onChange={(e) => setDate2(e.target.value)}
            />
          </label>
        </div>
        <div className="form-item">
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
};

export default ChatRoom;
