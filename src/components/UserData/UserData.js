import React, { useContext } from "react";
import { Context } from "../../App";
export default function UserData() {
  const { aunt } = useContext(Context);
  if (aunt) {
  } else {
    window.location.href = "./login";
  }
  return <div>UserData</div>;
}
