import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';

export const ViewBeds = () => {

  const [beds,setBeds] = useState([]);
  const service=new Service();

  useEffect(() => {
    const respone = service.get ('bed/') 
    respone.then((res) => {
      console.log (res.data)
      setBeds(res.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
 
  }, []);

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
                    {beds.map((bed,index) => (
                            <tr key={bed._id}>
                            <td>{index+1}</td>
                            <td>{bed.category}</td>
                            <td>{bed.specialist}</td>
                            <td>{bed.ward}</td>
                            <td>{bed.status}</td>
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
