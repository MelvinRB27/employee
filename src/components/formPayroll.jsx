import "../css/formPayroll.css"
import SelectEmployee from "../helper/selectEmployee";
import PostApi from "../hooks/usePost";

import { useState } from "react";
import {Link} from 'react-router-dom'
import AlertError from "../helper/alertErro"

const FormPayroll = () => {

    const [employee, setEmployee] = useState("")
    const [id_employee, setIDEmployee] = useState("")
    const [payment_date, setPaymentDate] = useState("")
    const [amount, setAmount] = useState("")


    const url = "/payrolls"
    var dataJson = {
        "employee": employee,
        "id_employee": id_employee,
        "payment_date": payment_date,
        "amount": amount
          
    }
    SelectEmployee(url)

    const formSubmit = e => {
        e.preventDefault(); //esto previene que el form se mande. 
        PostApi(dataJson, url)
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
                            <option value="?"> Select a employee </option>
                        </select>

                    </div>

                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="id_employee">ID employee</label>
                        <input className="form-control" type="text" name="id_employee" placeholder="ID employee" required 
                        
                            onChange={(event) => setIDEmployee(event.target.value)}

                        
                        />
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