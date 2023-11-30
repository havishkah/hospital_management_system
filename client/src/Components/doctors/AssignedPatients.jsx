import React, {useState, useEffect} from "react";
import Service from '../../../utilities/http';
import {useParams,useNavigate,Link} from "react-router-dom";
import Cookies from "js-cookie";

function AssignedPatients() {

    const id = Cookies.get("id")
    const service = new Service()

    const [admits,setAdmits] = useState([]);

    useEffect(() =>{
        getPatients()
     },[])

     function getPatients(){
        const respone = service.get (`admit/details/doctor/${id}`) 
        respone.then((res) => {
          console.log (res.data)
          setAdmits(res.data);
        })
        .
        catch((error) => {
          console.error('Error fetching data:', error);
        });
    
  }

    return(
        <main className="main-container">
                    
                    <h4>Assigned Patients</h4>
                    <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">Bed</th>
                        <th scope="col">BHT</th>
                        <th scope="col">Ward Specialist</th>
                        <th scope="col">Assigned Ward</th>
                        <th scope="col">Admit Date & Time</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                      {admits.map((patient,index) => (
                            <tr key={patient._id}>
                            <td>{index+1}</td>
                            <td>{patient.name}</td>
                            <td>{patient.bed}</td>
                            <td>{patient.bht}</td>
                            <td>{patient.specialist}</td>
                            <td>{patient.ward}</td>
                            <td>{patient.createdAt}</td>
                            <td>
                            <a href={`/viewdocpde/${patient._id}`}><button type="button" onClick={() => patientView(patient._id)} className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                      ))
}
                    </tbody>
                </table>

            </main>
    )





}

export default AssignedPatients