import React from 'react'
import { useState } from "react"
import { useLogin } from './hooks/useLogin'
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()
    const handleSubmit = async (e) => {
        e.preventDefault()

       // const response=await login(username,password)
       
        .response(
            alert('Logged in Successfully'))
            navigate('/admin');
        
  
    }


  return (
    <div className='main-container'>
       
       <main className="main-container">
        <div className="row">
            <div className="col-md-12 w-50 m-auto">
            <h5 className="mt-2"><i className="fa fa-user-plus"> </i> Login User</h5>
            <p className="mt-3" style={{color:'grey'}}>Basic Infromation</p>
            <form>
                <div className="row">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label style={{fontSize:'14px'}} className="form-lable">Username</label>
                            <input type="text" name="username" className="form-control" onChange={(e) => {
                                setUsername(e.target.value);
                            }} />
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label style={{fontSize:'14px'}} className="form-lable">Password</label>
                            <input type="password" name="address" className="form-control" onChange={(e) => {
                                setPassword(e.target.value);
                            }} />
                        </div>
                    </div>
                    
                    <div className="col-md-12">
                        <div className="mb-3">
                        <label className="form-lable"></label>
                            <button  style={{height:'40px', fontSize:'16px'}} type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Login</button>
                        </div>
                       
                    </div>
                            {error && <div className="error">{error}</div>}
                </div>
            </form>
            </div>
        </div>
    </main>
        
    </div>
  )
}

export default Login
