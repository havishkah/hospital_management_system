import React from "react";

function LoginAuth({ children }) {
  const role = localStorage.getItem("role");
  console.log(role);
  return <div>{ !role ? children: <h1>Hi</h1> }</div>;
}

export default LoginAuth;
