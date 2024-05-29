import React, { useState } from "react";
import "./Username.css";

const Username = (props) => {
  const [username, setUsername] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    setIsValid(value.length >= 1 && value.length <= 7);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onLogin(username);
    // if (isValid) {
    //   alert(`Username submitted: ${username}`);
    // }
  };

  return (
    <div className="container">
      <div>7文字以下でユーザ名を入力してください</div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={handleChange} />
          </label>
        </div>
        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Username;
