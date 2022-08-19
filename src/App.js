import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Employees from './pages/employees';
import Holidays from './pages/holidays';
import Payroll from './pages/payroll';
import Login from './pages/login';
import PageNotFound from './pages/paneNotFound';
import FormEmployee from './components/formEmployee';
import FormHolidays from './components/formHolidays';
import FormPayroll from './components/formPayroll';
import ScrollToTop from 'react-scroll-to-top'
import Aos from "aos"
import { useEffect } from 'react';

import { Routes, Route} from 'react-router-dom'

const App = () =>  {
  useEffect(() => {
    Aos.init({duration: 1000});
  }, []);
  
  return(
    <div className='containerApp'>
      <ScrollToTop/>
      <Header />
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employees" element={<Employees/>} />
        <Route path="/holidays" element={<Holidays/>} />
        <Route path="/payrolls" element={<Payroll/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/add-employees" element={<FormEmployee/>} />
        <Route path="/add-holidays" element={<FormHolidays/>} />
        <Route path="/set-payment" element={<FormPayroll/>} />
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
  
      <Footer />
      
    </div>
  );
}




export default App;
