import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Edit from "@material-ui/icons/Edit";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardImg, Col, Button } from "react-bootstrap";
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <AccountCircle className="circleLogo" />
          <h2>{user && user.name}</h2>
        </div>
      </div>

      <div className="ud-container">
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
              <div>
                <Button
                  variant="success"
                  onClick={handleSubmit}
                  style={{ marginRight: "25px" }}
                >
                  Save
                </Button>
                <Button variant="danger" onClick={handleEdit}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <div className="subContentDiv">
              <p>User name: {user && user.name}</p>
              <p>Age: {user && user.age}</p>
            </div>
          )}
        </div>
        <div className="rightContent">
          <Edit className="icons" onClick={handleEdit}></Edit>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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

        <Button variant="secondary" size="lg" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  );
}
