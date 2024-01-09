import React, { useState } from "react";
import styles from "./homeScreen.module.css";
import LinkPage from "../nav/link";

const HomeScreen = () => {
  const arr_person = [
    {
      id: 1001,
      name: "SengAn",
      gender: "male",
      is_check: false,
    },
    {
      id: 1002,
      name: "Taky",
      gender: "female",
      is_check: false,
    },
    {
      id: 1003,
      name: "An",
      gender: "male",
      is_check: false,
    },
    {
      id: 1004,
      name: "Seng",
      gender: "female",
      is_check: false,
    },
    {
      id: 1005,
      name: "SengAy",
      gender: "female",
      is_check: false,
    },
    {
      id: 1006,
      name: "Srey Leat",
      gender: "female",
      is_check: false,
    },
  ];

  const [listPerson, setListPerson] = useState(arr_person);
  const [arrCheck, setArrCheck] = useState([]);

  const handlDelete = (data) => {
    const removelistPerson = listPerson.filter((item) => item.id !== data.id);
    setListPerson(removelistPerson);
  };

  const handleSelectionDelete = () => {
    const id = listPerson;

    const updatedListPerson = listPerson.filter(
      (item) => !arrCheck.includes(item.id)
    );
    setListPerson(updatedListPerson);
    setArrCheck([]);
  };

  const handleCheck = (event, data) => {
    const check = event.target.checked;
    const id = data.id;

    setArrCheck((prevArrCheck) => {
      if (check) {
        return [...prevArrCheck, id];
      } else {
        return prevArrCheck.filter((item) => item !== id);
      }
    });
    console.log(check);
    console.log(id);
  };

  const handlEdit = () => {
    // Placeholder for edit functionality
  };

  return (
    <header>
      <div className="link-page">{LinkPage()}</div>
      <br />
      <h1>Person List: {listPerson.length}</h1>
      <button onClick={handleSelectionDelete}>Delete All</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th style={{ width: "15rem" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {listPerson.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.gender}</td>
              <td>
                <button onClick={() => handlDelete(data)}>Delete</button>
                <button onClick={handlEdit}>Edit</button>
                <input
                  onChange={(event) => handleCheck(event, data)}
                  type="checkbox"
                  checked={arrCheck.includes(data.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </header>
  );
};

export default HomeScreen;
