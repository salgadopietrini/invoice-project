import React from "react";

export default function Cart({ cartItems, handleQuantity, handleDelete }) {
  const add = (event) => {
    handleQuantity(event.target.value, "add");
  };
  const remove = (event) => {
    handleQuantity(event.target.value, "remove");
  };

  const deleteItem = (event) => {
    handleDelete(event.target.value);
  };

  return (
    <div>
      <div>Cart:</div>
      {cartItems.length > 0 &&
        cartItems.map((elem) => (
          <div style={{ border: "2px solid" }}>
            <button onClick={deleteItem} value={elem.id}>
              x
            </button>
            <div>{elem.id}</div>
            <div>{elem.name}</div>
            <div>{elem.value}</div>
            <div style={{ display: "flex" }}>
              {elem.quantity > 1 && (
                <button onClick={remove} value={elem.id}>
                  -
                </button>
              )}
              <div>{elem.quantity}</div>
              <button onClick={add} value={elem.id}>
                +
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
