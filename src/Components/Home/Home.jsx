import React, { useState } from "react";
import ChatRoom from "../ChatRoom/ChatRoom";
import Todo from "../Todo/Todo";
import Event from "../Event/Event";
import "./Home.css";
import banner from "../images/banner.png"; // 画像をインポート

function Home(props) {
  // 下の配列に送られてきたメッセージがすべて入っている。要素は{ sender, message, date , type, isClick }の形。
  // messageが本文、dateが日時、typeは'0'ならtodo用、'1'(string型)ならEvent用、
  // isClickはchatroomでクリックされてなければ0、todo用でクリックされていれば1、event用でクリックされていれば2(int型)
  const [messages, setMessages] = useState([]);

  // messagesに新しいメッセージを追加する関数
  const addMessage = (text) => {
    setMessages((prevMessages) => [...prevMessages, text]);
  };

  // messagesのindex(ポインタのようなもの)を受け取り、その要素のisClickの値を変える関数
  const updateMessage = (index, isClickValue) => {
    setMessages((prevMessages) =>
      prevMessages.map((msg, i) =>
        i === index ? { ...msg, isClick: isClickValue } : msg
      )
    );
  };

  // todo用のメッセージがクリックされたときにそのオブジェクトのisClickを1にする関数
  const addTask = (index) => {
    updateMessage(index, 1);
  };

  // Event用のメッセージがクリックされたときにそのオブジェクトのisClickを2にする関数
  const addEvent = (index) => {
    updateMessage(index, 2);
  };

  // todo, Eventリストから削除するための関数。isClickを0にすることで削除
  const deleteEvent = (id) => {
    setMessages((prevMessages) =>
      prevMessages.map((message) =>
        message.id === id ? { ...message, isClick: 0 } : message
      )
    );
  };

  return (
    <div className="App">
      <div className="common-container">
        <div className="top-section">
          <div className="chat-room">
            {/* Chatroomコンポーネントを開く際に、addTask関数をaddtaskという名前で、
              messages配列をmessagesという名前で渡している。他も同じ。子コンポーネントからのアクセスは props.関数名 */}
            <ChatRoom
              name={props.name}
              ip={props.ip}
              addtask={addTask}
              addevent={addEvent}
              messages={messages}
              addmessage={addMessage}
            />
            <img src={banner} alt="Banner" className="chatroom-banner" />
          </div>
          <div className="todo-list">
            <Todo task={messages} delete={deleteEvent} />
          </div>
          <div className="event-list">
            <Event event={messages} delete={deleteEvent} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
