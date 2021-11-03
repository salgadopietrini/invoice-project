import React, { useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import "./InvoiceContainer.css";
import {
  Alert,
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
  const { cart, setCart, handleDelete, aunt, userId } = useContext(Context);
  const [confirmation, setConfirmation] = useState(false);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }

  const handleInvoice = () => {
    let _data = {
      productIds: cart.map((elem) => elem.id),
      userId: userId,
    };

    fetch("http://localhost:8080/api/invoices/products/", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    setCart([]);
  };

  const deleteItem = (event) => {
    handleDelete(event.target.value);
  };

  const handleConfirmation = () => {
    setConfirmation(!confirmation);
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

      <Col
        xs={10}
        md={10}
        style={{ padding: "20px", margin: "100px", marginTop: "20px" }}
      >
        <div
          style={{
            backgroundColor: "#090F86",
            borderRadius: "50px",
            height: "100vh",
          }}
        >
          <h2>New Invoice</h2>
          <div style={{ border: "2px solid white" }}>
            <Container style={{ padding: "40px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr ",
                  gridGap: "15px",
                }}
              >
                {cart.length > 0 &&
                  cart.map((elem) => (
                    <Card style={{ width: "14rem" }}>
                      <CardImg
                        src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg"
                        alt=""
                        height="150px"
                      />
                      <Card.Body>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <div style={{ color: "black" }}>
                            <Card.Title>{elem.name}</Card.Title>
                            <Card.Text>
                              Price: $ {Number.parseFloat(elem.value)}
                            </Card.Text>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Button
                              onClick={deleteItem}
                              value={elem.id}
                              variant="danger"
                            >
                              x
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  ))}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "20px",
                  paddingTop: "50px",
                }}
              >
                <h4
                  style={{ color: "white" }}
                  className="justify-content-lg-center "
                >
                  Total: ${" "}
                  {cart.length > 0
                    ? cart
                        .reduce(
                          (acum, elem) => acum + Number.parseFloat(elem.value),
                          0
                        )
                        .toFixed(2)
                    : 0}
                </h4>
                {confirmation ? (
                  <div>
                    <Alert variant="warning">
                      Are you sure you want to create the invoice? This action
                      cannot be undone
                    </Alert>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        width: "40%",
                        margin: "auto",
                      }}
                    >
                      <Link to={"/"}>
                        <Button
                          variant="success"
                          size="lg"
                          onClick={handleInvoice}
                        >
                          Yes
                        </Button>
                      </Link>
                      <Button
                        variant="danger"
                        size="lg"
                        onClick={handleConfirmation}
                      >
                        No
                      </Button>
                    </div>
                  </div>
                ) : (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleConfirmation}
                  >
                    Create Invoice
                  </Button>
                )}
              </div>
            </Container>
          </div>
        </div>
      </Col>
    </div>
  );
}
