import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Dashboard from "@material-ui/icons/Dashboard";
import AccountCircle from "@material-ui/icons/AccountCircle";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Invoice/InvoiceContainer.css";
import { Card, CardImg, Col, Button } from "react-bootstrap";

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

      <Col
        xs={10}
        md={10}
        style={{ padding: "20px", margin: "100px", marginTop: "20px" }}
      >
        <div
          style={{
            backgroundColor: "#090F86",
            borderRadius: "50px",
            padding: "20px",
          }}
        >
          <h2>Invoice {id}</h2>
          <div
            style={{
              paddingRight: "50px",
              paddingLeft: "50px",
            }}
          >
            <div style={{ padding: "40px" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  gridGap: "15px",
                }}
              >
                {invoiceProducts.length > 0 &&
                  invoiceProducts.map((elem) => (
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
                  {invoiceProducts.length > 0
                    ? invoiceProducts
                        .reduce(
                          (acum, elem) => acum + Number.parseFloat(elem.value),
                          0
                        )
                        .toFixed(2)
                    : 0}
                </h4>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  width: "30%",
                  margin: "auto",
                }}
              >
                <Link to={"/ListInvoice"}>
                  <Button variant="secondary">Back to invoices list</Button>
                </Link>
                <Link to={"/"}>
                  <Button variant="secondary">Return to home</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );
}
