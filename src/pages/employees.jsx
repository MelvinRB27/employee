import "../css/employees.css"
import TableInfo from "../helper/tableInfo"

import {Link} from 'react-router-dom'
import { useState } from "react"

import AlertError from "../helper/alertErro"

const Employees = () => {
    
    const [url, setUrl] = useState("/employees")

    var data = window.localStorage.getItem("loginData")
    if(!data){
        return AlertError("You must log in or create an account", "login")
    }

    return (
        <div className="containerEmployees">
            <div>
                <br />
                <div className='inputSearch'>
                    <p>Filter by name</p>
                    <input type="text" className='from-control' placeholder='Search' onChange={(event) => 
                        { 
                            setUrl("/employees?name="+event.target.value)
                            if (event.target.value === ""){
                                setUrl("/employees")
                            }
                        }
                        }/>
                    <button type="button" className="btn btn-outline-danger">Search</button>
                </div>
            </div>
            <div className="ctnList">
                <ul className="">
                    <li className="btn btn-danger"><Link className="nav-link" to="/add-employees">Add employee</Link></li>
                </ul>
            </div>
            <div className="containerTable">
                <TableInfo url={url} title="/employees"/>
            </div>
        </div>
    )
}
export default Employees;