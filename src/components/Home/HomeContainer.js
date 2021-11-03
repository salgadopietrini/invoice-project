import React, { useContext } from "react";

import Product from "./Product";
import Cart from "./Cart";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./Home.css";
import { Col, Row } from "react-bootstrap";

export default function HomeContainer() {
  const { products, addProduct, aunt } = useContext(Context);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }

  return (
    <div className="home-container">
      <Link to={"/"}>
        <Dashboard className="dashboard" />
      </Link>
      <Link to={"/userData"}>
        <AccountCircle className="account" />
      </Link>

      <Row>
        <Col
          xs={8}
          md={8}
          style={{ padding: "20px", margin: "100px", marginTop: "20px" }}
        >
          <h2>Products</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#090F86",
              padding: "20px",
              borderRadius: "50px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr ",
                gridGap: "15px",
              }}
            >
              {products.length > 0
                ? products.map((elem) => (
                    <Product
                      info={elem}
                      addProduct={addProduct}
                      key={elem.id}
                    />
                  ))
                : "loading"}{" "}
            </div>
          </div>
        </Col>
        <Col xs={2} md={2}>
          <div
            style={{
              backgroundColor: "#090F86",
              padding: "15px",
              marginTop: "20px",
              borderRadius: "25px",
            }}
          >
            <ShoppingCart className="cart" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Cart />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
