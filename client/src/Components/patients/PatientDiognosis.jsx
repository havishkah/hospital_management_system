import React from 'react'

function PatientDiognosis () {
  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Diognosis Report</h5>

                    <br/>
                    <br/>
                
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Patient Nic</label>
                                    <input type="text" name="username" className="form-control" />
                                </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>  
                                </div>
                            </div>
            
                            </div>
                            </div>
                    </form>
                    </div>
                </div>
            </main>
        

  )
}

export default PatientDiognosis
