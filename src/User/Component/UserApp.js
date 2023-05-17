import { HashRouter, Routes, Route } from "react-router-dom";
import UserHome from "./Home";
import Footer from "./Footer";
import Service from "./Service";
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact";
import UserHeader from "./Header";
import "../dist/css/bootstrap.css";
import "../dist/js/bootstrap.min.js";


const UserApp=()=>{
    return(
        <HashRouter>
        <UserHeader/>
        <Routes>
          <Route exact path="/" element={<UserHome />}/>
          <Route exact path='/service' element={ <Service />} />
          <Route exact path='/login' element={<Login />}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/contact' element={ <Contact/> }/>
        </Routes>
        <Footer/>
      </HashRouter>
    )
}

export default UserApp;