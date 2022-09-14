import "../css/formEmployee.css"
import { useState } from "react"
import {Link} from 'react-router-dom'

import AlertError from "../helper/alertErro"

import {db} from "../firebaseDB"
import { collection, addDoc} from "firebase/firestore";

const FormEmployee = () => {

    //get all form
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [id, setID] = useState("")
    const [date_birth, setDateBirth] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [rol, setRol] = useState("")

    //this is for send data to api, add employee
    var dataJson = {
        "id": id,
        "First name": name,
        "Last name": lastName,
        "Age": date_birth,
        "Email": email,
        "Phone": phone,
        "Address": address,
        "Rol": rol
    }

    const formSubmit = async (e) => {
        e.preventDefault();

        await addDoc(collection(db, "EmployeeData"), dataJson);
        window.location.href = '/employees'
    
    };

    var data = window.localStorage.getItem("loginData")
    if (!data) {
        return AlertError("You must log in or create an account", "login")
    }

    return (
        <div className="containerFormEmployee">

            <div className="ctnList">
                <ul className="">
                    <li className="btn btn-danger"><Link className="nav-link" to="/employees">Back</Link></li>
                </ul>
            </div>

            <div className="contenedorText cEmployee">
                <p>Add a new Employee</p>
            </div>

            <div className="ctnfemployy">
                <form className="formEmployee form-control" onSubmit={formSubmit} data-aos="flip-right">
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="name">Name</label>
                        <input className="form-control" type="text" name="name" placeholder="Name" required 
                        
                        onChange={(event) => setName(event.target.value)}
                        
                        />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="lastname">Last name</label>
                        <input className="form-control" type="text" name="lastname" placeholder="Last name" required 
                            
                            onChange={(event) => setLastName(event.target.value)}
                                
                        />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="idecard">Identification card</label>
                        <input className="form-control" type="number" name="lastname" placeholder="Identification card"  required
                        
                            onChange={(event) => setID(event.target.value)}
                        
                        />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="date">Date of Birth</label>
                        <input className="form-control" type="date" name="date" required 
                        
                            onChange={(event) => setDateBirth(event.target.value)}
                        
                        />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="email">Email</label>
                        <input className="form-control" type="email" name="email" placeholder="Email" required 
                   
                            onChange={(event) => setEmail(event.target.value)}
                        
                        />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="phone">Phone</label>
                        <input className="form-control" type="number" name="phone" placeholder="Phone" required 
                   
                            onChange={(event) => setPhone(event.target.value)}
                        
                        />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="address">Address</label>
                        <input className="form-control" type="string" name="address" placeholder="Address" required 
                   
                            onChange={(event) => setAddress(event.target.value)}
                        
                        />
                    </div>
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="rol">Rol</label>
                        <input className="form-control" type="address" name="rol" placeholder="Rol" required 
                    
                            onChange={(event) => setRol(event.target.value)}
                        
                         />
                    </div>
                    
                    <button className=" btn btn-outline-primary" id="btnSendEmployee">Add</button>
                    <br />
                    <br />
                    <input className="btn btn-outline-danger" type="reset"></input>
                </form>  
            </div>
        </div>
    )
}

export default FormEmployee;