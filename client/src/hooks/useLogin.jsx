import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
//import { Cookie } from "js-cookie"

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const respone = await fetch("http://localhost:4000/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username,password }),
    });

    const json = await respone.json();

    if (!respone.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (respone.ok) {
      //save the user to local storage
     //Cookie.setItem("admon", JSON.stringify(json))
      localStorage.setItem("admin", JSON.stringify(json));
      console.log(respone)
      // update the auth context
      localStorage.setItem("role",1)
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  }

  return { login, isLoading, error}
}