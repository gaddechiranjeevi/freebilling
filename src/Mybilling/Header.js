import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Header = () =>{

  const Logout=()=>{
    Swal.fire({
      title: 'Are u sure want to Logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if(result.isConfirmed){
        localStorage.clear()
        window.location.href=('/')
      }
    });
  }

return(
<nav className="navbar navbar-expand-lg bg-dark  sticky-top">
  <div className="container-fluid bg-dark">
    <a className="navbar-brand text-white" href="#"><strong>My Billing</strong></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex flex-row justify-content-center bg-dark" id="navbarSupportedContent">
      <ul className="navbar-nav">
        
        <li className="nav-item5 ps-4">
          <Link  className="nav-link text-white" to="/"><i className="fa fa-home" aria-hidden="true"></i> Home</Link>
        </li>
        
        <li className="nav-item ps-4">
          <Link className="nav-link text-white" to="/enquiry"><i className="fa fa-headset"></i> Enquiry</Link>
        </li>
       
        <li className="nav-item ps-4">
          <Link className="nav-link text-white" to="/newregister"><i className="fa fa-plus"></i> New Registration</Link>
        </li>

        <li className="nav-item ps-4">
          <Link className="nav-link text-white" to="/managebill"><i className="fa fa-table"></i> Manage Bill</Link>
        </li>

        <li className="nav-item ps-4">
          <Link className="nav-link text-white" to="/manageproduct"><i className="fa fa-list-check"></i> Manage Product</Link>
        </li>

        <li className="nav-item ps-4">
          <Link className="nav-link text-white" to="/editprofile"><i className="fa fa-edit"></i> {localStorage.getItem("User Name")}</Link>
        </li>

        <li className="nav-item ps-4">
          <Link className="nav-link text-danger" to="/" onClick={Logout}><i className="fa fa-sign-out"></i> Logout</Link>
        </li>

      </ul>
    </div>
  </div>
</nav>
)
}

export default Header;