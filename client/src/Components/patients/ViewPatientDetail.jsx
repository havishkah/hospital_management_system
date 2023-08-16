import React from 'react'

function AddDocs () {
  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5 className="mt-2">Patient Thivanka Details</h5>
                    <div>
                    <button style={{marginLeft:'400px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Add Prescription</button> &nbsp;
                    <button style={{height:'40px', fontSize:'16px'}}type="submit" className="btn btn-primary text-white btn-lg">View Diagnosis</button> &nbsp;
                    <button style={{height:'40px', fontSize:'16px'}}type="submit" className="btn btn-danger text-white btn-lg">Discharge</button> 
                    </div>
                    </div>

                    <p className="mt-3" style={{color:'grey'}}>Basic Infromation</p>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">First name</label>
                                    <input type="text" name="username" className="form-control" input value="Thivanka" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Last Name</label>
                                    <input type="text" name="email" className="form-control" input value="Perera"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}}className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" input value="T.Perera" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Date of Birth</label>
                                    <input type="text" name="address" className="form-control" input value="1938-11-21" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Nic</label>
                                    <input type="text" name="address" className="form-control" input value="88888888V" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Gender</label>
                                    <input type="text" name="address" className="form-control" input value="Male" />
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Age</label>
                                    <input type="text" name="address" className="form-control" input value="43" />
                                </div>
                            </div>
                            <p className="mt-3" style={{color:'grey'}}>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Contact Number</label>
                                    <input type="text" name="address" className="form-control" input value="0775456781"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Email</label>
                                    <input type="text" name="address" className="form-control" input value="thivankaperera@gmail.com" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Address</label>
                                    <input type="text" name="address" className="form-control" input value="No123, Galle Road, Colombo 07"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Emergency Contact Number</label>
                                    <input type="text" name="address" className="form-control" input value="0713456826" />
                                </div>
                            </div>
                            <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
                            <div className="col-md-6">
                            <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                    <input type="text" name="address" className="form-control" input value="Cardiology Specialist" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <input type="text" name="address" className="form-control" input value="Cardiology Ward 01" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Ward Bed</label>
                                    <input type="text" name="address" className="form-control" input value="Cardiology-Ward01-Electrical" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">BHT No</label>
                                    <input type="text" name="address" className="form-control" input value="03" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Doctor's Name</label>
                                    <input type="text" name="address" className="form-control" input value="Dr.Kamal" />
                                </div>
                            </div>
                           
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Diagnosis</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="03" />
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

export default AddDocs
