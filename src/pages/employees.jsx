import "../css/employees.css"
import {Link} from 'react-router-dom'

const Employees = () => {
    return (
        <div className="containerEmployees">
            <div>
                <div className='inputSearch'>
                <input type="text" className='from-control' placeholder='Search'/>
                <button type="button" className="btn btn-outline-danger" >Search</button>
                </div>
            </div>
            <div className="ctnList">
                <ul className="">
                    <li ><Link className="nav-link" to="/add-employees">Add employee</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Employees;