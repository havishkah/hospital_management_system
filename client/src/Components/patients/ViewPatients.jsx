import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';
import {Link,useNavigate, useParams} from 'react-router-dom'
import Cookies from "js-cookie";

export const ViewPatients = () => {

  const [patients,setPatients] = useState([]);
  const [searchText, setSearchText] = useState('');
  const service=new Service();
  const navigate = useNavigate();
  const {id} = useParams()
  const role = Cookies.get('role')
  const status="Onboard";

  useEffect(() => {
    getPatients();
  }, []);

  function getPatients(){
    const respone = service.get ('patient') 
    respone.then((res) => {
      console.log (res.data)
      setPatients(res.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  const handlesearchArea = value => {
    setSearchText(value);
    filterData(value);   
}

const filterData = value => {
  const lowerCaseValue = value.toLowerCase().trim();
  if(!lowerCaseValue){
      getPatients();
  }
  else{      
      const filteredData = patients.filter(item => {
        const fullName = `${item.firstName} ${item.lastName}`.toLowerCase();
        return fullName.includes(lowerCaseValue);
      });
      setPatients(filteredData);
  }
}

//View details function
function patientView(){
  navigate(`/viewpatientdetail/${id}`)
}

  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>REGISTERED PATIENTS</h4>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.." onChange={ e => handlesearchArea(e.target.value)}/>
        </div> <br />
        <div>
        <table className="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Contact</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {patients.map((patient,index) => (
                            <tr key={patient._id}>
                            <td>{index+1}</td>
                            <td>{patient.firstName} {patient.lastName}</td>
                            <td>{patient.nic}</td>
                            <td>{patient.contact}</td>
                            <td>{patient.Dob}</td>
                            <td>{patient.Gender}</td>
                            <td>
                            <Link to={`/viewpatientdetail/${patient._id}`}><button type="button" onClick={patientView} className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></Link>
                            {role ==="admin" ? <Link className="btn btn-primary mx-1" to={`/addpatientuser/${patient._id}`}>Create a User Account</Link>: null}
                            </td>
                            </tr> 
                    ))
                      }
                    </tbody>
                </table>

                <div className="col-md-12">
                <div className="mb-3">
                <Link to='/admitpatients'><button type="submit" className="btn btn-success" style={{marginLeft:'680px',color:'white'}}>Onboard/Discharged Patients</button>&nbsp;</Link>
                </div>
                </div>
            </div>
    </main>
  )
}
