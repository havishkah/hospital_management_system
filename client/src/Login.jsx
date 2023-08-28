import React from 'react'

function Login() {
  return (
    <div className='main-container'>
       
                <div className="row w-25 m-auto">
                    <div className="col-md-12">
                    <h5 className="mt-2">Login User </h5>
                    <form>
                        <div className="row">
                            
                            
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Username</label>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Password</label>
                                    <input type="password"/>
                                </div>
                            </div>
                           
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-lable"></label>
                                    <button style={{height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary btn-lg">Submit</button>
                                </div>
                               
                            </div>

                        </div>
                    </form>
                    </div>
                </div>
        
    </div>
  )
}

export default Login
