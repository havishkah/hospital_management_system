import React from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import Cookies from "js-cookie"

 

function Auth({ position, children }) {
  const un=Cookies.get('username')
  const { admin } = useAuthContext()
  
  const role = Cookies.get('role');
  return <div>{position == role && children }</div>;

}

 

export default Auth;