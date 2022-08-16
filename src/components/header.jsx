import "../css/header.css"
import { NavLink, Link } from "react-router-dom";
import DeteleToken from "../helper/logout";
import logo from '../imgs/logoWhite.png'
const Header = () => {
    var data = window.localStorage.getItem("loginData")


    return(
        <header className="header">
            <nav className="navbar navbar-expand">
                <div className="ctnLogoHeader"> <Link to="/" > <img loading="lazy" src={logo} alt="logo"/>  </Link> </div>
                <div className="containerListHeader">
                    <div className="containerNameLogo">
                        <Link to="/" className="navbar-brand text-uppercase font-weight-bold">Employee Manager</Link>
                    </div>
                    <div className="navbarSupportedContent" >
                        <ul className="navbar-nav">
                            <li className="nav-item active"><NavLink to="/" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></NavLink></li>
                            <li className="nav-item"><NavLink to="/employees" className="nav-link text-uppercase font-weight-bold">Employees</NavLink></li>
                            <li className="nav-item"><NavLink to="/holidays" className="nav-link text-uppercase font-weight-bold">Holidays</NavLink></li>
                            <li className="nav-item"><NavLink to="/payrolls" className="nav-link text-uppercase font-weight-bold">Payroll</NavLink></li>
                            {
                                data ? (
                            
                                <li className="nav-item"><button className="nav-link btn btn-danger" onClick={()=>DeteleToken()} >Logout</button></li>

                                ) : (
                                
                                <li className="nav-item"><NavLink to="/login" className="nav-link text-uppercase font-weight-bold">Register/Login</NavLink></li>

                                )
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;