import { Link } from "react-router-dom";


const UserHeader=()=>{
    return(
        <>
        <section className="bg-info p-2 text-white">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-6 col-sm-6 col-6">
                        <i className="fa fa-headset"></i> +91-8884166608
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6  col-md-6 col-sm-6 col-6 text-end">
                            <i className="fab fa-facebook p-1"></i>
                            <i className="fab fa-twitter p-1"></i>
                            <i className="fab fa-linkedin p-1"></i>
                            <i className="fab fa-instagram p-1"></i>
                    </div>
                </div>
            </div>
        </section>
        {/*<!--top nav start-->*/}
          <nav className="navbar navbar-expand-md navbar-dark sticky-top bg-dark p-3">
            <div className="container-fluid">
              <Link className="navbar-brand">
                <i className="fa fa-search fa-lg"></i> Free Billing
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/"><i className="fa fa-home"></i> Home</Link>
                  </li>
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/service"><i className="fa fa-tools"></i> Our Services</Link>
                  </li>
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/login"><i className="fa fa-lock"></i> Login</Link>
                  </li>
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/register"><i className="fa fa-user-plus"></i> Create Account</Link>
                  </li>
                  <li className="nav-item ps-4">
                    <Link className="nav-link active" to="/contact" data-bs-toggle="modal" data-bs-target="#contact">
                      <i className="fa fa-headset"></i> Contact Us
                    </Link>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
       {/* <!--top nav end--> */}
       </>
    )
}

export default UserHeader;