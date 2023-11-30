import { React, useState, useEffect } from "react";
import Service from "../../../utilities/http";
import { useNavigate, useParams, Link } from "react-router-dom";

const AllDiagnosis = () => {
  const [diagnosises, setDianosises] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [doctor, setDoctor] = useState("");

  const [dFiname, setDFiname] = useState("");
  const [dLiname, setDLiname] = useState("");

  const service = new Service();
  const { id } = useParams();

  

  function diagnosis(){
    
    const respone = service.get(`admit/${id}`);
    respone
      .then((res) => {
       console.log(res.data)
       setDianosises(res.data)
      })
      .catch((err) => {
        alert(err);
      });
}

  function loadPatient() {
    const respone = service.get(`patient/${id}`);
    respone
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      })
      .catch((err) => {
        alert(err);
      });
  }
  useEffect(() => {
   
    loadPatient();
    diagnosis();
  }, []);


  return (
    <main className="main-container">
      <div className="main-title">
        <h4>
          {firstName} {lastName}'s Diagnosis diagnosis History
        </h4>
      </div>
      <div className="col-lg-3 mt-2 mb-2">
        
      </div>
      <br />
      <div>
        <table className="table" celled>
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Diagnosis</th>
              <th scope="col">Date</th>
              
            </tr>
          </thead>
          <tbody>
            {diagnosises.map((diagnose, index) => (
                <tr key={diagnose._id}>
                  <td>{index + 1}</td>
                  <td>{diagnose.diagnosis}</td>
                  <td>{diagnose.createdAt}</td>
                  
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AllDiagnosis;
