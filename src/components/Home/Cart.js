import React, { useContext } from "react";
import { Context } from "../../App";

export default function Cart() {
  const { cart, handleDelete } = useContext(Context);

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
          </div>
        ))}
      <button>ADD</button>
    </div>
  );
}
