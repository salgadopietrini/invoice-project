import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Product from "./Product";
import Cart from "./Cart";
import { Context } from "../../App";
import "./HomeContainer.css";

export default function HomeContainer() {
  const { products, addProduct, aunt } = useContext(Context);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }

  return (
    <div className="home-container">
      <Navbar />
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
