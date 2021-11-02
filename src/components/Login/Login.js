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
  
  
    let url="https://mocki.io/v1/a1b5ace8-d041-44f9-b4ad-46d94449b8ea";
    fetch(url)
      .then({})

    console.log("login sucessful");



}

  return(
  <div><center>
  <icon ></icon>
  <h1>Invoice Project</h1>
  <div>
 
    <input placeholder="Username" onChange={SaveUsername}/><br></br><br></br>
    <input placeholder="Password" onChange={SavePassword}/><br></br>
    <br></br><button onClick={SubmitUser}>Submit</button>
  </div>
    

  
  
 </center></div> );
}
