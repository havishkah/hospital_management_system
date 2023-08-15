import React from 'react'

export const DocPatientPrescrip = () => {
  return (
    <main className='main-container'>
      <div className="main-title">
          <h4>Dr. Kamal's Patient Prescription Details</h4>
      </div>

      <br />
      <p style={{color:'grey'}}>Patient Infromation</p>
                   
                   <form>
                       <div className="row">
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Name</label>
                                   <input type="text" name="username" className="form-control" value="Nimal"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Age</label>
                                   <input type="text" name="email" className="form-control" value="34"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Gender</label>
                                   <input type="text" name="phone" className="form-control" value="male"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Date of Birth</label>
                                   <input type="text" name="address" className="form-control" value="1958-12-12"/>
                               </div>
                           </div>
                           <br />
                           <br />
                           <p style={{color:'grey'}}>Prescription Infromation</p>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Category</label>
                                   <input type="text" name="address" className="form-control" value="Cardiology Prescription"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Drug Type</label>
                                   <input type="text" name="address" className="form-control" value="Paracetemol"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Description</label>
                                   <input type="text" name="address" className="form-control" value="Text Text Text Text Text Text Text" />
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Frequency</label>
                                   <input type="text" name="address" className="form-control" value="Text Text Text Text Text Text Text"/>
                               </div>
                           </div>
                           <br /> <br />
                           <p style={{color:'grey'}}>Other Infromation</p>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                   <select className="form-control" name="status" >
                                       <option value="">Cardiology Specialist</option>
                                   </select>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label className="form-lable">Assigned Ward</label>
                                   <select className="form-control" name="status">
                                       <option value="">Cardiology Ward 01</option>
                                   </select>
                               </div>
                           </div>
                           
                           <div className="col-md-6">
                              
                            
                           </div>
                       
                           <div className="col-md-6">
                               <div className="mb-3">
                               {/* <label className="form-lable"></label> */}
                                   <button style={{marginLeft:'380px',width:'100px',height:'48px', fontSize:'22px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button>
                               </div>
                              
                           </div>
                       
                       </div>
                   </form>
    </main>
  )
}
