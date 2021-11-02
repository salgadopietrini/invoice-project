import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";

export default function HomeContainer() {
  const [products, setProducts] = useState([]);
  /* Call the API for product LIST */

  return (
    <div>
      <Navbar />
    </div>
  );
}
