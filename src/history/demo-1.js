import { Link, useNavigate } from "react-router-dom";
import LinkPage from "../nav/link";
import styles from "./homeScreen.module.css";
import React from "react";

const HomeScreen = () => {
  const navigator = useNavigate();
  const handleClick = () => {
    navigator("/student");
  };
  const [active, setActive] = React.useState(true);
  const handleClickChange = () => {
    setActive(!active);
  };
  return (
    <div>
      <div className="link-page">{LinkPage()}</div>

      <h1 className={active ? styles.bg1 : styles.bg2}>HomeScreen</h1>
      <button onClick={handleClickChange}>ChangeColor</button>
      <button onClick={handleClick}>Link Page</button>
      <Link to="/about">
        <button>
          <span>Click me</span>
        </button>
      </Link>
    </div>
  );
};

export default HomeScreen;
