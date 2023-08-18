import React from 'react'

export const MedicalReport = () => {
  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>MEDICAL REPORT</h4>
        </div>

        <form>
                       <div className="row">
                           
                           <p className="mt-3" style={{color:'grey'}}>Patient Infromation</p>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Name</label>
                                   <input type="text" name="address" className="form-control"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">NIC</label>
                                   <input type="text" name="address" className="form-control"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                           <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Report Type</label>
                                   <select className="form-control" name="status">
                                       <option value="">--Select Report Type--</option>
                                       <option value="01">Blood Report</option>
                                       <option value="02">Heart Report</option>
                                       <option value="03">BP Report</option>
                                   </select>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Report Title</label>
                                   <input type="text" name="address" className="form-control"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-6">
                                   <label style={{fontSize:'14px'}} className="form-lable">Choose Report</label>
                                   <input type="file" name="address" className="form-control"/>
                               </div>
                           </div>
                           <div className="col-md-6"></div>
                           <div className="col-md-6"></div>
                           <div className="col-md-6">
                               <div className="mb-3">
                               {/* <label className="form-lable"></label> */}
                                   <button style={{marginLeft:'280px',width:'100px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button>&nbsp;
                                   <button style={{width:'100px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary text-white btn-lg">Upload</button>
                               </div>
                              
                           </div>
                       
                       </div>
                   </form>
    </main>
  )
}
