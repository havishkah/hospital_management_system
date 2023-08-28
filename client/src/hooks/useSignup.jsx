import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const addAdmin = async (username, email, contact, password) => {
    setIsLoading(true);
    setError(null);

    const respone = await fetch("http://localhost:4000/api/admin/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, contact, password }),
    });

    const json = await respone.json();

    if (!respone.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (respone.ok) {
      //save the user to local storage
      localStorage.setItem("admin", JSON.stringify(json));
      console.log(respone)
      // update the auth context
      dispatch({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  }

  return { addAdmin, isLoading, error}
}
