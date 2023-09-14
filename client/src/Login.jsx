import { useState } from "react"
import "./login.css"

 const Login = () =>{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return(
        <div className="logpage">
            <div className="logo">
                <h1><span>Coronory </span> Care Unit</h1>
            </div>
            <div className="form-log">
                <form className="login">
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
                </form>
            </div>
        </div>
    )
 }

 export default Login;