import React from "react";
import LinkPage from "../nav/link";
import "./index.css";
import styles from "./homeScreen.module.css";
import ListPerson from "../../components/list/ListPerson";

const HomeScreen = () => {
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
        {arr_student.map((data, index) => (
          <div key={index}>
            <ListPerson
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
