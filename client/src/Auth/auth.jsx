import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Cookies from "js-cookie"

 

function Auth({ position, children }) {

  const { admin } = useAuthContext()
  
  const role = admin.role;
    console.log(role)
  return <div>{position == role && children }</div>;

}

 

export default Auth;