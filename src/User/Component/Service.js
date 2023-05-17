import { useState, useEffect } from "react";
import Contact from "./Contact";

const Service=()=>{

  let [service, setservice] = useState([]);

  const allservice = () =>{
    let input = {
      "key": "8790879706"
    };
    const requestOptions = {
      method : 'POST',
      header : {'Content-Type' : 'application/json' },
      body : JSON.stringify(input) 
    };
    fetch("https://www.campusinterview.in/webapi/Billing/allservice", requestOptions)
    .then(response => response.json())
    .then(data =>{            
      setservice(data);
    })}

    useEffect(()=>{
      allservice()
    },[1]);

    return(
      <>
        <section className="container mt-4">
          <div className="row mb-5">
            <div className="col-lg-12 text-center">
              <h1 className="text-info"> 
                <i className="fa fa-tools"></i> Our Services 
              </h1>
              <p>
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg
                  dfg dfg dfg dfg dfg dfg fdg dfg dfg dfg dfg dfg dfg dfg dfdfg dfg dfg dfg dfg dfg dfg fdg 
              </p>
            </div>
            {/*<!--12 end-->*/}
          </div>
          {/*<!--row end-->*/}

          <div className="row mb-5 text-center">
            <div className="col-lg-4">
                <div className="p-4 border rounded bg-white">
                    <i className="fa fa-file fa-4x text-primary"></i>
                    <h3> Resume Building </h3>
                    <p>
                      sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                      sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                      sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                    </p>
                    <a href="">Read More...</a>
                </div>
            </div> 
            
            {/*<!--4end-->*/}

            <div className="col-lg-4">
              <div className="p-4 border rounded bg-white">
                <i className="fa fa-mobile fa-4x text-primary"></i>
                <h3> Mobile App Development</h3>
                <p>
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                </p>
                <a href="">Read More...</a>
              </div>
            </div>

            {/*<!--4end-->*/}

            <div className="col-lg-4">
              <div className="p-4 border rounded bg-white">
                <i className="fa fa-desktop fa-4x text-primary"></i>
                <h3> Website Development</h3>
                <p>
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                  sd sdf sdf sdf sdf sdf sdf sdf sdfsd sdf sdf sdf sdf sdf sdf sdf
                </p>
                <a href="">Read More...</a>
              </div>
            </div>
            {/*<!--4end-->*/}
          </div>
          {/*<!--row end-->*/}

          <div className="row mt-4">
            <div className="col-lg-12 text-center">
              <h1 className="text-danger"> Any Services Required ? +91-8792462607 </h1>
            </div>
          </div>

          <div className="row mt-4 myservice">
            {
              service.map((serve, index)=>{
                return(
              <div className="col-lg-3 mb-3"> 
              <p className="p-3 bg-white text-primary" key={index}>{serve.servicename}</p> 
              </div>
            )})
            }
          </div>
        </section>

        
        {/*modal start */}
  <Contact/>
  {/*modal ends here */}
        </>
    )
}

export default Service;