import React, {useState} from "react";
//import "./Login.css";

export default function Login() {
  const [user, setUser]= useState("");
  const [pass, setPass]= useState("");

const SaveUsername = (event) =>{
setUser(event.target.value)
}

const SavePassword = (event) =>{
  setPass(event.target.value)
}

const SubmitUser = () =>{


}

  return(
  <div><center>
  <h1>Login</h1>
  <div>
  <label>Username:</label>
    <input onChange={SaveUsername}/>
    <label>Password:</label>
    <input onChange={SavePassword}/>
    <br></br><button onClick={SubmitUser}>Submit</button>
  </div>
    

  
  
 </center></div> );
}
