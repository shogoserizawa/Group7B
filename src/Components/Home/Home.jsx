import React, { useState } from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import Todo from "../Todo/Todo";
import Event from "../Event/Event";
import "./Home.css";

function Home() {
  const [messages, setMessages] = useState([]);

  const addMessage = (text) => {
    setMessages((prevMessages) => [...prevMessages, text]);
  };

  const updateMessage = (index, isClickValue) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, i) =>
        i === index ? { ...msg, isClick: isClickValue } : msg
      )
    );
  };

  const addTask = (index) => {
    updateMessage(index, 1);
  };

  const addEvent = (index) => {
    updateMessage(index, 2);
  };

  const deleteEvent = (index) => {
    updateMessage(index, 0);
  };

  return (
    <div>
      <ChatRoom
        addtask={addTask}
        addevent={addEvent}
        messages={messages}
        addmessage={addMessage}
      />
      <Todo task={messages} delete={deleteEvent} />
      <Event event={messages} delete={deleteEvent} />
    </div>
  );
}

export default Home;
