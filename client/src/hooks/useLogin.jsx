import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { Cookies } from "js-cookies";
import { useNavigate } from "react-router-dom";
//import { Service } from "../../utilities/http"

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

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
      Cookies.set("admin", JSON.stringify(json),{ expires: 10 });
      console.log(respone)
      alert('Logged in Successfully')
            navigate('/home')
      // update the auth context
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  }

  return { login, isLoading, error}
}