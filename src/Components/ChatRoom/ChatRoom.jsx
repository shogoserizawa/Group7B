import React, { useState, useEffect, useRef } from 'react';

const ChatRoom = (props) => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const socketRef = useRef();

  useEffect (() => {
    const websocket = new WebSocket('ws://localhost:60000')
    socketRef.current = websocket

    websocket.onopen = () => {
      console.log("WebSocket connected")
    }

    websocket.onmessage = (e) => {
      setMessages(prevMessages => [...prevMessages, e.data]);
    };

    return () => {
      websocket.close = () => {
        console.log("WebSocket connection closed");
      }
      websocket.removeEventListener('message', onmessage)
    }

  },[])

  const sendMessage = () => {
    socketRef.current.send(messageInput);
    setMessageInput('');
  };

  return (
    <div>
      <div style={{ width: "500px", height: "200px", overflowY: "auto", border: "1px solid #333" }}>
        {messages.map((msg, index) => (
          <button key={index} onClick={() => props.addtask(msg)}>{msg}</button>
        ))}
      </div>
      <input 
        type="text" 
        size="80" 
        value={messageInput} 
        onChange={(e) => setMessageInput(e.target.value)} 
      />
      <input 
        type="button" 
        value="送信" 
        onClick={sendMessage} 
      />
    </div>
  );
}

export default ChatRoom;
