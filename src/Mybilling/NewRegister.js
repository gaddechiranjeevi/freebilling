import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const NewRegister = () => {

  let days = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
  let months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  let years = ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025", "2026"];

  let [name, updateName] = useState("");
  let [mobile, updateMobile] = useState("");
  let [email, updateEmail] = useState("");
  let [product, updateProduct] = useState("");
  let [amount, updateAmount] = useState("");
  let [gst, updateGst] = useState("");
  let [total, updateTotal] = useState("");
  let [day, updateDay] = useState("01");
  let [month, updateMonth] = useState("01");
  let [year, updateYear] = useState("2023");
  let [GstNo, updateGstNo] = useState("29AAECI4564N1ZY");
  
  let [prd, updatepr] = useState([]);
  
  const allproduct = () =>{
    let input = {
        "key": localStorage.getItem("Key")
    };
    const requestOptions = {
        method : 'POST',
        header : {'Content-Type' : 'application/json' },
        body : JSON.stringify(input) 
    };
    fetch("https://www.campusinterview.in/webapi/Billing/allproduct", requestOptions)
    .then(response => response.json())
    .then(data =>{            
        updatepr(data);
        console.log(data)
    })
}

useEffect(()=>{
  allproduct();
},[1])

const handleProduct=(e)=>{
  const Productname = e.target.value;
  const SelectProduct = prd.find(product=>product.productname === Productname);
  updateProduct(Productname);
  updateAmount(parseInt(SelectProduct.price));
  updateGst(SelectProduct.price*0.18);
  updateTotal(parseInt(SelectProduct.price)+parseInt(SelectProduct.price*0.18));
}

const handlePriceChange=(e)=>{
  const changeprice = e.target.value;
  updateAmount(changeprice);
  let changegst = changeprice * 0.18;
  updateGst(changegst);
  updateTotal(parseInt(amount)+parseInt(gst));
}

const Save=()=>{

  if(name==""||email==""||mobile==""||product==""||amount==""){
      Swal.fire({
        title:"Pls Fill Input Fields",
      icon:"warning"})
  }else{
  let input = {
		"name":  name,
		"email": email,
		"mobile": mobile,           
		"product": product,               
		"amount": amount,
		"gst": gst,
		"total": total,
		"gstno": GstNo,
		"day": day,
		"month": month,
		"year": year,
		"key": localStorage.getItem("Key")
	};
  Swal.fire({
    title: 'Are you sure you want to register the bill?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'Cancel'
  }).then((result) => {

  if (result.isConfirmed) {

	const requestOptions = {
		method : 'POST',
		header : {'Content-Type' : 'application/json' },
		body : JSON.stringify(input) 
  }

	fetch("https://www.campusinterview.in/webapi/Billing/savebill", requestOptions)
	.then(response => response.text())

	.then(data =>{            
    Swal.fire({
      title: 'Bill Registered',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    })
	})

  }
  })
  .catch(error=>{
    Swal.fire({
      title:error.message,
    icon:"error"});
  })
  
 }
}


  return (
    <div>
      <h3 className="text-center text-primary mt-5 mb-4">New Billing</h3>

      <div className="container">
        <div className="row">
          <div className="col-lg-3 mb-4">
            <label>Full Name<span className="text-danger">*</span></label>
            <input type="text" className="form-control" value={name} onChange={(e)=>{updateName(e.target.value)}}/>
          </div>

          <div className="col-lg-3 mb-4">
            <label>Mobile<span className="text-danger">*</span></label>
            <input type="text" className="form-control" value={mobile} onChange={(e)=>{updateMobile(e.target.value)}}/>
          </div>

          <div className="col-lg-3 mb-4">
            <label>Email<span className="text-danger">*</span></label>
            <input type="text" className="form-control" value={email} onChange={(e)=>{updateEmail(e.target.value)}}/>
          </div>

          <div className="col-lg-3 mb-4">
            <label>Product<span className="text-danger">*</span></label>
            <select className="form-select" value={product} onChange={handleProduct}>
              <option>Select Product</option>
              {
                prd.map((prd, index)=>{
                  return(
                    <option key={index}>{prd.productname}</option>
                  )
                })
              }
            </select>
          </div>

          <div className="col-lg-3 mb-4">
            <label>Total Cost</label>
            <input type="text" className="form-control" value={amount} onChange={handlePriceChange}/>
          </div>
          <div className="col-lg-3 mb-4">
            <label>GST Amount</label>
            <input type="text" className="form-control" value={gst} readOnly/>
          </div>
          <div className="col-lg-2 mb-4">
            <label>Day</label>
            <select type="text" className="form-select" value={day} onChange={(e)=>{updateDay(e.target.value)}}>
            {
                days.map((day , index)=>{
                  return(
                    <option key={index}>{day}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col-lg-2 mb-4">
            <label>Month</label>
            <select type="text" className="form-select" value={month} onChange={(e)=>{updateMonth(e.target.value)}}>
            {
                months.map((month , index)=>{
                  return(
                    <option key={index}>{month}</option>
                  )
                })
              }
            </select>
          </div>
          <div className="col-lg-2 mb-4">
            <label>Year</label>
            <select type="text" className="form-select" value={year} onChange={(e)=>{updateYear(e.target.value)}}>
              {
                years.map((year , index)=>{
                  return(
                    <option key={index}>{year}</option>
                  )
                })
              }
            </select>
          </div>

          <div className="col-lg-3 mb-4">
            <label>Total Amount</label>
            <input type="text" className="form-control" value={total} readOnly/>
          </div>
          <div className="col-lg-4 mb-4">
            <label>GST Number<span className="text-danger">*</span></label>
            <input type="text" className="form-control" value={GstNo} onChange={(e)=>{updateGstNo(e.target.value)}}/>
          </div>
        </div>
      </div>
      <div className="text-center">
      <button className="btn btn-primary btn-sm" onClick={Save}>Submit</button>
      </div>
    </div>
  );
};

export default NewRegister;
