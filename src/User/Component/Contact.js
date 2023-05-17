

const Contact=()=>{
    return(
        <div className="modal fade" id="contact" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

         {/*--modal start--> */}
        
         <div className="modal-dialog modal-md">
           <div className="modal-content">
             
             <div className="modal-header bg-info text-white p-3">
               <h1 className="modal-title fs-5" id="exampleModalLabel">Send Your Message</h1>
               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>

             <div className="modal-body">
               <div className="mb-3">
                 <label>Enter Your Name</label>
                 <input type="text" className="form-control"/>
               </div>
               <div className="mb-3">
                 <label>Enter Mobile No</label>
                 <input type="text" className="form-control"/>
               </div>
               <div className="mb-3">
                 <label>Enter e-Mail Id</label>
                 <input type="text" className="form-control"/>
               </div>
               <div className="mb-3">
                 <label>Enter Message</label>
                 <textarea className="form-control"></textarea>
               </div>
             </div>

             <div className="modal-footer justify-content-center">
               <button type="button" className="btn btn-danger">Send Request <i className="fa fa-arrow-right"></i></button>
             </div>

           </div>
         </div>
       
      {/* {/*--modal end--> */}
      </div>
    )
}

export default Contact;