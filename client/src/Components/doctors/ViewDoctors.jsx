import React from 'react'

export const ViewDoctors = () => {
  return (
    <main className='main-container'>
       <div className="main-title">
          <h4>VIEW DOCTORS</h4>
       </div>
       <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.."/>
        </div> <br />
        <div>
        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Doctor Name</th>
                        <th scope="col">Ward Specialist</th>
                        <th scope="col">Assigned Ward</th>
                        <th scope="col">No of patients assigned</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>1</td>
                            <td>Dr.Kamal</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td className='text-center'>03</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>2</td>
                            <td>Dr.Kamal</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td className='text-center'>03</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>3</td>
                            <td>Dr.Kamal</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td className='text-center'>03</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>4</td>
                            <td>Dr.Kamal</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td className='text-center'>03</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>5</td>
                            <td>Dr.Kamal</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td className='text-center'>03</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>6</td>
                            <td>Dr.Kamal</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 01</td>
                            <td className='text-center'>03</td>
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
