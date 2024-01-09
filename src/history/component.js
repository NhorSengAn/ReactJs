import React from "react";
import LinkPage from "../nav/link";
import "./index.css";
import styles from "./homeScreen.module.css";

const HomeScreen = () => {
  const MyComponent = () => {
    return <h2>Hello Mom</h2>;
  };

  const Person_info = ({ username, lastname, gender, grade }) => {
    return (
      <div>
        <div className={styles.image} />
        <h1 className={styles.item_perosn}>
          <div>
            {username} - {lastname}
          </div>
          <div> - {gender}</div>
          <div> - {grade}</div>
          <br />
        </h1>
      </div>
    );
  };

  const arr_student = [
    {
      id: 1001,
      username: "SengAn",
      lastname: "Lastname",
      gender: "male",
      grade: "A",
    },
    {
      id: 1002,
      username: "SengAn",
      lastname: "jaksjd",
      gender: "male",
      grade: "A",
    },
    {
      id: 1003,
      username: "An",
      lastname: "Lastssdasdlkjkhjadsame",
      gender: "male",
      grade: "A",
    },
    {
      id: 1004,
      username: "Killing me",
      lastname: "tname",
      gender: "male",
      grade: "A",
    },
    // Add other student data
  ];

  return (
    <div>
      <div className={styles.bg1}>
        <MyComponent />
        {arr_student.map((data, index) => (
          <div key={index}>
            <Person_info
              firstname={data.username}
              lastname={data.lastname}
              gender={data.gender}
              grade={data.grade}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
