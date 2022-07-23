import "../css/holidays.css"
import {Link} from 'react-router-dom'

const Holidays = () => {
    return (
        <div className="containerHolidays">
            <div>
                <div className='inputSearch'>
                    <input type="text" className='from-control' placeholder='Search'/>
                    <button type="button" className="btn btn-outline-primary" >Search</button>
                </div>
            </div>
            <div className="ctnList">
                <ul className="">
                    <li ><Link className="nav-link" to="/add-holidays">Add holiday</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Holidays;