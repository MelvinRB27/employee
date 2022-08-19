import "../css/home.css"
import imgEmplyee from "../imgs/employees.png"
import imgHoliday from "../imgs/Holidays.png"
import imgPayroll from "../imgs/payroll.png"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="containerHome">
            <div>
                <div className="ctnBannerHome" data-aos="fade-left">  
                    <div className="ctnBannerImage">
                        <img loading="lazy" src={imgEmplyee} alt="img" />
                    </div>
                    <h1>
                        Manage all your employee data with confidence.
                        <br/>
                        <Link to="/employees" rel="nofollow">Here</Link>
                    </h1>
                </div>

                <div className="ctnBannerHome center" data-aos="fade-up">
                    <div className="ctnBannerImage">
                        <img loading="lazy" src={imgHoliday} alt="img" />
                    </div>	
                    <h1>
                        Organize, supervise and establish the vacations of your employees.
                        <br/>
                        <Link to="/holidays" rel="nofollow">Here</Link>

                    </h1>  	
                </div>

                <div className="ctnBannerHome" data-aos="fade-right">  	
                    <div className="ctnBannerImage">
                        <img loading="lazy" src={imgPayroll} alt="img" />
                    </div>	
                    <h1>
                        Organize the data of the payroll of each of your employees.
                        <br/>
                        <Link to="/payrolls" rel="nofollow">Here</Link>

                    </h1>
                </div>
            
            </div>
        </div>
    )
}

export default Home;