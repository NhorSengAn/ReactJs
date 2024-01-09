import "./theme/index.css";
import React from "react";

function App() {
  // Function to render buttons for each item
  function btnEdit(data) {
    return (
      <div>
        <button onClick={() => editEvent(data)}>Edit</button>
        <button onClick={() => removeEvent(data)}>Remove</button>
      </div>
    );
  }
  // edit event when i click on button edit
  function editEvent(data) {
    console.log(data);
    alert(data.id);
  }

  function removeEvent(data) {
    console.log(data);
  }
  // Render data
  const arr_student = [
    {
      id: 1001,
      name: "SengAn",
      gender: "male",
      grade: "A",
    },
    {
      id: 1002,
      name: "Taky",
      gender: "female",
      grade: "B",
    },
    {
      id: 1003,
      name: "An",
      gender: "male",
      grade: "E",
    },
    {
      id: 1004,
      name: "Seng",
      gender: "female",
      grade: "C",
    },
    {
      id: 1005,
      name: "SengAy",
      gender: "female",
      grade: "C",
    },
  ];

  return (
    <section>
      <div className="txt-title">
        <h1>This is my render data</h1>
        <input type="txt" className="btn-search" id="txt-search" />
        <button className="btn-add" id="txt-add">
          Apply New
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Grade</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {arr_student.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.gender}</td>
              <td>{data.grade}</td>
              <td style={{ width: "15rem" }}>{btnEdit(data)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
