import React from 'react'

function AddDocs () {
  return (


      <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <div className='main-title mt-3'>
                    <h5 className="mt-2">Doctor Details</h5>
                    <button1 style={{marginLeft:'880px'}} type="submit" className="btn btn-danger text-white btn-lg">Delete</button1> &nbsp;
                    </div>
                   
                    <p>Basic Infromation</p>
                   
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">First name</label>
                                    <input type="text" name="username" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Last Name</label>
                                    <input type="text" name="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Date of Birth</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Nic</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Gender</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <p>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Contact Number</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Email</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <p>Other Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Ward Specialist</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Ward Specialist--</option>
                                        <option value="1">Cardiology Specialist</option>
                                        <option value="0">Cardiology Specialist</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable">Assigned Ward</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Assigned Ward--</option>
                                        <option value="1">Cardiology Ward o1</option>
                                        <option value="0">Cardiology Ward o2</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-lable"></label>
                                    <button style={{marginLeft:'350px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button> &nbsp;
                                    
                                    <button type="submit" className="btn btn-primary btn-lg">Update</button>
                                </div>
                               
                            </div>

                        </div>
                    </form>
                    </div>
                </div>
            </div>
        

  )
}

export default AddDocs
