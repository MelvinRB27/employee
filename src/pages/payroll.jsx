import {Link} from 'react-router-dom'
import TableInfo from "../helper/tableInfo"
import AlertError from "../helper/alertErro"

const Payroll = () => {
    const url= "PayrollData"

    var data = window.localStorage.getItem("loginData")
    if (!data) {
        return AlertError("You must log in or create an account", "login")
    }

    return (
        <div className="containerPayroll">
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