import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import Product from "./Product";
import Cart from "./Cart";
import { Context } from "../../App";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "./Home.css";
import {
  Button,
  Card,
  CardGroup,
  CardImg,
  Col,
  Container,
  Form,
  FormControl,
  Image,
  Row,
} from "react-bootstrap";

export default function HomeContainer() {
  const { products, addProduct, aunt } = useContext(Context);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }

  return (
    <div>
      <Navbar />
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
          <div style={{ backgroundColor: "#090F86" }}>
          
      <div style={{ display: "flex" }}>
        <div style={{ border: "2px solid", width: "200px", height: "700px" }}>
          {products.length > 0
            ? products.map((elem) => (
                <Product info={elem} addProduct={addProduct} key={elem.id} />
              ))
            : "loading"}{" "}
        </div>
      
      </div>
</div>
       </Col>
        <Col xs={2} md={2}>
              <div style={{backgroundColor: "#090F86", padding:"10px", marginTop: "20px"}} >
                      <h2>Cart</h2>
              <div style={{ border: "2px solid", width: "200px" }}>
                  <Cart />
               </div>
               </div>

        </Col>

      </Row>
    </div>
  );
}
