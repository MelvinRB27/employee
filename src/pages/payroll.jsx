import {Link} from 'react-router-dom'


const Payroll = () => {
    return (
        <div className="containerPayroll">
           <div>
                <div className='inputSearch'>
                    <input type="text" className='from-control' placeholder='Search'/>
                    <button type="button" className="btn btn-outline-success" >Search</button>
                </div>
            </div>
            <div className="ctnList">
                <ul className="">
                    <li ><Link className="nav-link" to="/set-payment">Set payment</Link></li>
                </ul>
            </div>
        </div>
    )
}
export default Payroll;