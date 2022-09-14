import "../css/login.css";
import GetLogin from "../hooks/useLogin";
import AlertSuccess from "../helper/alertSuccess";
import { useState } from "react";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

import {db} from "../firebaseDB"
import Swal from "sweetalert2"


const Login = () => {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    var registerData = {
        "UserName": username,
        "Email": email,
        "Password": password
    }

    var loginData = {
        "Email": email,
        "Password": password
    }

    const successAlert = (msj) =>{
        Swal.fire({
          icon: 'success',
          title: msj,
          showConfirmButton: false,
          timer: 1500
        })
    }    

    const errorAlert = (msj) =>{
    
        Swal.fire({
        icon: 'error',
            title: 'Oops...',
            text: msj,
        })
    }

    const formSubmitRegister = (e) => {
        e.preventDefault();
        const getUser = async () => {
            const q = query(collection(db, "RegisterUser"), where("Email", "==", registerData.Email));
            const querySnapshot = await getDocs(q);

            if (querySnapshot.docs.length > 0) {
                errorAlert("This user already exists");
                return
            }

            addDoc(collection(db, "RegisterUser"), registerData);
            successAlert("User successfully registered");
            window.location.reload();
        }

        getUser()
       
    };

    const formSubmit = (e) => {
        e.preventDefault();
    };

    var data = window.localStorage.getItem("loginData")
    if (data) {
        return AlertSuccess("You already have an open account")
    }

    return (
        <div className="containerLogin" data-aos="fade-left">
            <div className="main">  	
                <input type="checkbox" id="chk" aria-hidden="true"/>

                    <div className="signup">
                        <form onSubmit={formSubmitRegister}>
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
                            <button type="submit">Sign up</button>
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