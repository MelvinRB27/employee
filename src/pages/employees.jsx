import "../css/employees.css"
import TableInfo from "../helper/tableInfo"

import {Link} from 'react-router-dom'

import AlertError from "../helper/alertErro"

const Employees = () => {
    
    const url = "EmployeeData"

    var data = window.localStorage.getItem("loginData")
    if(!data){
        return AlertError("You must log in or create an account", "login")
    }

    return (
        <div className="containerEmployees">
            <div className="ctnList">
                <ul className="">
                    <li className="btn btn-danger"><Link className="nav-link" to="/add-employees">Add employee</Link></li>
                </ul>
            </div>
            <div className="containerTable" data-aos="zoom-in-down">
                <TableInfo url={url} title="/employees"/>
            </div>
        </div>
    )
}
export default Employees;