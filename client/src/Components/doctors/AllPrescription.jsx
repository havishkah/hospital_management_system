import { React, useState, useEffect } from "react";
import Service from "../../../utilities/http";
import { useNavigate, useParams, Link } from "react-router-dom";

const AllPrescription = () => {
  const [prescription, setPrescription] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [doctor, setDoctor] = useState("");

  const [dFiname, setDFiname] = useState("");
  const [dLiname, setDLiname] = useState("");

  const service = new Service();
  const { id } = useParams();

  function getPrescription() {
    const respone = service.get(`prescription/p_detail/${id}`);
    respone
      .then((res) => {
        
        setPrescription(res.data);
        setDoctor(res.data.doctorid);

        const doctorResponse = service.get(`doctor`,res.data.doctorid);
        doctorResponse
          .then((doctorRes) => {
            console.log(doctorRes.data)
            setDFiname(doctorRes.data.firstName);
            setDLiname(doctorRes.data.lastName);
          })
          .catch((error) => {
            console.error("Error fetching doctor data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
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
    getPrescription();
    loadPatient();
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h4>
          {firstName} {lastName}'s Prescription(Medication)
        </h4>
      </div>
      <div className="col-lg-3 mt-2 mb-2">
        <input
          style={{ marginLeft: "715px" }}
          type="search"
          className="form-control"
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
              <th scope="col">Doctore ID</th>
              <th scope="col">Dosage</th>
              <th scope="col">Drug</th>
              <th scope="col">Duration</th>
              <th scope="col">Frequency</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {prescription &&
              prescription.map((presc, index) => (
                <tr key={presc._id}>
                  <td>{index + 1}</td>
                  <td>{doctor ? `${dFiname} ${dLiname}` : presc.doctorid}</td>
                  <td>{presc.dosage}</td>
                  <td>{presc.drug}</td>
                  <td>{presc.duration}</td>
                  <td>{presc.frequency}</td>
                  <td>{presc.qty}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default AllPrescription;
