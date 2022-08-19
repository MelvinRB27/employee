import "../css/formHolidays.css"
import SelectEmployee from "../helper/selectEmployee";
import PostApi from "../hooks/usePost";

import { useState } from "react";
import {Link} from 'react-router-dom'
import AlertError from "../helper/alertErro";

const FormHolidays = () => {

    const [employee, setEmployee] = useState("")
    const [id_employee, setIDEmployee] = useState("")
    const [starting_date, setStartingDate] = useState("")
    const [end_date, setEndDate] = useState("")


    const url = "/holidays"
    var dataJson = {
        "employee": employee,
        "id_employee": id_employee,
        "starting_date": starting_date,
        "end_date": end_date
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

                        <select id="selectEmployee" className="form-select" onChange={(event) => setEmployee(event.target.value)}>
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