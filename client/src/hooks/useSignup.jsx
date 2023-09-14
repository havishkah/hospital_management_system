import { useState } from "react";

import { useAuthContext } from "./useAuthContext";

import Service from '../../utilities/http';

 

export const useSignup = () =>{

 

    const[error, setError] = useState(null)

    const[isLoading, setIsLoading] = useState(null)

    const { dispatch } = useAuthContext()

    const service = new Service();


 

    const signup = async (username,email, contact, password, role) =>{

        setError(null)
        setIsLoading(true)

        const data =  {
            username:username,
            email:email,
            password:password,
            contact:contact,
            role:role
        }

        const respone =  service.post('admin/signup', data )
        respone.then((res) => {
           console.log(res);

        }).catch((err) => {
            console.log(err);
        })
        

        // const json = await respone.json()

 

        // if(!respone.ok){

        //     setError(json.error)

        //     setIsLoading(false)

        // }

 

        // if(respone.ok){

        //     localStorage.setItem('user', JSON.stringify(json))

 

        //     dispatch({type: 'LOGIN', payload: json})

 

        //     isLoading(false)

        // }

    }

 

    return {signup, error, isLoading}

 

}