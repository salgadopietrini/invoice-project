import React from "react";
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

export default function Product({ info, addProduct }) {
  const add = () => {
    addProduct(info.id);
  };
  return (
    <div>
      <Col xs={3} md={3}>
     <CardImg
         src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg"
         alt=""
         height="200px"
        width="100px"
      />
      <div style={{color: "white"}}>{info.id}</div>
      <div style={{color: "white"}}>{info.name}</div>
      <div style={{color: "white"}}>{info.value}</div>
      <button 
                    style={{
                      color: "#040741",
                      backgroundColor: "white",
                      width: "200px",
                      borderRadius: "25px",
                    }} onClick={add}>Add!</button>
      </Col>
    </div>
  );
}
