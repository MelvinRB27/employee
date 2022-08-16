import "../css/footer.css"
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer-dark">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>Services</h3>
                            <ul>
                                <li><Link to="/employees">Adm. employees</Link></li>
                                <li><Link to="/holidays">Adm. holidays</Link></li>
                                <li><Link to="/payrolls">Adm. payroll</Link></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>About</h3>
                            <ul>
                                <li><Link to="/company">Company</Link></li>
                                <li><Link to="/team">Team</Link></li>
                                <li><Link to="/careers">Careers</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Employee manager</h3>
                            <p>
                            This platform helps and allows the administrators of a company to have control of their employees, their data, vacations and payroll.
                            </p>
                        </div>
                        <div className="col item social">
                            <Link to="/"><i className="fa fa-facebook"></i></Link>
                            <Link to="/"><i className="fa fa-twitter"></i></Link>
                            <Link to="/"><i className="fa fa-instagram"></i></Link></div>
                    </div>
                    <p className="copyright">Employee manager © 2022</p>
                </div>
            </footer>
        </div>
    )
}
export default Footer;