import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import axios from "axios";
import "./ListInvoice.css";

export default function ListInvoice() {
  const { aunt, userId } = useContext(Context);
  const [invoiceList, setInvoiceList] = useState([]);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/invoices/users/${userId}`)
      .then((response) => setInvoiceList(response.data))
      .catch((err) => console.log(err));
  }, [invoiceList, setInvoiceList, userId]);

  return (
    <div>
      <Link to={"/"}>
        <Dashboard className="dashboard" />
      </Link>
      <Link to={"/userData"}>
        <AccountCircle className="account" />
      </Link>

      <h2>Invoice List</h2>

      {invoiceList.length > 0 &&
        invoiceList.map((elem) => (
          <div>
            <center>
              <div className="container2">
                <div className="rightContent">
                  <Link
                    to={{
                      pathname: "/particularInvoice",
                      state: { invoiceId: elem.id },
                    }}
                  >
                    <KeyboardArrowRight className="icons2"></KeyboardArrowRight>
                  </Link>
                </div>
                <br></br>
                <div
                  className="contentDiv2"
                  style={{
                    display: "flex",
                    paddingRight: "100px",
                    paddingLeft: "25px",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      border: "2px solid white",
                      borderRadius: "50%",
                      height: "35px",
                      width: "35px",
                    }}
                  >
                    <h4>{elem.id}</h4>
                  </div>
                  <h4>Number of items: {elem.productResponses.length}</h4>
                  <h4>Total: ${elem.total}</h4>
                </div>
              </div>
            </center>
          </div>
        ))}
    </div>
  );
}
