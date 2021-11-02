import React from "react";

export default function Product({ info, addProduct }) {
  const add = () => {
    addProduct(info.id);
  };
  return (
    <div>
      <div>{info.id}</div>
      <div>{info.name}</div>
      <div>{info.value}</div>
      <button onClick={add}>Add!</button>
    </div>
  );
}
