import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer";
import InvoiceContainer from "./components/Invoice/InvoiceContainer";
import ListInvoice from "./components/ListInvoice/ListInvoice";
import Login from "./components/Login/Login";
import UserData from "./components/UserData/UserData";
import axios from "axios";
import ParticularInvoice from "./components/ParticularInvoice/ParticularInvoice";

const productsUrl = "http://localhost:8080/products";

export const Context = React.createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [aunt, setAunt] = useState(false);
  const [userId, setUserId] = useState("");

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
      setCart((prevValue) => [...prevValue, item]);
    } else {
    }
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
      <Context.Provider
        value={{
          products: products,
          cart: cart,
          setCart: setCart,
          addProduct: addProduct,
          handleDelete: handleDelete,
          aunt: aunt,
          setAunt: setAunt,
          userId: userId,
          setUserId: setUserId,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={HomeContainer}></Route>
            <Route exact path={"/invoice"} component={InvoiceContainer}></Route>
            <Route exact path={"/listInvoice"} component={ListInvoice}></Route>
            <Route
              exact
              path={"/particularInvoice"}
              component={ParticularInvoice}
            ></Route>
            <Route exact path={"/login"} component={Login}></Route>
            <Route exact path={"/userData"} component={UserData}></Route>
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
