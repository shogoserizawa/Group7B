import React, { useState, useEffect, useRef } from "react";
import "./ChatRoom.css";
import banner from "../images/banner.png"; // 画像をインポート

const ChatRoom = (props) => {
  // 入力フォーム用の変数
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const [text2, setText2] = useState("");
  const [date2, setDate2] = useState("");

  // ソケット用の変数
  const socketRef = useRef();

  // レンダリング時に一度だけ実行する関数。ソケット関連
  useEffect(() => {
    //websocketに接続
    const websocket = new WebSocket("ws://localhost:60000");
    socketRef.current = websocket;

    //websocketが開いたときの動作
    websocket.onopen = () => {
      const nameString = `<%>${props.name}`;
      socketRef.current.send(nameString);
    };

    //websocketからメッセージを受信したときの動作。常に動いている。
    websocket.onmessage = (e) => {
      // <%>を境界に入れているのでそれを目印に送られた文字列を分割している
      const [sender, message, date, type] = e.data.split("<%>");
      const isClick = 0;
      const newMessage = {
        sender: sender,
        message: message,
        date: date,
        type: type,
        isClick: isClick,
        id: Math.random().toString(),
      };
      // props.addmessageでHome.jsxのaddMessage関数にアクセス
      props.addmessage(newMessage);
    };

    return () => {
      websocket.close();
    };
  }, []);

  // todoフォームの送信ボタンが押されたときの処理
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "" || date.trim() === "") return;

    const newMessage = {
      sender: "aaaaaaaaaa",
      message: text,
      date: date,
      type: "0",
      isClick: 0,
      id: Math.random().toString(),
    };
    props.addmessage(newMessage);

    const combinedString = `${text}<%>${date}<%>0`;
    setText("");
    setDate("");
    //サーバに文字列送信
    socketRef.current.send(combinedString);
  };

  // eventフォームの送信ボタンが押されたときの処理
  const EventhandleSubmit = (e) => {
    e.preventDefault();
    if (text2.trim() === "" || date2.trim() === "") return;

    const newMessage = {
      sender: "aaaaaaaaaa",
      message: text2,
      date: date2,
      type: "1",
      isClick: 0,
      id: Math.random().toString(),
    };
    props.addmessage(newMessage);

    const combinedString = `${text2}<%>${date2}<%>1`;
    setText2("");
    setDate2("");
    socketRef.current.send(combinedString);
  };

  //yyyy-mm-dd形式からmm-dd形式に変換する関数
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${parseInt(month, 10)}/${parseInt(day, 10)}`;
  };

  // chatのメッセージがクリックされたときの動作。主にisClickの値を変更している。
  const handleClick = (msg, index) => {
    if (msg.type === "0") {
      props.addtask(index);
    } else {
      props.addevent(index);
    }
  };

  return (
    <div className="chatroom-container">
      {/* <img src={banner} alt="Banner" className="chatroom-banner" /> */}
      <h1 className="chatroom-title">CHAT ROOM</h1>
      <div className="chatbox">
        {props.messages.map((msg, index) => (
          <button key={msg.id} onClick={() => handleClick(msg, index)}>
            <span>{msg.message}</span> <span>{formatDate(msg.date)}</span>
          </button>
        ))}
      </div>

      <div className="todo-event-form">
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
    </div>
  );
};

export default ChatRoom;
