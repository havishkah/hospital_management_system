import React from 'react'

function ViewDocDetail () {
  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>Doctor Details</h5>
                    <button style={{marginLeft:'50px'}} type="submit" className="btn btn-danger text-white btn-lg">Delete</button> 
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
                                {/* <label className="form-lable"></label> */}
                                    <button style={{marginLeft:'280px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button> &nbsp;
                                    
                                    <button type="submit" className="btn btn-primary btn-lg">Update</button>
                                </div>
                               
                            </div>
                        
                        </div>
                    </form>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <div className="main-title">
                     <h4>Dr kamals Patients</h4>
                         </div>
                    <div className="col-lg-3 mt-2 mb-2">
                     <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.."/>
                    </div> <br />
                    <div>

        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Word Specialist</th>
                        <th scope="col">Assigned Wards</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>1</td>
                            <td>Nimal</td>
                            <td>999999999V</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td>Onboard</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>2</td>
                            <td>Amal</td>
                            <td>888888888V</td>
                            <td>Cardiology Specialist</td>
                            <td> Cardiology Ward 01</td>
                            <td>Discharged</td>
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

export default ViewDocDetail
