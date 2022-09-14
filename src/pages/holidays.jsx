import TableInfo from "../helper/tableInfo"
import AlertError from "../helper/alertErro"

import {Link} from 'react-router-dom'

const Holidays = () => {
    const url= "HolidayData"

    var data = window.localStorage.getItem("loginData")
    if (!data) {
        return AlertError("You must log in or create an account", "login")
    }

    return (
        <div className="containerHolidays">
            <div className="ctnList">
                <ul className="">
                    <li className="btn btn-primary"><Link className="nav-link" to="/add-holidays">Add holiday</Link></li>
                </ul>
            </div>
            <div className="containerTable" data-aos="zoom-in-down">
                <TableInfo url={url} title="/holidays"/>
            </div>
        </div>
    )
}
export default Holidays;