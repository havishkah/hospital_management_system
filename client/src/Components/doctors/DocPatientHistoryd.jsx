import React from 'react'

export const DocPatientHistoryd = () => {
  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>Dr. Kamal's Patient History Details</h4>
        </div>

        <br />
      <p className="mt-3" style={{color:'grey'}}>Patient Infromation</p>
                   
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
                           <p className="mt-3" style={{color:'grey'}}>Patient Status</p>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Admit Date</label>
                                   <input type="text" name="address" className="form-control" value="2023-05-01"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Discharged Date</label>
                                   <input type="text" name="address" className="form-control" value="2023-07-01"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Status</label>
                                   <input type="text" name="address" className="form-control" value="Discharge" />
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Comment</label>
                                   <input type="text" name="address" className="form-control" value="Normal"/>
                               </div>
                           </div>
                           <br /> <br />
                           <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
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
                                   <label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
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
                                   <button style={{marginLeft:'-80px',width:'280px',height:'48px', fontSize:'22px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">View Prescription</button>&nbsp;
                                   <button style={{width:'280px',height:'48px', fontSize:'22px'}} type="submit" className="btn btn-primary text-white btn-lg">View Diagnosis Report</button>
                               </div>
                              
                           </div>
                       
                       </div>
                   </form>
    </main>
  )
}
