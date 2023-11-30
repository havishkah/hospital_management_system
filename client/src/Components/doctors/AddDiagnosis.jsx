import React, { useState, useEffect } from "react";
import Service from "../../../utilities/http";
import { useNavigate, Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";

export const AddDiagnosis = () => {
  const [diagnosis, setDianosis] = useState("");
  const [name, setName] = useState("");
  const [bhtNo, setBhtNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [dFiname, setDFiname] = useState("");
  const [dLiname, setDLiname] = useState("");
  const { id } = useParams();
  const docid = Cookies.get('id');
  const service = new Service();

  useEffect(() => {
    loadPatient();
    getDoctor();
  }, []);

  function loadPatient() {
    const respone = service.get(`patient/${id}`);
    respone
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setBhtNo(res.data.BHTNo);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function getDoctor() {
    const respone = service.get(`doctor/${docid}`);
    respone 
      .then((res) =>{
        console.log(res.data)
        setDFiname(res.data.firstName);
        setDLiname(res.data.lastName);
      })
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      patientid: id,
      docName: docid,
      name: firstName+" "+LastName,
      diagnosis: diagnosis
    }

    const response= service.post(`admit/add`, data)
    response
      .then ((res)=>{
        console.log(res);
        alert('Diagnosis Added');
      })
      .catch ((error) =>{
        console.log(error)
        alert('Failed to Add Diagnosis')
      })
  }

  return (
    <main className="main-container">
      <form method="post">
      <p className="mt-3" style={{ color: "grey" }}>
        Add Diagnosis
      </p>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label style={{ fontSize: "14px" }} className="form-lable">
              Name
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={firstName+ " "+ LastName}
              onChange={(e) => {}}
              disabled
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label style={{ fontSize: "14px" }} className="form-lable" disabled>
              Consultant name
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              value={dFiname+" "+dLiname}
              disabled
              onChange={(e) => {}}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label style={{ fontSize: "14px" }} className="form-lable">
              Diagnosis
            </label>
            <textarea  className="form-control" value={diagnosis}
              onChange={((e)=>{setDianosis(e.target.value)})}></textarea>
          </div>
        </div>
        <div className="col-md-6">
        </div>
        <div className="col-md-6">
        </div>
        <button
        className="btn btn-primary" 
        onClick={handleSubmit}
        >Add Diagnosis</button>

      </div>

      </form>
    </main>
  );
};
