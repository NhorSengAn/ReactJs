import React, { useState } from "react";
import LinkPage from "../nav/link";
import "./index.css";
const HomeScreen = () => {
  const [name, setName] = useState("");
  const [arrName, setArr] = useState(["sok", "raksa"]);

  const handlAdd = () => {
    const tmp = [...arrName, name];
    console.log(tmp);
    setArr(tmp);
    setName("");
  };

  const handlChangeName = (event) => {
    setName(event.target.value);
  };
  return (
    <div>
      <div className="link-page">{LinkPage()}</div>
      <br />
      <div className="demo">demo state</div>
      <h1>Text : {name}</h1>
      <form>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={handlChangeName}
        />{" "}
        <br />
        <button type="button" onClick={handlAdd}>
          Add
        </button>
      </form>
      <br />
      <div className="arr_map">
        {arrName.map((data, index) => {
          return (
            <div key={index}>
              <h1>
                {index + 1}. {data}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
