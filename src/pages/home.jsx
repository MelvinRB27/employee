import "../css/home.css"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="containerHome">
            <div>
                <div className="ctnBannerHome">  
                    <div className="ctnBannerImage">
                        <img src="https://itsm.tools/wp-content/uploads/2020/07/successful-employees.png" alt="img" />
                    </div>
                    <h1>
                        Manage all your employee data with confidence.
                        <br/>
                        <Link to="/employees" rel="nofollow">To go</Link>
                    </h1>
                </div>

                <div className="ctnBannerHome">
                    <div className="ctnBannerImage center">
                        <img src="https://paytmblogfinal.wpengine.com/wp-content/uploads/2022/05/5_Holidays_Post-Office-List-of-Holidays-2022-Gazetted-Public-and-Bank-Holidays-in-India.png" alt="img" />
                    </div>	
                    <h1>
                        Organize, supervise and establish the vacations of your employees.
                        <br/>
                        <Link to="/holidays" rel="nofollow">To go</Link>

                    </h1>  	
                </div>

                <div className="ctnBannerHome">  	
                    <div className="ctnBannerImage">
                        <img src="https://y3z4t4r9.rocketcdn.me/wp-content/uploads/2021/01/what-is-payroll.png" alt="img" />
                    </div>	
                    <h1>
                        Organize the data of the payroll of each of your employees.
                        <br/>
                        <Link to="/payroll" rel="nofollow">To go</Link>

                    </h1>
                </div>
            
            </div>
        </div>
    )
}

export default Home;