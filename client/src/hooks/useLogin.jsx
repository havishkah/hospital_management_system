import Cookies from "js-cookie"
import { useState } from "react"
import { useAuthContext } from "./useAuthContext"

export const useLogin = () => {

    const[error, setError] = useState(null)
    const[isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (username, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch('http://localhost:4000/api/admin/login',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})

        })

        const json = await response.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            
            //save the user to local storage
            console.log(json);
            
            Cookies.set('username', json.username, {expires:1})
            Cookies.set('role', json.role, {expires:1},secure)
            Cookies.set('token',json.token,{expires:1})
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)

        }

       

    }

    return {login, isLoading, error}

}