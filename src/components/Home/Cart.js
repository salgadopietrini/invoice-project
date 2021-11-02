import React, { useContext } from "react";
import { Context } from "../../App";

export default function Cart() {
  const { cart, handleQuantity, handleDelete } = useContext(Context);
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
      {cart.length > 0 &&
        cart.map((elem) => (
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
      <button>ADD</button>
    </div>
  );
}
