import React, { useState } from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import Todo from "../Todo/Todo";
import Event from "../Event/Event";
import './Home.css';

function Home() {
  const [tasks, setTasks] = useState([]);
  const [events, setEvents] = useState([]);

  const addTask = (text) => {
    setTasks((prevTasks) => [...prevTasks, text])
  }

  const addEvent = (text) => {
    setEvents((prevEvents) => [...prevEvents, text])
  }

  return (
    <div>
      <ChatRoom addtask = {addTask} addevent = {addEvent}/>
      <Todo task = {tasks}/>
      <Event event = {events}/>
    </div>
  );
}

export default Home;
