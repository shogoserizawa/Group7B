import React, { useState } from "react";
import "./username.css";

const Username = (props) => {
  const [username, setUsername] = useState("");
  const [ipAddress, setIpAddress] = useState("localhost");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setIsValid(value.length >= 1 && value.length <= 7);
  };

  const handleChangeIp = (e) => {
    const value = e.target.value;
    setIpAddress(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(username,ipAddress);
  };

  return (
    <div className="container">
      <div className="box">
        <div>▶︎ 7文字以下でユーザ名を入力してください</div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username:
              <input type="text" value={username} onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              IPアドレス:
              <input type="text" value={ipAddress} onChange={handleChangeIp} />
            </label>
          </div>
          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Username;
