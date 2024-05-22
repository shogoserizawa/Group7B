import React, { useState, useEffect, useRef } from "react";
import "./ChatRoom.css";

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
      console.log("WebSocket connected");
    };

    //websocketからメッセージを受信したときの動作。常に動いている。
    websocket.onmessage = (e) => {
      // <%>を境界に入れているのでそれを目印に送られた文字列を分割している
      const [sender, message, date, type] = e.data.split("<%>");
      const isClick = 0;
      const newMessage = { sender, message, date , type, isClick };

      // props.addmessageでHome.jsxのaddMessage関数にアクセス
      props.addmessage(newMessage);
    };

    return () => {
      websocket.close = () => {
        console.log("WebSocket connection closed");
      };
      websocket.removeEventListener("message", onmessage);
    };
  }, []);

  // todoフォームの送信ボタンが押されたときの処理
  const handleSubmit = (e) => {
    e.preventDefault();
    const combinedString = `${text}<%>${date}<%>0`;
    setText("")
    setDate("")
    //サーバに文字列送信
    socketRef.current.send(combinedString);
  };

  // eventフォームの送信ボタンが押されたときの処理
  const EventhandleSubmit = (e) => {
    e.preventDefault();
    const combinedString = `${text2}<%>${date2}<%>1`;
    setText2("")
    setDate2("")
    socketRef.current.send(combinedString);
  };

  //yyyy-mm-dd形式からmm-dd形式に変換する関数
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split("-");
    return `${parseInt(month, 10)}/${parseInt(day, 10)}`;
  };

  // chatのメッセージがクリックされたときの動作。主にisClickの値を変更している。
  const handleClick = (msg, index) => {
    if (msg.type === '0') {
      props.addtask(index);
    } else {
      props.addevent(index);
    }
  };

  return (
    <div>
      <h2>ChatRoom</h2>
      <div className="chatbox">
        {props.messages.map((msg, index) => (
          <button key={index} onClick={() => handleClick(msg, index)}>
            {msg.type === '0' ? '【Todo】 ' : '【Event】 '}{msg.message} {formatDate(msg.date)}
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
