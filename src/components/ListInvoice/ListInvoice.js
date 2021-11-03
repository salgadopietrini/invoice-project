import React, { useContext } from "react";
import { Context } from "../../App";

export default function ListInvoice() {
  const { invoiceList, aunt } = useContext(Context);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }
  return (
    <div>
      {invoiceList.length > 0 &&
        invoiceList.map((elem) => <div>{elem.id}</div>)}
    </div>
  );
}
