import "./Login.css";
import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import { Button, Alert, CloseButton } from "react-bootstrap";
import { Context } from "../../App";

export default function Login() {
  const { aunt, setAunt, setUserId } = useContext(Context);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [alert, setAlert] = useState("");

  useEffect(() => {
    let _data = {
      password: pass,
      userName: user,
    };

    fetch("http://localhost:8080/users/name-password", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => {
        if (typeof json.id == "number") {
          setAunt(true);
          setUserId(json.id);
        } else {
          setAunt(false);
          setUserId("");
        }
      })
      .catch((err) => console.log(err));
  }, [user, pass, setAunt, setUserId]);

  const saveUsername = (event) => {
    setUser(event.target.value);
  };

  const savePassword = (event) => {
    setPass(event.target.value);
  };

  const submitUser = () => {
    if (alert) {
      setAlert(false);
    } else {
      setAlert(true);
    }
  };

  const handleAlert = () => {
    setAlert(false);
  };

  return (
    <div>
      <center>
        <br></br>
        <Link to={"/Login"}>
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

          <div
            style={{ width: "30%", marginTop: "60px", marginBottom: "60px" }}
          >
            {alert ? (
              <div>
                <Alert
                  variant="warning"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  Username or password not valids, please try again
                  <CloseButton onClick={handleAlert} />
                </Alert>
              </div>
            ) : null}
          </div>

          <Link to={aunt ? "/" : "/login"}>
            <Button size="lg" variant="secondary" onClick={submitUser}>
              Log In
            </Button>
          </Link>
        </div>
      </center>
    </div>
  );
}
