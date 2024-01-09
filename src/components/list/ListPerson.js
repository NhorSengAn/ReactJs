import React, { useState } from "react";
import styles from "./ListPerson.module.css";
import Botton from "../button/Button";
const ListPerson = ({ username, lastname, gender, grade }) => {
  const [email, setEmial] = useState("No details");
  const handViewMore = (params) => {
    console.log(params);
  };

  const handlChange = (event) => {
    setEmial(event.target.value);
  };
  const handlSub = () => {
    alert(email);
    setEmial("");
  };

  return (
    <div>
      <h1>This is: {email}</h1>
      <div className={styles.item_perosn}>
        <div className={styles.image}></div>
        <div style={{ paddingLeft: "15px" }}>
          <div className="txt-title">
            {username}-{lastname}-{gender}
          </div>

          <div>{grade}</div>
          <label style={{ color: "black" }}> Email</label>

          <input type="text" placeholder="input emial" onChange={handlChange} />
          <button onClick={handlSub}>Edit</button>
          <Botton
            title="hit my ass"
            bgColor="blue"
            textColor="red"
            onClick={handlSub} // defualt funciton
            // onClick={()=>handViewMore(1234)} overide parameter
          />

          <Botton
            title="Click me"
            bgColor="blue"
            textColor="red"
            onClick={handViewMore}
            // onClick={()=>handViewMore(1234)} overide parameter
          />
        </div>
      </div>
    </div>
  );
};

export default ListPerson;
