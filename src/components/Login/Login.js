import "./Login.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import axios from "axios";
import { Context } from "../../App";

export default function Login() {
  const { aunt, setAunt } = useContext(Context);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/ae918de4-a89f-4b95-abd7-f674e511e59c")
      .then((response) =>
        setAunt(
          response.data.username === user && response.data.password === pass
            ? true
            : false
        )
      )
      .catch((err) => console.log(err));
  }, [user, pass, setAunt]);

  const saveUsername = (event) => {
    setUser(event.target.value);
  };

  const savePassword = (event) => {
    setPass(event.target.value);
  };

  const submitUser = () => {};

  return (
    <div>
      <center>
        <br></br>
        <Link to={"/"}>
          <Dashboard className="dashboard" />
        </Link>
        <br></br>
        <h1>Invoice Project</h1>
        <div>
          <br></br>
          <br></br>
          <input
            className="input"
            placeholder="Username"
            onChange={saveUsername}
            value={user}
          />
          <br></br>
          <br></br>
          <input
            type="password"
            className="input"
            placeholder="Password"
            onChange={savePassword}
            value={pass}
          />
          <br></br>
          <br></br>
          <Link to={aunt ? "/" : "/login"}>
            <button className="button" onClick={submitUser}>
              Submit
            </button>
          </Link>
        </div>
      </center>
    </div>
  );
}
