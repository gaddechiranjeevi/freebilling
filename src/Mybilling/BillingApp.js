import { HashRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Home from "./Home";
import Enquiry from "./Enquiry";
import NewRegister from "./NewRegister";
import Manage from "./Manage";
import EditProfile from "./EditProfile";
import ManageProduct from "./ManageProduct";

const BillApp=()=>{
    return(
      <div className="bill">
    <HashRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/enquiry" element={<Enquiry />} />
        <Route exact path="/newregister" element={<NewRegister />} />
        <Route exact path="/managebill" element={<Manage />} />
        <Route exact path="/manageproduct" element={<ManageProduct/>} />
        <Route exact path="/editprofile" element={<EditProfile/>} />
      </Routes>
    </HashRouter>
    </div>
    )
}
export default BillApp;