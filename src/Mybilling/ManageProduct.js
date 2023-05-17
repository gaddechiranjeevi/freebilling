import { useState } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";

const ManageProduct=()=>{

    let [product, updateproduct] = useState([]);

    let [productname, updateproductname] = useState("");
    let [quantity, updatequantity] = useState("");
    let [price, updateprice] = useState("");

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
            updateproduct(data);
            console.log(data)
        })
    }

    const SaveProduct = () =>{

        if(productname==""||price==""||quantity==""){
               Swal.fire({
                title:"Pls Fill Input Fields",
                icon:"warning"
               })
        }else{
        let input = {
            "key": localStorage.getItem("Key"),
            "productname": productname,
            "price": price,
            "qty": quantity
        };
        const requestOptions = {
            method : 'POST',
            header : {'Content-Type' : 'application/json' },
            body : JSON.stringify(input) 
        };
        fetch("https://www.campusinterview.in/webapi/Billing/saveproduct", requestOptions)
        .then(response => response.text())
        .then(message =>{            
            Swal.fire({
                title:message,
                icon:"success",
                s
            });
        })
        allproduct();
    }
    }

    useEffect(()=>{
        allproduct();
    },[1])
    
    return(
        <div>
        <h3 className="text-center text-primary mt-5 mb-4">Manage Product</h3>

        <div className="container">

            <div className="row mt-5">

                <div className="col-lg-3">
                    <h4 className="text-center text-primary mb-4">Add Prdouct</h4><hr/>
                <div className="mb-2">
                    <label>Product Name<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={productname} onChange={obj=>updateproductname(obj.target.value)}/>
                </div>
         
                <div className="mb-2">
                    <label>Quantity<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={quantity} onChange={obj=>updatequantity(obj.target.value)}/>
                </div>
         
                <div className="mb-4">
                    <label>Price<span className="text-danger">*</span></label>
                    <input type="text" className="form-control" value={price} onChange={obj=>updateprice(obj.target.value)}/>
                </div>

                <div className="text-center">
                   <button className="btn btn-primary" onClick={SaveProduct}>Add Product</button>
                </div>
                </div>

                <div className="col-lg-2"></div>
                
                <div className="col-lg-7">
                <h4 className="text-center text-primary mb-4">Prdouct List</h4>
                    <table className="table">
                        <thead className="table-bordered">
                            <tr>
                                <th>S.No</th>
                                <th>Prdouct Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {
                                product.map((data, index)=>{
                                    return(
                                        <tr key={index}>
                                            <td>{data.pid}</td>
                                            <td>{data.productname}</td>
                                            <td>{data.qty}</td>
                                            <td>{data.price}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            

        
        </div>
        
        </div>
    )
};
export default ManageProduct;