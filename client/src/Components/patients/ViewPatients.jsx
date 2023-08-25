import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';

export const ViewPatients = () => {

  const [patients,setPatients] = useState([]);
  const service=new Service();

  useEffect(() => {
    const respone = service.get ('patient/') 
    respone.then((res) => {
      console.log (res.data)
      setPatients(res.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
 
  }, []);

  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>VIEW PATIENTS</h4>
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
                        <th scope="col">Ward Specialist</th>
                        <th scope="col">Assigned Ward</th>
                        <th scope="col">Gender</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {patients.map((patient,index) => (
                            <tr key={patient._id}>
                            <td>{index+1}</td>
                            <td>{patient.firstName} {patient.lastName}</td>
                            <td>Cardiology Specialist</td>
                            <td>Cardiology Ward 03</td>
                            <td>{patient.Gender}</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 
                    ))
}

                    </tbody>
                </table>
            </div>
    </main>
  )
}
