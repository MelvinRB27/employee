import "../css/holidays.css"
import TableInfo from "../helper/tableInfo"
import AlertError from "../helper/alertErro"

import {Link} from 'react-router-dom'
import { useState } from "react"


const Holidays = () => {
    const [url, setUrl] = useState("/holidays")

    var data = window.localStorage.getItem("loginData")
    if (!data) {
        return AlertError("You must log in or create an account", "login")
    }

    return (
        <div className="containerHolidays">
            <div>
                <br />
                <div className='inputSearch'>
                    <p>Filter by employee name</p>
                    <input type="text" className='from-control' placeholder='Search' onChange={(event) => 
                        { 
                            setUrl("/holidays?employee="+event.target.value)
                            if (event.target.value === ""){
                                setUrl("/holidays")
                            }
                        }
                        }/>
                    <button type="button" className="btn btn-outline-primary" >Search</button>
                </div>
            </div>
            <div className="ctnList">
                <ul className="">
                    <li className="btn btn-primary"><Link className="nav-link" to="/add-holidays">Add holiday</Link></li>
                </ul>
            </div>
            <div className="containerTable">
                <TableInfo url={url} title="/holidays"/>
            </div>
        </div>
    )
}
export default Holidays;