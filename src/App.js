import React, { useState } from "react";
import Home from "./Components/Home/Home";
import Username from "./Components/Username/Username";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  const loginHandler = (text) => {
    setName(text);
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn && <Home name = {name}/>}
      {!isLoggedIn && <Username onLogin = {loginHandler}/>}
    </div>
  );
}

export default App;
