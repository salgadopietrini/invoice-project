import React, { useContext } from "react";
import { Context } from "../../App";
import { Link } from "react-router-dom";
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

export default function Cart() {
  const { cart, handleDelete } = useContext(Context);

  const deleteItem = (event) => {
    handleDelete(event.target.value);
  };

  return (
    <div
      style={{
        width: "100%",
        paddingBottom: "10px",
        paddingTop: "20px",
      }}
    >
      {cart.length > 0 &&
        cart.map((elem) => (
          <div
            style={{
              display: "flex",
              height: "70px",
              width: "100%",
              justifyContent: "space-between",
              paddingBottom: "10px",
            }}
          >
            <Image
              src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg"
              alt=""
              width="60px"
              style={{ borderRadius: "50%" }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <div style={{ color: "white" }}>{elem.name}</div>
              <div style={{ color: "white" }}>Price: $ {elem.value}</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button variant="danger" onClick={deleteItem} value={elem.id}>
                x
              </Button>
            </div>
          </div>
        ))}
      <div style={{ paddingTop: "15px" }}>
        <Link to={cart.length > 0 ? "/invoice" : "/"}>
          <Button
            variant="secondary"
            style={{
              width: "100%",
            }}
          >
            Invoice
          </Button>
        </Link>
      </div>
    </div>
  );
}
