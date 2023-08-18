import React from 'react'

function AddBeds () {
  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Add Beds</h5>
                    <p className="mt-3" style={{color:'grey'}}>Ward & Bed Infromation</p>
                    <form>
                        <div className="row">
                            
                            <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Ward Specialist--</option>
                                        <option value="1">Cardiology Specialist</option>
                                     
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Assigned Ward--</option>
                                        <option value="1">Cardiology Ward 01</option>
                                        <option value="1">Cardiology Ward 02</option>
                                        <option value="1">Cardiology Ward 02</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Bed Category</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Assigned Ward--</option>
                                        <option value="1">Bed 01</option>
                                        <option value="1">Bed 02</option>
                                        <option value="1">Bed 03</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Description About Bed</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Assigned Ward--</option>
                                        <option value="1">Bed 01</option>
                                        <option value="1">Bed 02</option>
                                        <option value="1">Bed 03</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-lable"></label>
                                    <button style={{marginLeft:'320px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button> &nbsp;
                                    
                                    <button style={{height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary btn-lg">Submit</button>
                                </div>
                               
                            </div>

                        </div>
                    </form>
                    </div>
                </div>
            </main>
        

  )
}

export default AddBeds
