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
        {/* ボタンをクリックすると、そのテキストが配列に追加される */}
        <button onClick={() => addTask("Task 1")}>Add Task 1</button>
      <button onClick={() => addTask("Task 2")}>Add Task 2</button>
      <button onClick={() => addTask("Task 3")}>Add Task 3</button>
    </div>
  );
}

export default Home;
