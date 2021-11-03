import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const handleLogout = () => {
    window.location.href = "./login";
  };
  return (
    <div>
      <Link to={"/listInvoice"}>
        <button>List of invoices</button>
      </Link>
      <Link to={"/userData"}>
        <button>User Data</button>
      </Link>

      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}
