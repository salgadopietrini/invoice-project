import React, { useContext } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"
import "./ListInvoice.css";

export default function ListInvoice() {
  const { invoiceList, aunt } = useContext(Context);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }
  return (
    <div>
     <Link to={"/"}>
        <Dashboard className="dashboard" />
      </Link>
      <Link to={"/userData"}>
        <AccountCircle className="account" />
      </Link>
      
      {invoiceList.length > 0 &&
        invoiceList.map((elem) => <div> 
        <center>
  <div className="container2">
<div className="rightContent" >
<Link to={"/"}><KeyboardArrowRight className="icons2"  ></KeyboardArrowRight></Link>
</div><br></br>
<div className="contentDiv2" ><h4>{elem.id}</h4>

</div></div>
</center>
        
        </div>)}
    </div>
  );
}
