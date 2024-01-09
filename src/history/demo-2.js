import React, { useState } from "react";
import { Link } from "react-router-dom";
const HomeScreen = () => {
  const [count, setCount] = useState(0);
  const [countStyle, setCountStyle] = useState("");

  const handlDecrease = () => {
    setCount(count - 1);
    if (count + 1 > 0) {
      setCountStyle("red");
    }
  };

  const handlRest = () => {
    setCount(0);
    setCountStyle("black");
  };

  const handlIncrease = () => {
    setCount(count + 1);

    if (count + 1 > 0) {
      setCountStyle("green");
    }
  };

  return (
    <div>
      <div className="link-page">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
        <Link to="/student">
          <span>Student</span>
        </Link>
        <Link to="/login">
          <span>Login</span>
        </Link>
      </div>
      
      <div style={{ marginLeft: "9rem" }}>
        You Click
        <h1 style={{ padding: "10px", color: countStyle }}>{count}</h1>
        time
      </div>

      <button onClick={handlDecrease}>Decrease</button>
      <button onClick={handlRest}>Reset</button>
      <button onClick={handlIncrease}>Increase</button>
    </div>
  );
};

export default HomeScreen;
