import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Employees from './pages/employees';
import Holidays from './pages/holidays';
import Payroll from './pages/payroll';
import Login from './pages/login';
import FormEmployee from './components/formEmployee';
import FormHolidays from './components/formHolidays';
import FormPayroll from './components/formPayroll';
import ScrollToTop from 'react-scroll-to-top'


import { Routes, Route} from 'react-router-dom'

const App = () =>  (
  <div className='containerApp'>
    <ScrollToTop/>
    <Header />
    <br/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/employees" element={<Employees/>} />
      <Route path="/holidays" element={<Holidays/>} />
      <Route path="/payroll" element={<Payroll/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/add-employees" element={<FormEmployee/>} />
      <Route path="/add-holidays" element={<FormHolidays/>} />
      <Route path="/set-payment" element={<FormPayroll/>} />

    </Routes>

    <br/>
    <Footer />
    
  </div>
);


export default App;
