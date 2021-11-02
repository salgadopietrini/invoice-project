import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InvoiceContainer.css";
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

import { Context } from "../../App";

export default function InvoiceContainer() {
  const { cart, setCart, handleDelete } = useContext(Context);

  const handleInvoice = () => {
    setCart([]);
  };

  const deleteItem = (event) => {
    handleDelete(event.target.value);
  };

  return (
    <div>
      <Link to={"/"}>
        <Dashboard className="dashboard" />
      </Link>
      <Link to={"/userData"}>
        <AccountCircle className="account" />
      </Link>

      <h2>Your Invoice</h2>

      <Row>
        <Col
          xs={10}
          md={10}
          style={{ padding: "20px", margin: "100px", marginTop: "20px" }}
        >
          <div style={{ backgroundColor: "#090F86" }}>
            <h2>Invoice #2</h2>

            <Container
              style={{ width: "50rem" }}
              className="justify-content-lg-center "
            >
              <Container style={{ padding: "40px" }}>
                <Row>
                  {cart.length > 0 &&
                    cart.map((elem) => (
                      <Col xs={6} md={6} style={{ marginBottom: "10px" }}>
                        <Card>
                          {
                            <button onClick={deleteItem} value={elem.id}>
                              x
                            </button>
                          }
                          <CardImg
                            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630572642i/2165.jpg"
                            alt=""
                            height="200px"
                          />
                          <div>{elem.id}</div>
                          <div>{elem.name}</div>
                          <div>Price: {Number.parseFloat(elem.value)}</div>
                          <Card.Footer>
                            <small className="text-muted">
                              Last updated 3 mins ago
                            </small>
                          </Card.Footer>
                        </Card>
                      </Col>
                    ))}
                </Row>
              </Container>
            </Container>
            <div>
              Total:{" "}
              {cart.length > 0
                ? cart
                    .reduce(
                      (acum, elem) => acum + Number.parseFloat(elem.value),
                      0
                    )
                    .toFixed(2)
                : 0}
            </div>
            <button onClick={handleInvoice}>CHECKOUT</button>
          </div>
        </Col>
      </Row>
    </div>
  );
}
