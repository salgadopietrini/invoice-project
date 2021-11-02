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
    setCart((prevValue) => [...prevValue, { ...item, quantity: 1 }]);
  };

  const handleSum = (id) => {
    const item = cart.find((elem) => elem.id === id);
    const index = cart.findIndex((elem) => elem.id === id);
    console.log(item);
    console.log(index);
    /* setCart((prevValue) => {
      prevValue[index] = { ...item, quantity: item.quantity + 1 };
      return prevValue;
    }); */
  };

  return (
    <div>
      <Navbar />
      {products.length > 0
        ? products.map((elem) => (
            <Product info={elem} addProduct={addProduct} key={elem.id} />
          ))
        : "loading"}
      <Cart cartItems={cart} handleSum={handleSum} />
    </div>
  );
}
