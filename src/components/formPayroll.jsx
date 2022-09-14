import "../css/formPayroll.css"
import SelectEmployee from "../helper/selectEmployee";

import { useState } from "react";
import {Link} from 'react-router-dom'
import AlertError from "../helper/alertErro"
import { collection, addDoc} from "firebase/firestore";
import {db} from "../firebaseDB"

const FormPayroll = () => {

    const [employee, setEmployee] = useState("")
    const [payment_date, setPaymentDate] = useState("")
    const [amount, setAmount] = useState("")

    const generateId = Math.random().toString(10);


    var dataJson = {
        "id": generateId,
        "Employee": employee,
        "PaymentDate": payment_date,
        "Amount": amount
          
    }
    SelectEmployee()

    const formSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "PayrollData"), dataJson);
        window.location.href = '/payrolls'

    };


    var data = window.localStorage.getItem("loginData")
    if (!data) {
        return AlertError("You must log in or create an account", "login")
    }
    
    return (
        <div className="containerFormHoliday">

            <div className="ctnList">
                <ul className="">
                    <li className="btn btn-success"><Link className="nav-link" to="/payrolls">Back</Link></li>
                </ul>
            </div>

            <div className="contenedorText">
                <p>Set payment</p>
            </div>


            <div className="ctnfholiday">
                <form className="formHoliday form-control"onSubmit={formSubmit} data-aos="flip-right">
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="name">Selec employee</label>

                        <select id="selectEmployee" className="form-select" 
                            onChange={(event) => setEmployee(event.target.value)}
                        >
                            <option value={employee} > {employee === "" ?  "Select an employee" : employee } </option>
                        </select>

                    </div>

                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="paymentdate">Select the payment day</label>
                        <input className="form-control" type="date" name="paymentdate" required 
                        
                            onChange={(event) => setPaymentDate(event.target.value)}

                        
                        />
                    </div>

                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="amount">Amount</label>
                        <input className="form-control" type="number" name="amount" placeholder="Amount" required 
                        
                            onChange={(event) => setAmount(event.target.value)}

                        
                        />
                    </div>
                    
                    <button className=" btn btn-outline-primary" >Add</button>
                    <br />
                    <br />
                    <input className="btn btn-outline-danger" type="reset"></input>

                </form>  
            </div>
        </div>
    )
}

export default FormPayroll;