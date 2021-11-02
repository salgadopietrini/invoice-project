import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import HomeContainer from "./components/Home/HomeContainer";
import InvoiceContainer from "./components/Invoice/InvoiceContainer";
import ListInvoice from "./components/ListInvoice/ListInvoice";
import Login from "./components/Login/Login";
import UserData from "./components/UserData/UserData";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component={HomeContainer}></Route>
          <Route exact path={"/invoice"} component={InvoiceContainer}></Route>
          <Route exact path={"/listInvoice"} component={ListInvoice}></Route>
          <Route exact path={"/login"} component={Login}></Route>
          <Route exact path={"/userData"} component={UserData}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
