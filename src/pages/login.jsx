import "../css/login.css";
import PostApi from "../hooks/usePost";
import GetLogin from "../hooks/useLogin";
import AlertSuccess from "../helper/alertSuccess";
import { useState } from "react";

const Login = () => {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    var registerData = {
        "user_name": username,
        "email": email,
        "password": password
    }

    var loginData = {
        "email": email,
        "password": password
    }

    const formSubmit = e => {
        e.preventDefault(); //esto previene que el form se mande. 
    };

    var data = window.localStorage.getItem("loginData")
    if (data) {
        return AlertSuccess("You already have an open account")
    }

    return (
        <div className="containerLogin">
            <div className="main">  	
                <input type="checkbox" id="chk" aria-hidden="true"/>

                    <div className="signup">
                        <form onSubmit={formSubmit}>
                            <label htmlFor="chk" aria-hidden="true">Sign up</label>
                            <input type="text" name="txt" placeholder="User name" required 
                            
                                onChange={(event) => setUserName(event.target.value)}
                            />
                            <input type="email" name="email" placeholder="Email" required   
                            
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <input type="password" name="pswd" placeholder="Password" required 
                            
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <button onClick={() => PostApi(registerData, "/users")}>Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form onSubmit={formSubmit}>
                            <label htmlFor="chk" aria-hidden="true">Login</label>
                            <input type="email" name="email" placeholder="Email" required 
                            
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <input type="password" name="pswd" placeholder="Password" required 
                            
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <button onClick={() => GetLogin(loginData)}>Login</button>
                        </form>
                    </div>
            </div>
        </div>
    )
}
export default Login;