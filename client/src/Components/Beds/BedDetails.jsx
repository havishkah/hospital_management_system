import React from 'react'
import {Link} from 'react-router-dom'

export const BedDetails = () => {
  return (
    <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>Bed Details</h5>
                    <button style={{height:'40px', fontSize:'16px'}} type="button" className="btn btn-danger text-white btn-lg">Delete Bed</button> 
                    </div>
                   
                    <p className="mt-3" style={{color:'grey'}}>Ward & Bed Infromation</p>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                    <select className="form-control" name='status'>
                                      <option value="">--Select Ward Specialist--</option>
                                      <option value="Cardiology Specialist">Cardiology Specialist</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <select className="form-control">
                                        <option value="">--Select Assigned Ward</option>
                                        <option value="Cardiology Ward 01">Cardiology Ward 01</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Bed Category</label>
                                    <select className="form-control" name="status" >
                                        <option value="">--Select Bed Category--</option>
                                        <option value="Electrict">Electrict</option>
                                        <option value="Semi-electrict">Semi-electrict</option>
                                        <option value="Manual">Manual</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Description About Bed</label>
                                    <textarea rows="1" cols="50" type="text" name="bed_descrip" className="form-control" />
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                {/* <label className="form-lable"></label> */}
                                    <Link to='/allbed'><button style={{marginLeft:'360px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp; 
                                    
                                    <button style={{height:'40px', fontSize:'16px'}} type="button" className="btn btn-primary btn-lg">Update</button>
                                </div>
                               
                            </div>
                        
                        </div>
                    </form>
                    </div>
                    </div>
                    </main>
  )
}
