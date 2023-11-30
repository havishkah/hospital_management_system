import { useState } from "react";

import { useAuthContext } from "./useAuthContext";

import Service from '../../utilities/http';

 

export const useSignup = () =>{

 

    const[error, setError] = useState(null)
    const[sucess,setSuccess] = useState(null)
    const[isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    const service = new Service();

    const signup = async (username, email, contact, password, role,id) =>{

        setError(null)
        setSuccess(null)
        setIsLoading(true)

        const data =  {
            username:username,
            email:email,
            password:password,
            contact:contact,
            role:role,
            id:id,
        }

        console.log(data)

        const respone =  service.post('admin/signup', data )
        respone.then((res) => {
           console.log(res);
           setError("User Added!")
           setIsLoading(false)

        }).catch((err) => {
            console.log(err);
            
            setError("User Adding Failed")
            setIsLoading(false)
        })
        

    }

 

    return {signup, error,sucess, isLoading}

 

}


