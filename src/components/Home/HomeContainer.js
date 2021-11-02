import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Product from "./Product";
import Cart from "./Cart";
import axios from "axios";

const productsUrl = "https://mocki.io/v1/23e6d44e-55ec-4392-88a8-8aa37ff515b3";

export default function HomeContainer() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(productsUrl)
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, [products]);

  const addProduct = (id) => {
    const item = products.find((elem) => elem.id === id);
    const index = cart.findIndex((elem) => elem.id == id);
    if (index == -1) {
      setCart((prevValue) => [...prevValue, { ...item, quantity: 1 }]);
    } else {
      handleQuantity(id, "add");
    }
  };

  const handleQuantity = (id, action) => {
    const item = cart.find((elem) => elem.id == id);
    const index = cart.findIndex((elem) => elem.id == id);
    console.log(id);
    console.log(action);
    setCart((prevValue) => {
      prevValue[index] = {
        ...item,
        quantity:
          action === "add"
            ? item.quantity + 1
            : action === "remove"
            ? item.quantity - 1
            : item.quantity,
      };
      return prevValue;
    });
  };

  const handleDelete = (id) => {
    const index = cart.findIndex((elem) => elem.id == id);
    setCart((prevValue) =>
      prevValue
        .slice(0, index)
        .concat(prevValue.slice(index + 1, prevValue.length))
    );
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ border: "2px solid", width: "200px" }}>
          {products.length > 0
            ? products.map((elem) => (
                <Product info={elem} addProduct={addProduct} key={elem.id} />
              ))
            : "loading"}{" "}
        </div>
        <div style={{ border: "2px solid", width: "200px" }}>
          <Cart
            cartItems={cart}
            handleQuantity={handleQuantity}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}
