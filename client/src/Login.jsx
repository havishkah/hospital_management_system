import { useState } from "react";
import { useLogin } from "./hooks/useLogin";
import "./login.css"
import Cookies from "js-cookie";

 const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error } = useLogin()

    const handleSignup= async (e) => {
        e.preventDefault()

        await login(username,password)
    }

    const user = Cookies.get('user')

    return(
        <div className="logpage">
            <div className="logo">
                <h1><span>Coronory </span> Care Unit</h1>
            </div>
            <div className="form-log" >
                <form className="login" onSubmit={handleSignup}>
                <h1>Login Admin</h1>
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username} 
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} 
                    />
                </div>
                <button className="logbutton">Login</button>

                {error && <div className="error">{error}</div>}
                </form>
            </div>
        </div>
    )
 }

 export default Login;