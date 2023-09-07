import React from 'react'
import { Link } from 'react-router-dom'

function ViewDiagnosis () {
  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>Diagnosi Card Details</h5>
                     
                    </div>
                   
                    <p className="mt-3" style={{color:'grey'}}>Patient Information</p>
                   
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Name</label>
                                    <input type="text" name="username" className="form-control" input value="Nimal"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Age</label>
                                    <input type="text" name="email" className="form-control" input value="34" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Gender</label>
                                    <input type="text" name="phone" className="form-control" input value="Male" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">BHT No</label>
                                    <input type="text" name="address" className="form-control" input value="21" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Admitted Date</label>
                                    <input type="text" name="address" className="form-control" input value="2023-10-23" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Discharged Date</label>
                                    <input type="text" name="address" className="form-control" input value="2023-12-23" />
                                </div>
                            </div>
                            <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                            <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
                            <button style={{marginRight:'40px', height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg"><b>Edit</b></button> 
                            </div>  
                            
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Presenting Complaint</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Diagnoses</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">HR</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">BP</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">IX</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Management</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Discharge Medication</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Plan</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                {/* <label className="form-lable"></label> */}
                                    <Link to='/#'><button style={{marginLeft:'280px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp; 
                                    <button style={{height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary text-white btn-lg">Generate Report</button> &nbsp;
                                    
                                    
                                </div>
                               
                            </div>
                        
                        </div>
                    </form>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    
                
            </div>

                
            </main>
        

  )
}

export default ViewDiagnosis
