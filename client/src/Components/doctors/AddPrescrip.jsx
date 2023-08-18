import React from 'react'

export const AddPrescrip = () => {
  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>Add Prescription</h4>
        </div>

        <form>
                       <div className="row">
                           
                           <p className="mt-3" style={{color:'grey'}}>Prescription Infromation</p>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Category</label>
                                   <input type="text" name="address" className="form-control"/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Drug Type</label>
                                   <select className="form-control" name="status">
                                       <option value="">--Select Drug Type--</option>
                                       <option value="01">Paracetamol 01</option>
                                       <option value="02">Paracetamol 02</option>
                                       <option value="03">Paracetamol 03</option>
                                   </select>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Description</label>
                                   <textarea rows="4" cols="50" type="text" name="address" className="form-control" />
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Frequency</label>
                                   <textarea rows="4" cols="50"  type="text" name="address" className="form-control"/>
                               </div>
                           </div>
                           <div className="col-md-6"></div>
                       
                           <div className="col-md-6">
                               <div className="mb-3">
                               {/* <label className="form-lable"></label> */}
                                   <button style={{marginLeft:'280px',width:'100px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button>&nbsp;
                                   <button style={{width:'100px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary text-white btn-lg">Submit</button>
                               </div>
                              
                           </div>
                       
                       </div>
                   </form>
    </main>
  )
}
