import Contact from "./Contact";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";

const Register=()=>{

  let [fname, updateFName] = useState("")
  let [lname, updateLName] = useState("")
  let [email, updateEmail] = useState("")
  let [mobile, updateMobile] = useState("")
  let [password, updatePassword] = useState("")
  let [crnpass, updateCrnPass] = useState("")
  let [address, updateAddress] = useState("")

  const Register=()=>{
  if(fname==""||lname==""||email==""||mobile==""||password==""||crnpass==""){
     Swal.fire({
      title: "Pls Check input fields empty",
      icon:"warning"});
  }else if(password !== crnpass){
     Swal.fire({
      title:"Password Not Matching",
      icon:"error",
    timer:5000})
  }else{
  let input = {
    "fname":fname, 
    "lname":lname,
    "email":email, 
    "password":password, 
    "mobile":mobile, 
    "address":address
  };
  const requestOptions = {
  method : 'POST',
  header : {'Content-Type' : 'application/json' },
  body : JSON.stringify(input) 
  };
  fetch("https://www.campusinterview.in/webapi/billing/register", requestOptions)
  .then(response => response.text())
  .then(data =>{            
    Swal.fire({
      icon:'success',
      title:"Register Successfull",
      showConfirmButton: false,
      timer: 2000,
    })
  })
}}

    return(
      <>
        <section className="container mt-5 mb-5">
              <div className="row">
                  <div className="col-lg-12 text-center">
                      <h1 className="text-info"> 
                        <i className="fa fa-user-plus"></i> Create New Account 
                      </h1>
                  </div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">

                  <div className="card border-0 shadow-lg">
                    <div className="card-header"> Enter Your Details </div>

                    <div className="card-body"> 
                        <div className="row mb-3">
                            <div className="col-lg-6">
                                <label>First Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={fname} onChange={(e)=>{updateFName(e.target.value)}}/>
                            </div>
                            <div className="col-lg-6">
                                <label>Last Name <span className="text-danger">*</span></label>
                                <input type="text" className="form-control" value={lname} onChange={(e)=>{updateLName(e.target.value)}}/>
                            </div>
                        </div> 
                        {/*<!--1 row end -->*/}

                        <div className="row mb-3">
                          <div className="col-lg-6">
                              <label>E-Mail id <span className="text-danger">*</span></label>
                              <input type="email" className="form-control" value={email} onChange={(e)=>{updateEmail(e.target.value)}}/>
                          </div>
                          <div className="col-lg-6">
                              <label>Mobile <span className="text-danger">*</span></label>
                              <input type="number" className="form-control" value={mobile} onChange={(e)=>{updateMobile(e.target.value)}}/>
                          </div>
                        </div> 
                        {/*<!--1 row end -->*/}

                        <div className="row mb-3">
                          <div className="col-lg-6">
                              <label>Password <span className="text-danger">*</span></label>
                              <input type="password" className="form-control" value={password} onChange={(e)=>{updatePassword(e.target.value)}}/>
                          </div>
                          <div className="col-lg-6">
                              <label>Confirm Password <span className="text-danger">*</span></label>
                              <input type="password" className="form-control" value={crnpass} onChange={(e)=>{updateCrnPass(e.target.value)}}/>
                          </div>
                        </div> 
                        {/*<!--1 row end -->*/}
                         
                        <div className="row">
                            <div className="col-lg-12">
                                <label>Full Address</label>
                                <textarea className="form-control" value={address} onChange={(e)=>{updateAddress(e.target.value)}}></textarea>
                            </div>
                        </div>
                    </div>
                    {/*<!--card body end-->*/}

                    <div className="card-footer text-center">
                      <button className="btn btn-danger" onClick={Register}> Register </button>
                    </div>
                  </div>
                  {/*<!--card end-->*/}

                </div>
                {/*<!-- 6end -->*/}
                <div className="col-lg-3"></div>
              </div>
          </section>

          {/*modal start */}
                <Contact/>
          {/*modal ends here */}
</>
    )
}

export default Register;