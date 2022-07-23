import "../css/header.css"
import { NavLink, Link } from "react-router-dom";
import logo from '../imgs/logoWhite.png'
const Header = () => {

    return(
        <header className="header">
            <nav className="navbar navbar-expand">
                <div className="ctnLogoHeader"> <Link to="/" > <img src={logo} alt="logo"/>  </Link> </div>
                <div className="containerListHeader">
                    <div className="containerNameLogo">
                        <Link to="/" className="navbar-brand text-uppercase font-weight-bold">Employee Manager</Link>
                    </div>
                    <div className="navbarSupportedContent" >
                        <ul className="navbar-nav">
                            <li className="nav-item active"><NavLink to="/" className="nav-link text-uppercase font-weight-bold">Home <span className="sr-only">(current)</span></NavLink></li>
                            <li className="nav-item"><NavLink to="/employees" className="nav-link text-uppercase font-weight-bold">Employees</NavLink></li>
                            <li className="nav-item"><NavLink to="/holidays" className="nav-link text-uppercase font-weight-bold">Holidays</NavLink></li>
                            <li className="nav-item"><NavLink to="/payroll" className="nav-link text-uppercase font-weight-bold">Payroll</NavLink></li>
                            <li className="nav-item"><NavLink to="/login" className="nav-link text-uppercase font-weight-bold">Register/Login</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;