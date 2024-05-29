import React from "react";
import "./Todo.css";

function Todo(props) {
  // const {messages, setMessages} = useSharedState();

  //yyyy-mm-dd形式からmm-dd形式に変換する関数
  const formatDate = (dateString) => {
    const [month, day] = dateString.split("-");
    return `${parseInt(month, 10)}/${parseInt(day, 10)}`;
  };

  return (
    <div className="todo-container">
      <h2>TODO LIST</h2>
      <ul>
        {/* filterを使うことでisClickが1のもののみを表示している。props.todoで親から渡されたmessagesを参照 */}
        {props.task
          .filter((task) => task.isClick === 1)
          .map((task, index) => (
            // task.messageでオブジェクトの中のメッセージを表示。日時を表示したい場合はtask.date
            <li key={task.id}>
              <label>
                <input type="checkbox" onChange={() => props.delete(task.id)} />
                {formatDate(task.date.slice(-5))} | {task.message}
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Todo;
