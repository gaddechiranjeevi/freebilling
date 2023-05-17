import { useState, useEffect } from "react";
import Swal from 'sweetalert2';

const EditProfile = () => {
  let [company, updatecompany] = useState("");
  let [email, updateemail] = useState("");
  let [mobile, updatemobile] = useState("");
  let [city, updatecity] = useState("");
  let [phone, updatephone] = useState("");
  let [contactperson, updatecontactperson] = useState("");
  let [address, updateaddress] = useState("");
  let [website, updatewebsite] = useState("");
  let [profile, updateprofile] = useState("");
  let [businesstype, updatebussiness] = useState("");
  let [password, updatepassword] = useState("");

  let [Bussiness, setBussiness] = useState([]);
  
  const getProfile = () => {
    let input = {
      key: localStorage.getItem("Key"),
    };
    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch(
      "https://www.campusinterview.in/webapi/Billing/editprofile",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        updatecompany(data.company);
        updateemail(data.email);
        updatemobile(data.mobile);
        updatecity(data.city);
        updateaddress(data.address);
        updatecontactperson(data.contactperson);
        updatephone(data.phone);
        updatewebsite(data.website);
        updateprofile(data.profile);
        updatebussiness(data.businesstype);
        updatepassword(data.password);
        console.log(data)
      });
  };

  const allservice = () =>{
    let input = {
      "key": localStorage.getItem("Key")
    };
    const requestOptions = {
      method : 'POST',
      header : {'Content-Type' : 'application/json' },
      body : JSON.stringify(input) 
    };
    fetch("https://www.campusinterview.in/webapi/Billing/allservice", requestOptions)
    .then(response => response.json())
    .then(data =>{            
      setBussiness(data);
    })}


  const Update = () => {
    let input = {
      key: localStorage.getItem("Key"),
      company: company,
      email: email,
      mobile: mobile,
      city: city,
      address: address,
      contactperson: contactperson,
      phone: phone,
      website: website,
      profile: profile,
      businesstype: businesstype,
      password: password,
    };
    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    };
    fetch(
      "https://www.campusinterview.in/webapi/billing/updateprofile",
      requestOptions
    )
      .then((response) => response.text())
      .then((data) => {
        Swal.fire({
            title: 'Profile updated',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false,         
          })
      });
  };

  useEffect(() => {
    getProfile();
    allservice();
  }, [1]);

  // company, mobile, contact person, website, event, city, password, company profile, bussiness type, address, email

  return (
    <>
      <div className="container">
        <div className="text-primary text-center m-5">
          <h4>Edit Details</h4>
        </div>
        <div className="row">
          <div className="col-lg-3 mb-4">
            <label>Company</label>
            <input
              type="text"
              className="form-control"
              value={company}
              onChange={(e) => {
                updatecompany(e.target.value);
              }}
            />
          </div>

          <div className="col-lg-3 mb-4">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              value={email}
              onChange={(e) => {
                updateemail(e.target.value);
              }}
            />
          </div>

          <div className="col-lg-3 mb-4">
            <label>Mobile</label>
            <input
              type="text"
              className="form-control"
              value={mobile}
              onChange={(e) => {
                updatemobile(e.target.value);
              }}
            />
          </div>

          <div className="col-lg-3 mb-4">
            <label>Contact Person</label>
            <input
              type="text"
              className="form-control"
              value={contactperson}
              onChange={(e) => {
                updatecontactperson(e.target.value);
              }}
            />
          </div>

          <div className="col-lg-3 mb-4">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              value={phone}
              onChange={(e) => {
                updatephone(e.target.value);
              }}
              controlled="true"
            />
          </div>

          <div className="col-lg-3 mb-4">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              value={city}
              onChange={(e) => {
                updatecity(e.target.value);
              }}
            />
          </div>

          <div className="col-lg-3 mb-4">
            <label>Webiste</label>
            <input
              type="text"
              className="form-control"
              value={website}
              onChange={(e) => {
                updatewebsite(e.target.value);
              }}
              controlled="true"
            />
          </div>

          <div className="col-lg-3 mb-4">
            <label>Profile</label>
            <input
              type="text"
              className="form-control"
              value={profile}
              onChange={(e) => {
                updateprofile(e.target.value);
              }}
              controlled="true"
            />
          </div>

          <div className="col-lg-3 mb-4">
            <label>Bussiness Type</label>
            <select className="form-select" value={businesstype} onChange={(e)=>{updatebussiness(e.target.value)}}>
              {
                Bussiness.map((data, index)=>{
                  return(
                  <option key={index}>{data.servicename}</option>
                )})
              }
            </select>
          </div>

          <div className="col-lg-3 mb-4">
            <label>Password</label>
            <input
              type="text"
              className="form-control"
              value={password}
              onChange={(e) => {
                updatepassword(e.target.value);
              }}
            />
          </div>

          <div className="col-lg-6 mb-4">
            <label>Address</label>
            <textarea
              type="textarea"
              className="form-control"
              rows="1"
              value={address}
              onChange={(e) => {
                updateaddress(e.target.value);
              }}
            />
          </div>

          <div className="text-center mt-3">
            <button className="btn btn-primary" onClick={Update}>
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
