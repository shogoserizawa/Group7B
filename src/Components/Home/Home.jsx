import React, { useState } from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import Todo from "../Todo/Todo";

function Home() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    setTasks(prevTasks => [...prevTasks, text])
  }

  return (
    <div>
      <ChatRoom addtask = {addTask}/>
      <Todo task = {tasks}/>
      <div>"hello"</div>
    </div>
  );
}

export default Home;
