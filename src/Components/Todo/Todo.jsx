import React from 'react';
import './Todo.css';

function Todo(props) {
  // const {messages, setMessages} = useSharedState();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {/* filterを使うことでisClickが1のもののみを表示している。props.todoで親から渡されたmessagesを参照 */}
        {props.task.filter(task=>task.isClick === 1).map((task, index) => (
          // task.messageでオブジェクトの中のメッセージを表示。日時を表示したい場合はtask.date
          <li key={index}>{task.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
