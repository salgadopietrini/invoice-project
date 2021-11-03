import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";

export default function Product({ info, addProduct }) {
  const add = () => {
    addProduct(info.id);
  };
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <CardImg
          src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg"
          alt=""
          height="200px"
          width="100px"
        />
        <Card.Body>
          <Card.Title>{info.name}</Card.Title>
          <Card.Text>Price: $ {info.value}</Card.Text>
          <Button variant="primary" onClick={add}>
            Add!
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
