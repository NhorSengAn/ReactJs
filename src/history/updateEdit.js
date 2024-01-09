import React, { useState } from "react";
import LinkPage from "../nav/link";
import "./index.css";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [arrName, setArrName] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handlAdd = () => {
    if (selectedItem) {
      // If there is a selected item, update the array by replacing the selected item
      const updatedArrName = arrName.map((item) =>
        item === selectedItem ? { name, address } : item
      );
      setArrName(updatedArrName);
      console.log(updatedArrName);
      setSelectedItem(null);
    } else {
      // If there is no selected item, add a new item to the array
      const tmp = [...arrName, { name, address }];
      setArrName(tmp);
    }
    -(
      // Reset input fields
      setName("")
    );
    setAddress("");
  };

  // useState name, setName to handle event onChnage
  const handlChangeName = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "address") {
      setAddress(value);
    }
  };
  const handlDelete = (data) => {
    const updatedArrName = arrName.filter((item) => item !== data);
    setArrName(updatedArrName);
  };

  return (
    <div>
      <div className="link-page">{LinkPage()}</div>
      <br />
      <div className="demo">demo state</div>

      <h1>Name : {name}</h1>
      <h1>Address: {address}</h1>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name"
          onChange={handlChangeName}
        />
        <input
          type="text"
          name="address"
          value={address}
          placeholder="address"
          onChange={handlChangeName}
        />{" "}
        <br />
        <button type="button" onClick={handlAdd}>
          Add
        </button>
      </form>
      <br />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {arrName.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.address}</td>
              <td style={{ width: "15rem" }}>
                <button type="button" onClick={() => handlDelete(data)}>
                  Remove
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedItem(data);
                    setName(data.name);
                    setAddress(data.address);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeScreen;
