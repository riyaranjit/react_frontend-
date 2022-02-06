import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from './components/Home';
import Register from "./components/Register";
import Login from './components/Login';
import About from './components/About'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Team from './components/Team';
import AdminRegister from './components/adminRegister';
import AdminLogin from './components/adminLogin';
import AdminDashboard from './components/adminDashboard';
import AdminCategory from './components/adminCategory';
import Addservice from './components/addService';
import Viewservice from './components/viewService';
import "react-toastify/dist/ReactToastify.css";
import UpdateService from './components/updateService';
import Service from './components/Service';
import Category from './components/Category';
import Cart from './components/Cart';
import Appointment from './components/Appointment';




function App() {

  return (

   <>
   <BrowserRouter>
   <Routes>
            <Route path= '/' element={<Home/>} />
            <Route path= '/register' element={<Register/>} />
            <Route path= '/login' element={<Login/>} />
            <Route path= '/about' element={<About/>} />
            <Route path= '/team' element={<Team/>} />
            <Route path= '/adminlogin' element={<AdminLogin/>} />
            <Route path= '/adminregister' element={<AdminRegister/>} />
            <Route path= '/dashboard' element={<AdminDashboard/>} />
            <Route path= '/admincategory' element={<AdminCategory/>} />
            <Route path= '/addservice' element={<Addservice/>} />
            <Route path= '/viewservice' element={<Viewservice/>} />
            <Route path= '/service/update/:sid' element={<UpdateService/>} />
            <Route path= '/service/category/:cid' element={<Service/>} />
            <Route path= '/catgeory' element={<Category/>}/>
            <Route path= '/cart' element={< Cart/>} />
            <Route path='/appointment' element={<Appointment/>}/>




         
        </Routes>
 
   </BrowserRouter>
   
   </>
   
  );
}

export default App;
