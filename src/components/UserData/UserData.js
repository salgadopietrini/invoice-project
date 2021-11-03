import React, { useContext } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Edit from "@material-ui/icons/Edit";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserData.js";
export default function UserData() {
  const { aunt } = useContext(Context);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }
  return (
  <div>
  
  <Link to={"/"}>
        <Dashboard className="dashboard" />
      </Link>
<center>
<div>
    
<AccountCircle className="circleLogo" />
<h2>User</h2>
</div>
 </center>       

<div className="container">
<div className="rightContent" >
<Link to={"/"}><Edit className="icons"  ></Edit></Link>
</div>
<div className="contentDiv" ><h4>User Info</h4>
  <div className="subContentDiv">
      <p>email:{}</p>
      <p>Age:{}</p>
      </div>
</div></div>
  
  <center>
  <div className="container2">
<div className="rightContent" >
<Link to={"/"}><KeyboardArrowRight className="icons2"  ></KeyboardArrowRight></Link>
</div><br></br>
<div className="contentDiv2" ><h4>{}’s Invoices</h4>

</div></div>
</center>
  
    </div>
  );}
