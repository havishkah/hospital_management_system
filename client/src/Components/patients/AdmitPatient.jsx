import React, { useState, useEffect } from "react";
import Service from "../../../utilities/http";
import { Link, useNavigate } from "react-router-dom";

function AdmitPatient() {
  const [patients, setPatients] = useState([]);
  const [searchText, setSearchText] = useState("");
  const service = new Service();
  const navigate = useNavigate();
  const status = "Onboard";
  const viewStat="Discharged";

  useEffect(() => {
    getPatients();
  }, []);

  function getPatients() {
    const respone = service.get("patient/Status", status);
    respone
      .then((res) => {
        console.log(res.data);
        setPatients(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  function handleStatus(){
   
    navigate('/dischargedpatients')
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
  function patientView(id) {
    console.log(id);
    navigate(`/viewpatientdetail/${id}`);
  }

  return (
    <main className="main-container">
      <div className="main-title">
        <h4>VIEW ADMITTED & DISCHARGED PATIENTS</h4>
      </div>
      <button className="btn btn-primary" onClick={handleStatus}>{viewStat} patients</button>
      <div className="col-lg-3 mt-2 mb-2 d-flex">
        <input
          style={{ marginLeft: "0", width:"60%" }}
          type="search"
          className="form-control mx-2"
          placeholder="Search.."
          onChange={(e) => handlesearchArea(e.target.value)}
        />
      </div>{" "}
      <br />
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
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={patient._id}>
                <td>{index + 1}</td>
                <td>
                  {patient.firstName} {patient.lastName}
                </td>
                <td>{patient.nic}</td>
                <td>{patient.contact}</td>
                <td>{patient.Dob}</td>
                <td>{patient.Gender}</td>
                <td>{patient.Status}</td>
                <td>
                  <Link to={`/viewpatientdetail/${patient._id}`}>
                    <button
                      type="button"
                      onClick={patientView}
                      className="btn btn-primary"
                      style={{ color: "white" }}
                    >
                      <i className="fas fa-eye"></i>&nbsp;Details
                    </button>
                  </Link>
                 
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default AdmitPatient;
