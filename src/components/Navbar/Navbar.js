import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
      <Link to={"/invoice"}>
        <button>Invoice</button>
      </Link>
      <Link to={"/listInvoice"}>
        <button>List of invoices</button>
      </Link>
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <Link to={"/userData"}>
        <button>User Data</button>
      </Link>
    </div>
  );
}
