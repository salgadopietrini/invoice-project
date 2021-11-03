import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Product from "./Product";
import Cart from "./Cart";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./Home.css";

export default function HomeContainer() {
  const { products, addProduct, aunt } = useContext(Context);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }

  return (
    <div className="home-container">
      <Navbar />
      <Link to={"/"}>
        <Dashboard className="dashboard" />
      </Link>
      <Link to={"/userData"}>
        <AccountCircle className="account" />
      </Link>

      <div style={{ display: "flex" }}>
        <div style={{ border: "2px solid", width: "200px", height: "700px" }}>
          {products.length > 0
            ? products.map((elem) => (
                <Product info={elem} addProduct={addProduct} key={elem.id} />
              ))
            : "loading"}{" "}
        </div>
        <div style={{ border: "2px solid", width: "200px" }}>
          <Cart />
        </div>
      </div>
    </div>
  );
}
