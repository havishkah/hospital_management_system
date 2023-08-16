import React from 'react'

function AddDocs () {
  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>Dr.Kamals Patient Details</h5>
                    <button style={{marginLeft:'50px'}} type="submit" className="btn btn-danger text-white btn-lg">Discharge</button> 
                    </div>
                   
                    <p className="mt-3" style={{color:'grey'}}>Basic Infromation</p>
                   
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">First name</label>
                                    <input type="text" name="username" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Last Name</label>
                                    <input type="text" name="email" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Date of Birth</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Nic</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Gender</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Age</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>


                            <p className="mt-3" style={{color:'grey'}}>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Contact Number</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Email</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Address</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Emergency Contact Number</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            
                           
                        
                            <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Ward Bed</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">BHT No</label>
                                    <input type="text" name="address" className="form-control" />
                                </div>
                            </div>
                            
                            
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                {/* <label className="form-lable"></label> */}
                                    <button style={{marginLeft:'30px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">View Patient History</button> &nbsp;
                                    
                                    <button type="submit" className="btn btn-primary btn-lg">View Diagonosis Report</button>
                                </div>
                               
                            </div>
                        
                        </div>
                    </form>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <div className="main-title">
                     <h4>Dr kamals Patient Prescription Details</h4>
                         </div>
                    <div className="col-lg-3 mt-2 mb-2">
                     <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.."/>
                    </div> <br />
                    <div>

        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        
                        <th scope="col">Issue Date</th>
                        <th scope="col">Category</th>
                        
                        <th scope="col"></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>001</td>
                            <td>2023-10-12</td>
                            <td>Cardiology Prescription</td>
                            
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>002</td>
                            <td>2023-10-12</td>
                            <td>Cardiology Prescription</td>
                            
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 


                    </tbody>
                </table>
            </div>

                </div>
            </main>
        

  )
}

export default AddDocs
