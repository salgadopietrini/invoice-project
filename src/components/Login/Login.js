import "./Login.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import axios from "axios";


export default function Login() {
  const [user, setUser]= useState("");
  const [pass, setPass]= useState("");
  const [autenticated, setAutenticated] = useState("");

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/ae918de4-a89f-4b95-abd7-f674e511e59c")
      .then((response) => setAutenticated((response.data.username===user && response.data.password===pass )?response.data.succes:"false"))
      .catch((err) => console.log(err));
  });

const SaveUsername = (event) =>{
setUser(event.target.value)
}

const SavePassword = (event) =>{
  setPass(event.target.value)
}



const SubmitUser = () =>{
      console.log(autenticated);

      if(autenticated==="true")
        alert("login sucessful");
      else
        alert("bad login");


}

  return(
  <div><center><br></br>
  <Link to={"/Login"}>
        <Dashboard className="dashboard" />
      </Link><br></br>
  <h1>Invoice Project</h1>
  <div>
  <br></br><br></br>
    <input className="input" placeholder="Username" onChange={SaveUsername}/><br></br><br></br>
    <input type="password" className="input"  placeholder="Password" onChange={SavePassword}/><br></br>
    <br></br><button className="button" onClick={SubmitUser}>Submit</button>
  </div>
    

  
  
 </center></div> );
}
