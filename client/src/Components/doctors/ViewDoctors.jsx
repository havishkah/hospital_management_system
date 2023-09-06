import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';

export const ViewDoctors = () => {

  const [doctors,setDoctors] = useState([]);
  const [searchText, setSearchText] = useState('');
  const service=new Service();

  useEffect(() => {
      getDoctors();
  }, []);

  function getDoctors(){
    const respone = service.get ('doctor/') 
    respone.then((res) => {
      console.log (res.data)
      setDoctors(res.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }


  //search function
  const handlesearchArea = value => {
    setSearchText(value);
    filterData(value);   
}

const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue){
        getDoctors();
    }
    else{      
        const filteredData = doctors.filter(item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        });
        setDoctors(filteredData);
    }
}

//View details function
function doctorView(id){
  console.log(id);
  navigate(`/viewdocd/${id}`);
}

  return (
    <main className='main-container'>
       <div className="main-title">
          <h4>VIEW DOCTORS</h4>
       </div>
       <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.." onChange={ e => handlesearchArea(e.target.value)}/>
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
                            <td>{doctor.ward}</td>
                            <td className='text-center'>03</td>
                            <td>
                            <a href={`/viewdocd/${doctor._id}`}><button type="button" onClick={() => doctorView(doctor._id)} className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
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
