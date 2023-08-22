
import React from "react";

 

function Auth({ position, children }) {

  const role = localStorage.getItem("role");
    console.log(role)
  return <div>{position === role && children }</div>;

}

 

export default Auth;