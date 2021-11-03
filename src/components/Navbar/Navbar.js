import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to={"/listInvoice"}>
        <button>List of invoices</button>
      </Link>
      <Link to={"/userData"}>
        <button>User Data</button>
      </Link>
      <Link to={"/login"}>
        <button>Log Out</button>
      </Link>
    </div>
  );
}
