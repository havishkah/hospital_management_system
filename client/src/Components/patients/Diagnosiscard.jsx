import React, { useState, useEffect, useRef } from "react";
import Service from "../../../utilities/http";
import { Link, useNavigate, useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "./dgcard.css";
import bp from "../../assets/bp.png"
import lungs from "../../assets/lungs.png"

import { AddnewDiagnosis } from "./Diagnosecard/Diagnosis";
import { ManagmentPlan } from "./Diagnosecard/ManagementPlan";
import { DischargeMedi } from "./Diagnosecard/DischargeMedi";
import { Plan } from "./Diagnosecard/plan";
import { Invevsigations } from "./Diagnosecard/Investigation";

export const Dignosiscard = () => {
  

  const { id,doctor,bed } = useParams();
  const service = new Service();
  const [Bed, setBed] = useState("");
  const [diagnosises, setDianosises] = useState([]);
  const [dfname, setDfname] = useState("");
  const [dlname, setDlname] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [assignConsultant, setAssignConsultant] = useState("");
  const [BHTNo, setBHTNo] = useState("");
  const [yourArray, setYourArray] = useState([]);
  const [admitdate, setAdmitdate] = useState("");
  const [dischargedate, setDischargedate] = useState("");

  const [selectDig, setSelectDig] = useState("");

  let diagArray = [];

  useEffect(() => {
    loadPatient();
  }, []);

  function loadPatient() {
    const respone = service.get(`patient/${id}`);
    respone
      .then((res) => {
        console.log(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setGender(res.data.Gender);
        setAge(res.data.Age);
        setAssignConsultant(res.data.AssignConsultant);
        setBHTNo(res.data.BHTNo);
        setAdmitdate(res.data.createdAt);
        setDischargedate(res.data.updatedAt);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function getBed() {
    const respone = service.get(`bed/${bed}`);
    respone
      .then((res) => {
        setBed(res.data.BedNo);
        console.log(Bed);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(()=>{
    getBed();
    getdiagnosis();
    getDoctor();
    diagArray.push(selectDig)
    for (let i = 0; i < diagArray.length; i++) {
      console.log(diagArray[i]);
    }
  },[])

  function getdiagnosis() {
    const respone = service.get(`admit/${id}`);
    respone
      .then((res) => {
        console.log(res.data);
        setDianosises(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  function getDoctor() {
    const response = service.get(`doctor/${doctor}`);
    response.then((res) => {
      setDfname(res.data.firstName);
      setDlname(res.data.lastName);
      console.log(dfname+" "+dlname);
    });
  }

  const divRef = useRef(null);

  // function

  const handleGeneratePdf = async () => {

    



    // Get the <div> element you want to convert to PDF
    const divToConvert = divRef.current;

    // Create a new jsPDF instance
    const pdf = new jsPDF("p", "mm", "a4");
    const scale = 2;
    const dpi = 300;

    // Use html2canvas to capture the <div> as an image
    html2canvas(divToConvert, {scale: scale, dpi : dpi}).then((canvas) => {
      // Add the image (canvas) to the PDF
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
      const fn=firstName
      const ln=lastName
      // Save or display the PDF
      pdf.save(`${fn+" "+ln}'s Diagnosis Card.pdf`);
    });
  };



  return (
    <main className="main-container">

      <div ref={divRef} className="main-diagnosis-card">
        <div className="main-area">
          <div className="headercard text-center">
            <h2>Coronary Care Unit - D.G.H. Monaragala</h2>
            <h3>Diagnosis Card</h3>
          </div>

          <div className="row rows personalDetails">
            <div className="col-md-6 mb-2">
              <b>Name: </b>
              {firstName} {lastName}
            </div>
            <div className="col-md-6 mb-2">
              <b>Assigned Consultant: </b>
              {dfname} {dlname}
            </div>
            <div className="col-md-4 mb-2">
              <b>Age: </b>
              {age}
            </div>
            <div className="col-md-4 mb-2">
              <b>Gender: </b> {gender}
            </div>
            <div className="col-md-4 mb-2">
              <b>BHTNo: </b> {Bed}
            </div>
            <div className="col-md-6 mb-2">
              <b>Admitted Date: </b>
              {admitdate}
            </div>
            <div className="col-md-6 mb-2">
              <b>Discharged Date:</b> {dischargedate}
            </div>
            <div className="col-md-4 mb-2"></div>
          </div>
          <div className="row rows">
            <div className="col-md-12">
              <label>
                <b>Diagnosis: </b>
              </label>
              <AddnewDiagnosis/>
      
      {yourArray.map((diagnose, index)=>(
        <div key={index}>
        <input value={diagnose}/></div>
      ))}
      
              {}
              {diagnosises.map((diagnose) => (
                <p key={diagnose._id} className="mb-0 p-diagnosis">
                  {diagnose.diagnosis}
                </p>
              ))}
              <textarea
                className="form-control text-diagnosis"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="row rows">
            <div className="col-md-12">
              <label>
                <b>Presenting complaint: </b>
              </label>
              <textarea
                className="form-control text-diagnosis"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="row rows">
            <div className="col-md-12">
              <label>
                <b>Examination : </b>
              </label>
              <div className="row">
                <div className="col-md-2">
                  <label>HR:</label>
                  <input type="text" className="form-control" />
                  <label>BP:</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-5 row"><img className="w-25"
                  src={lungs}
                ></img><textarea className="form-control w-75" rows={5}></textarea></div>
                <div className="col-md-5 row">
                <img className="w-25"
                  src={bp}
                ></img>
                  <textarea className="form-control w-75" rows={5}></textarea></div>
              </div>
            </div>
          </div>
          <div className="row rows">
            <div className="col-md-12">
              <label>
                <b>Invevsigations: </b>
              </label>
              <Invevsigations/>
              <textarea
                className="form-control text-diagnosis"
                rows={5}
              ></textarea>
            </div>
          </div>
          <div className="row rows">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6 border_split">
                <label>
                <b>Management: </b>
              </label>
              <ManagmentPlan/>
              <textarea
                className="form-control text-diagnosis"
                rows={5}
              ></textarea>
                </div>
                <div className="col-md-6 border_split">
                <label>
                <b>Discharge Medication: </b>
              </label>
              <DischargeMedi/>
              <textarea
                className="form-control text-diagnosis"
                rows={5}
              ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="row rows">
            <div className="col-md-12">
              <label>
                <b>Plan: </b>
              </label>
              <div><Plan/></div>
              <textarea
                className="form-control text-diagnosis"
                rows={5}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
          <div className="col-md-6"></div>

          <div className="col-md-6">
            <div className="mb-3">
              <Link to={`/allpatient`}>
                <button
                  style={{
                    marginLeft: "50px",
                    height: "40px",
                    fontSize: "16px",
                  }}
                  type="submit"
                  className="btn btn-primary bg-white text-primary btn-lg"
                >
                  Back
                </button>
              </Link>
              &nbsp;
              <button
                style={{ height: "40px", fontSize: "16px" }}
                type="button"
                onClick={handleGeneratePdf}
                className="btn btn-primary text-white btn-lg"
              >
                Generate Report
              </button>{" "}
              &nbsp;
            </div>
          </div>
        </div>
    </main>
  );
};
