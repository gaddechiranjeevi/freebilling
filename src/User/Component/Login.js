import { useState } from "react";
import Contact from "./Contact";
import Swal from "sweetalert2";

const Login=()=>{

  let [email, setEMail] = useState('');
  let [password, setPassword] = useState('');

  let goLogin = () =>{
	let input = {
		"email":email,
		"password":password
	};
	if(email==""||password==""){
      Swal.fire({
        title:"Pls fill input fields",
       icon:"warning",
      })
  }else{
	const requestOptions = {
		method : 'POST',
		header : {'Content-Type' : 'application/json' },
		body : JSON.stringify(input) 
	};
	fetch("https://www.campusinterview.in/webapi/Login/logincheck", requestOptions)
	.then(response => response.json())
	.then(responseArray =>{            
		if(responseArray.status=="SUCCESS"){
			Swal.fire({
        title:"Login Successfull",
        icon:"success"
      });
      localStorage.setItem("Key", responseArray.key);
      localStorage.setItem("User Name", responseArray.name);
      window.location.href="/";
		}else{
			Swal.fire({
        title:"Invalid or Details Not Exist",
        icon:"error"})
		}
	})}
}

    return(
        <>
        <section className="container mt-5 mb-5">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h1 className="text-info">
          <i className="fa fa-lock"></i> Login
        </h1>
      </div>
    </div>
    <div className="row mt-4">
      <div className="col-lg-4"></div>
      <div className="col-lg-4">

        <div className="card border-0 shadow-lg">
          <div className="card-header"> Please Login </div>

          <div className="card-body">
            <div className="mb-3">
              <label>E-Mail Id <span className="text-danger">*</span></label>
              <input type="email" className="form-control" value={email} onChange={(e)=>{setEMail(e.target.value)}}/>
            </div>
            <div className="mb-3">
              <label>Password <span className="text-danger">*</span></label>
              <input type="password" className="form-control" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
          </div>
          {/*<!--card body end-->*/}

          <div className="card-footer text-center">
            <button className="btn btn-danger" onClick={goLogin}> Login </button>
          </div>
        </div>
        

      </div>
      <div className="col-lg-4"></div>
    </div>
  </section>

{/*modal start */}
  <Contact />
  {/*modal ends here */}
  </>
    )
}

export default Login;