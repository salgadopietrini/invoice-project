import React from "react";

export default function Cart({ cartItems, handleSum }) {
  const sum = (event) => {
    handleSum(event.target.value);
  };
  return (
    <div>
      <div>Cart:</div>
      {cartItems.length > 0 &&
        cartItems.map((elem) => (
          <div>
            <div>{elem.id}</div>
            <div>{elem.name}</div>
            <div>{elem.value}</div>
            <div>{elem.quantity}</div>
            <button onClick={sum} value={elem.id}>
              +
            </button>
          </div>
        ))}
    </div>
  );
}
