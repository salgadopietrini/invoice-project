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
    <div>
     
      {cart.length > 0 &&
        cart.map((elem) => (
          <div>
            <button onClick={deleteItem} value={elem.id}>
              x
            </button>
             <CardImg
                            src="https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg"
                            alt=""
                            height="200px"
                          />
            <div style={{color: "white"}}>{elem.id}</div>
            <div style={{color: "white"}}>{elem.name}</div>
            <div style={{color: "white"}}>{elem.value}</div>
          </div>
        ))}
      <Link to={cart.length > 0 ? "/invoice" : "/"}>
        <button  style={{
                    color: "#040741",
                    backgroundColor: "white",
                    width: "200px",
                    borderRadius: "25px",
                    }}>Invoice</button>
      </Link>
    </div>
  );
}
