import {Link} from 'react-router-dom'
import TableInfo from "../helper/tableInfo"
import AlertError from "../helper/alertErro"

import { useState } from "react"

const Payroll = () => {
    const [url, setUrl] = useState("/payrolls")

    var data = window.localStorage.getItem("loginData")
    if (!data) {
        return AlertError("You must log in or create an account", "login")
    }

    return (
        <div className="containerPayroll">
           <div>
                <br />
                <div className='inputSearch'>
                    <p>Filter by employee name</p>
                    <input type="text" className='from-control' placeholder='Search' onChange={(event) => 
                        { 
                            setUrl("/payrolls?employee="+event.target.value)
                            if (event.target.value === ""){
                                setUrl("/payrolls")
                            }
                        }
                        }/>
                    <button type="button" className="btn btn-outline-success" >Search</button>
                </div>
            </div>
            <div className="ctnList">
                <ul className="">
                    <li className="btn btn-success" ><Link className="nav-link" to="/set-payment">Set payment</Link></li>
                </ul>
            </div>
            <div className="containerTable" data-aos="zoom-in-down">
                <TableInfo url={url} title="/payrolls"/>
            </div>
        </div>
    )
}
export default Payroll;