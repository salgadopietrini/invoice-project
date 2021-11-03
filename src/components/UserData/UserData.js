import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Edit from "@material-ui/icons/Edit";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserData.css";
export default function UserData() {
  const { aunt, userId } = useContext(Context);
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const [userEdit, setUserEdit] = useState({
    age: "",
    password: "",
    userName: "",
  });

  if (aunt) {
  } else {
    window.location.href = "./login";
  }
  const handleLogout = () => {
    window.location.href = "./login";
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/get/${userId}`)
      .then((response) => setUser(response.data))
      .catch((err) => console.log(err));
  }, [userId, user]);

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleChange = (event) => {
    setUserEdit((prevValue) => ({
      ...prevValue,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = () => {
    let _data = {
      age: userEdit.age,
      password: userEdit.password,
      userName: userEdit.userName,
    };

    fetch(`http://localhost:8080/put-edit-user/${userId}`, {
      method: "PUT",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    }).then((response) => console.log(response));
    setEdit(!edit);
  };

  return (
    <div>
      <Link to={"/"}>
        <Dashboard className="dashboard" />
      </Link>
      <center>
        <div>
          <AccountCircle className="circleLogo" />
          <h2>{user && user.name}</h2>
        </div>
      </center>

      <div className="container">
        <div className="rightContent">
          <Edit className="icons" onClick={handleEdit}></Edit>
        </div>
        <div className="contentDiv">
          <h4>User Info</h4>
          {edit ? (
            <div className="subContentDiv">
              <p>
                New name:{" "}
                <input
                  onChange={handleChange}
                  name="userName"
                  value={userEdit.userName}
                />
              </p>
              <p>
                New age:{" "}
                <input
                  onChange={handleChange}
                  name="age"
                  value={userEdit.age}
                />
              </p>
              <p>
                New password:{" "}
                <input
                  onChange={handleChange}
                  name="password"
                  value={userEdit.password}
                />
              </p>
              <button onClick={handleSubmit}>Save</button>
              <button onClick={handleEdit}>Cancel</button>
            </div>
          ) : (
            <div className="subContentDiv">
              <p>User name: {user && user.name}</p>
              <p>Age: {user && user.age}</p>
            </div>
          )}
        </div>
      </div>

      <center>
        <div className="container2">
          <div className="rightContent">
            <Link to={"/ListInvoice"}>
              <KeyboardArrowRight className="icons2"></KeyboardArrowRight>
            </Link>
          </div>
          <br></br>
          <div className="contentDiv2">
            <h4>{user && user.name}’s Invoices</h4>
          </div>
        </div>

        <button
          style={{
            color: "#040741",
            backgroundColor: "white",
            width: "200px",
            borderRadius: "25px",
          }}
          onClick={handleLogout}
        >
          Log Out
        </button>
      </center>
    </div>
  );
}
