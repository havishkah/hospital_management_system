import React from 'react'

export const ViewBeds = () => {
  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>VIEW BEDS</h4>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.."/>
        </div> <br />
        <div>
        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">Bed ID</th>
                        <th scope="col">Bed Category</th>
                        <th scope="col">Ward Specialist</th>
                        <th scope="col">Assigned Ward</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>1</td>
                            <td>Cardiology-Ward01-Electrical</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td>Occupied</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>2</td>
                            <td>Cardiology-Ward01-Electrical</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td>Available</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>3</td>
                            <td>Cardiology-Ward01-Electrical</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td>Occupied</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>4</td>
                            <td>Cardiology-Ward01-Electrical</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td>Available</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>5</td>
                            <td>Cardiology-Ward01-Electrical</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td>Occupied</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>6</td>
                            <td>Cardiology-Ward01-Electrical</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td>Available</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                    </tbody>
                </table>
            </div>
    </main>
  )
}
