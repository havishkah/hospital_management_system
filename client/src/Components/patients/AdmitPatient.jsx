import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';
import {Link,useNavigate} from 'react-router-dom'

export const AdmitPatient = () => {

  const [admits,setAdmits] = useState([]);
  const [searchText, setSearchText] = useState('');
  const service=new Service();
  const navigate = useNavigate();

  useEffect(() => {
    getAdmitPatients();
  }, []);

  function getAdmitPatients(){
    const respone = service.get ('admit/') 
    respone.then((res) => {
      console.log (res.data)
      setAdmits(res.data);
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
        getAdmitPatients();
    }
    else{      
        const filteredData = admits.filter(item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        });
        setAdmits(filteredData);
    }
}

//View details function
function patientView(id){
  console.log(id);
  navigate(`/viewpatientdetail/${id}`)
}

  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>VIEW ADMIT PATIENTS</h4>
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
                        <th scope="col">Patient Bed</th>
                        <th scope="col">BHT</th>
                        <th scope="col">Ward</th>
                        <th scope="col">Diagnosis</th>
                        <th scope="col">Admit Date & Time</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                      {admits.map((admit,index) => (
                           <tr key={admit._id}>
                           <td>{index+1}</td>
                           <td>{admit.name}</td>
                           <td>{admit.bed}</td>
                           <td>{admit.bht}</td>
                           <td>{admit.ward}</td>
                           <td>{admit.diagnosis}</td>
                           <td>{admit.createdAt}</td>
                           <td>
                             
                           <a href={`/viewdocpde/${admit._id}`}><button type="button" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                           </td>
                           </tr>
                      ))}

                    </tbody>
                </table>
            </div>
    </main>
  )
}
