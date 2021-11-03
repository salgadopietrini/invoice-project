import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Invoice/InvoiceContainer.css";
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

export default function ParticularInvoice(props) {
  const id = props.location.state.invoiceId;
  const [invoiceProducts, setInvoiceProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/invoices/${id}`)
      .then((response) => setInvoiceProducts(response.data.productResponses))
      .catch((err) => console.log(err));
  }, [id]);

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
            <h2>Invoice {id}</h2>

            <Container
              style={{ width: "50rem" }}
              className="justify-content-lg-center "
            >
              <Container style={{ padding: "40px" }}>
                <Row>
                  {invoiceProducts.length > 0 &&
                    invoiceProducts.map((elem) => (
                      <Col
                        xs={6}
                        md={6}
                        style={{ marginBottom: "10px" }}
                        key={elem.id}
                      >
                        <Card>
                          <CardImg
                            src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg"
                            alt=""
                            height="150px"
                          />
                          <div style={{ color: "black" }}>
                            <div>{elem.name}</div>
                            <div>Price: $ {Number.parseFloat(elem.value)}</div>
                          </div>
                        </Card>
                      </Col>
                    ))}
                </Row>
                <div
                  style={{ color: "white" }}
                  className="justify-content-lg-center "
                >
                  Total:{" $ "}
                  {invoiceProducts.length > 0
                    ? invoiceProducts
                        .reduce(
                          (acum, elem) => acum + Number.parseFloat(elem.value),
                          0
                        )
                        .toFixed(2)
                    : 0}
                </div>
                <Link to={"/ListInvoice"}>
                  <button
                    style={{
                      color: "#040741",
                      backgroundColor: "white",
                      width: "200px",
                      borderRadius: "25px",
                    }}
                  >
                    Back to invoices list
                  </button>
                </Link>
                <Link to={"/ListInvoice"}>
                  <button
                    style={{
                      color: "#040741",
                      backgroundColor: "white",
                      width: "200px",
                      borderRadius: "25px",
                    }}
                  >
                    Return to home
                  </button>
                </Link>
              </Container>
            </Container>
          </div>
        </Col>
      </Row>
    </div>
  );
}
