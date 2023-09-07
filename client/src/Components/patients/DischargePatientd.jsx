import React, { useState,useEffect } from 'react'
// import Service from '../../../utilities/http';
import {Link,useNavigate} from 'react-router-dom'

export const DischargePatientd = () => {

  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>VIEW DISCHARGE PATIENTS</h4>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.." onChange={ e => handlesearchArea(e.target.value)}/>
        </div> <br />
        <div>
        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Gender</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                   
                            <tr>
                            <td>1</td>
                            <td>Hashan</td>
                            <td>9834562873V</td>
                            <td>0773426373</td>
                            <td>Male</td>
                            <td>
                              
                            <button type="button" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button>
                            </td>
                            </tr> 

                            <tr>
                            <td>2</td>
                            <td>Ashan</td>
                            <td>9834562673V</td>
                            <td>0773426377</td>
                            <td>Male</td>
                            <td>
                              
                            <button type="button" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button>
                            </td>
                            </tr> 
                  


                    </tbody>
                </table>
            </div>
    </main>
  )
}
