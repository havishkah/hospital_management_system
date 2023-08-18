import React from 'react'

export const DocPatientHistory = () => {
  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>Dr. Kamal's Patients' History</h4>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.."/>
        </div>
        <br />
        <div>
        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Date & Time</th>
                        <th scope="col">Diagnosis</th>
                        <th scope="col">Prescription</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>1</td>
                            <td>2023-10-12   10 A.M.</td>
                            <td>text text text text</td>
                            <td>Prescription 01</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>2</td>
                            <td>2023-10-12   10 A.M.</td>
                            <td>text text text text</td>
                            <td>Prescription 01</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>3</td>
                            <td>2023-10-12   10 A.M.</td>
                            <td>text text text text</td>
                            <td>Prescription 01</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>4</td>
                            <td>2023-10-12   10 A.M.</td>
                            <td>text text text text</td>
                            <td>Prescription 01</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>5</td>
                            <td>2023-10-12   10 A.M.</td>
                            <td>text text text text</td>
                            <td>Prescription 01</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>6</td>
                            <td>2023-10-12   10 A.M.</td>
                            <td>text text text text</td>
                            <td>Prescription 01</td>
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
