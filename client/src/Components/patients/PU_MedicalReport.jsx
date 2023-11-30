import React, { useState, useEffect } from "react";
import Service from "../../../utilities/http";
import { useNavigate, Link } from "react-router-dom";
import Cookies from "js-cookie";


function PUMedicalReport() {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("")
  const [lastName, setlastName] = useState("")
  const [patientid, setPatientid] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [file, setFile] = useState("");
  const service = new Service();

  const un = Cookies.get('username')
  const id = Cookies.get('id');

  function handleFile(event) {
    setFile(event.target.files[0]);
    console.log(event.target.files[0]);
  }

  useEffect(() => {
    getPatients()
  }, []);

  function getPatients() {
    const respone = service.get(`patient/getby/${un}`);
    respone
      .then((res) => {
        console.log(res.data);
        setPatientid(res.data._id);
        setFirstName(res.data.firstName);
        setlastName(res.data.lastName);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const newMed = {
      patientid:id,
      title: title,
      type: type,
      file: file,
    };

    try {
      console.log("data", newMed);
      const response = await service.post("reports/", newMed);
      console.log(response);
      alert("Medical Report added Successfully");
      navigate("/admin");
    } catch (error) {
      console.error("Error with adding data:", error);
    }
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h4>MEDICAL REPORT</h4>
      </div>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="row">
          <p className="mt-3" style={{ color: "grey" }}>
            Patient Information
          </p>
          {/* <div className="col-md-6">
                        <div className="mb-3">
                            <label style={{ fontSize: '14px' }} className="form-lable">Name</label>
                            <input type="text" name="name" className="form-control" onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </div>
                    </div> */}

          <div className="col-md-6">
            <div className="mb-3">
             Full Name: {firstName} {lastName}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label style={{ fontSize: "14px" }} className="form-lable">
                Report Type
              </label>
              <select
                className="form-control"
                name="type"
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                <option value="">--Select Report Type--</option>
                <option value="01">Blood Report</option>
                <option value="02">Heart Report</option>
                <option value="03">BP Report</option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label style={{ fontSize: "14px" }} className="form-lable">
                Report Title
              </label>
              <input
                type="text"
                name="title"
                className="form-control"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-6">
              <label style={{ fontSize: "14px" }} className="form-lable">
                Choose Report
              </label>
              <input
                type="file"
                name="file"
                id="file"
                className="form-control"
                onChange={handleFile}
                accept=".pdf,.doc,.docx"
              />
            </div>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <div className="mb-3">
              <button
                style={{
                  marginLeft: "280px",
                  width: "100px",
                  height: "40px",
                  fontSize: "16px",
                }}
                type="button"
                className="btn btn-primary bg-white text-primary btn-lg"
              >
                Back
              </button>
              &nbsp;
              <button
                style={{
                  width: "100px",
                  height: "40px",
                  fontSize: "16px",
                }}
                type="submit"
                className="btn btn-primary text-white btn-lg"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default PUMedicalReport

