import React, {useState} from "react";

export default function Login() {
  const [user, setUser]= useState("");

const SaveUsername = (event) =>{
setUser(event.target.value)
}

const SavePassword = (event) =>{
  setUser(event.target.value)
}

const SubmitUser = () =>{


}

  return(
  <div><center>
  <h1>Login</h1>
  <div>
    <input onChange={SaveUsername}/>
    <input onChange={SavePassword}/>
    <button onClick={SubmitUser}>Submit</button>
  </div>
    

  
  
 </div></center> );
}
