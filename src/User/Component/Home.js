import { useEffect, useState } from "react";
import Contact from "./Contact";

const UserHome=()=>{

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
        <div>
   { /*<!--banner start--> */}
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>

          <div className="carousel-inner">
            
            <div className="carousel-item active">
              <img src="1.jpg" height="500" width="100%"/>
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Example headline.</h1>
                  <p>Some representative placeholder content for the first slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="2.jpg" height="500" width="100%"/>
              <div className="container">
                <div className="carousel-caption">
                  <h1>Another example headline.</h1>
                  <p>Some representative placeholder content for the second slide of the carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
                </div>
              </div>
            </div>  

            <div className="carousel-item">
              <img src="3.jpg" height="500" width="100%"/>
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>One more for good measure.</h1>
                  <p>Some representative placeholder content for the third slide of this carousel.</p>
                  <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
                </div>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>
       
       {/* <!--banner end--> */}

        <section className="bg-primary text-white p-5">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-12 text-center">
                <h1> Firstenquiry Digital Media </h1>
                <p>
                  asd asdasd asda sdas dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                  asd asdasd asda sdas dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                  asd asdasd asda sdas dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                  asd asdasd asda sdas dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                  asd asdasd asda sdas dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd
                  asd asdasd asda sdas dasd asd asd asd asd asd asd asd asd asd asd asd asd asd asd 
                </p>
              </div>
            </div>
            
            {/* <!--row end--> */}

            <div className="row">
              <div className="col-lg-9">
                  <h3 className="text-center mb-4"> Our Products </h3>
                  <div className="row">
                      <div className="col-lg-3 mb-3"> <img src="1.jpg" className="img-fluid rounded"/> </div>
                      <div className="col-lg-3 mb-3"> <img src="2.jpg" className="img-fluid rounded"/> </div>
                      <div className="col-lg-3 mb-3"> <img src="3.jpg" className="img-fluid rounded"/> </div>
                      <div className="col-lg-3 mb-3"> <img src="4.jpg" className="img-fluid rounded"/> </div>
                  </div> 
                  {/*--row end--> */}
              </div>
               {/*--9 end--> */}
              <div className="col-lg-3 text-center">
                <h3 className="text-center mb-4"> Contact Us </h3>
                <div className="bg-light p-1 rounded">
                   <i className="fa fa-map-marker fa-3x text-warning"></i>
                   <p className="text-dark">
                      #123, Firstenquiry Digital Media,
                      Marathahalli Bangalore.
                      Mobile - 8792462607
                   </p>
                </div>
              </div> {/*--3 end--> */}
            </div> {/*--row end-->*/}
          </div>
        </section>

        <section className="p-5 bg-light">
          <div className="container">
            <div className="row mb-4">
              <div className="col-lg-12 text-center">
                  <h2> Our Services </h2>
              </div>
            </div>{/*--row end--> */}

            <div className="row mt-4">
              
                  {
                    service.map((serve, index)=>{
                      return(
                        <div className="col-lg-3 mb-3"> 
                      <p className="p-3 bg-white text-primary" key={index}>{serve.servicename}</p>
                      </div>
                      )
                    })
                  }
            </div>

          </div>
          <Contact/>
        </section>

       
       </div>
    )
}

export default UserHome;