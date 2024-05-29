import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Username from "./Components/Username/Username";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [ip, setIp] = useState("");

  const loginHandler = (text,address) => {
    setName(text);
    setIp(address);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn && <Home name = {name} ip = {ip}/>}
      {!isLoggedIn && <Username onLogin = {loginHandler}/>}
    </div>
  );
}

export default App;
