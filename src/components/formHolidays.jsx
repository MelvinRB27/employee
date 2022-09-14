import "../css/formHolidays.css"
import SelectEmployee from "../helper/selectEmployee";

import { useState } from "react";
import {Link} from 'react-router-dom'
import AlertError from "../helper/alertErro";
import { collection, addDoc} from "firebase/firestore";
import {db} from "../firebaseDB"

const FormHolidays = () => {

    const [employee, setEmployee] = useState("")
    const [starting_date, setStartingDate] = useState("")
    const [end_date, setEndDate] = useState("")

    const generateId = Math.random().toString(10);

    var dataJson = {
        "id": generateId,
        "Employee": employee,
        "StartingDate": starting_date,
        "EndDate": end_date
    }
    SelectEmployee()

    const formSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, "HolidayData"), dataJson);
        window.location.href = '/holidays'

    };

    var data = window.localStorage.getItem("loginData")
    if (!data) {
        return AlertError("You must log in or create an account", "login")
    }

    return (
        <div className="containerFormHoliday">

            <div className="ctnList">
                <ul className="">
                    <li className="btn btn-primary"><Link className="nav-link" to="/holidays">Back</Link></li>
                </ul>
            </div>

            <div className="contenedorText cHoliday">
                <p>assign vacation to an employee</p>
            </div>


            <div className="ctnfholiday">
                <form className="formHoliday form-control" onSubmit={formSubmit} data-aos="flip-right">
                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="name">Selec employee</label>

                        <select id="selectEmployee" className="form-select"  onChange={(event) => setEmployee(event.target.value)}>
                            <option value={employee} > {employee === "" ?  "Select an employee" : employee } </option>
                        </select>
                    </div>

                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="date">Selec the starting day</label>
                        <input className="form-control" type="date" name="date" required 
                        
                            onChange={(event) => setStartingDate(event.target.value)}
                        
                        />
                    </div>

                    <div className="cntILForm">
                        <label className="form-control-label" htmlFor="date">Selec the end day</label>
                        <input className="form-control" type="date" name="date" required 
                        
                            onChange={(event) => setEndDate(event.target.value)}
                        
                        />
                    </div>
                    
                    <button className=" btn btn-outline-primary">Add </button>
                    <br />
                    <br />
                    <input className="btn btn-outline-danger" type="reset"></input>
                </form>  
            </div>
        </div>
    )
}

export default FormHolidays;