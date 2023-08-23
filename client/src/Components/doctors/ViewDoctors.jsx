import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';

export const ViewDoctors = () => {

  const [doctors,setDoctors] = useState([]);
  let special;
  const service=new Service();

  useEffect(() => {
    const respone = service.get ('doctor/') 
    respone.then((res) => {
      console.log (res.data)
      setDoctors(res.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
 
  }, []);

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
                    {doctors.map((doctor,index) => (
                            <tr key={doctor._id}>
                            <td>{index+1}</td>
                            <td>{doctor.firstName} {doctor.lastName}</td>
                            <td>{doctor.specialist}</td>
                            <td>Cardiology Ward 01</td>
                            <td className='text-center'>03</td>
                            <td>
                            <a href='/viewdocd'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
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
