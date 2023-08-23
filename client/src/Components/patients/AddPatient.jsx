import React from 'react'

function AddPatient () {
  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Add Patients</h5>
                    <p className="mt-3" style={{color:'grey'}}>Basic Infromation</p>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">First name</label>
                                    <input type="text" name="username" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Last Name</label>
                                    <input type="text" name="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}}className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Date of Birth</label>
                                    <input type="date" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Nic</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Gender</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Gender--</option>
                                        <option value="1">Male</option>
                                        <option value="1">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Age</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <p className="mt-3" style={{color:'grey'}}>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Contact Number</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Email</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Address</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Emergency Contact Number</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Doctor Name</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Doctor Name--</option>
                                        <option value="1">Dr. Kamal</option>
                                     
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">BHT No</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Ward Specialist--</option>
                                        <option value="1">Cardiology Ward 01</option>
                                        <option value="1">Cardiology Ward 02</option>
                                        <option value="1">Cardiology Ward 02</option>
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
                                    <label style={{fontSize:'14px'}} className="form-lable"> Ward Bed</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Ward Bed--</option>
                                        <option value="1">Cardiology Ward 01</option>
                                        <option value="1">Cardiology Ward 02</option>
                                        <option value="1">Cardiology Ward 02</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Diagnosis</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" />
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

export default AddPatient
