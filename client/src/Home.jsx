import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import Service from "../utilities/http";

import { NavBar } from "./Components/Navbar/NavBar";
import { SideBar } from "./Components/SideBar/SideBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddDoc from "./Components/doctors/AddDocs";
import ViewDocd from "./Components/doctors/ViewDocDetail";
import { AdminDashboard } from "./Components/AdminDashboard/AdminDashboard";
import { ViewDoctors } from "./Components/doctors/ViewDoctors";
import { DoctorDashboard } from "./Components/doctors/DoctorDashboard";
import { PatientDashboard } from "./Components/patients/PatientDashboard";
import PatientDiognosis from "./Components/patients/PatientDiognosis";
import { DocPatientPrescrip } from "./Components/doctors/DocPatientPrescrip";
import { DocPatientHistoryd } from "./Components/doctors/DocPatientHistoryd";
import { ViewPatients } from "./Components/patients/ViewPatients";
import { PatientPrescripd } from "./Components/patients/PatientPrescripd";
import { DocPatientHistory } from "./Components/doctors/DocPatientHistory";
import AddPrescrip from "./Components/doctors/AddPrescrip";
import Viewdocpde from "./Components/doctors/ViewDoctorPDetail";
import AddPatients from "./Components/patients/AddPatient";
import { ViewBeds } from "./Components/Beds/ViewBeds";
import MedicalReport from "./Components/patients/MedicalReport";
import AddBeds from "./Components/Beds/AddBeds";
import ViewPatientDetail from "./Components/patients/ViewPatientDetail";
import { ViewDrugs } from "./Components/Drugs/ViewDrugs";
import { Signup } from "./Components/User/Signup";
import ViewDiagnosis from "./Components/doctors/ViewDiagnosis";
import AddDrugs from "./Components/Drugs/AddDrugs";
import BedDetails from "./Components/Beds/BedDetails";
import { AddNewPatient } from "./Components/patients/AddnewPat";
import AddPatientAccout from "./Components/User/CreatePat";
import { AddDoctorAccout } from "./Components/User/CreateDoc";
import Login from "./Login";
import AdmitPatient from "./Components/patients/AdmitPatient";
import { DischargePatientd } from "./Components/patients/DischargePatientd";
// import  DischargedPatient  from "./Components/patients/DischargedPatient";
import Cookies from "js-cookie";
import { ViewReoprt } from "./Components/patients/viewreportAdmin";
import FileDownload from "./Components/patients/downloadFile";
import PUMedicalReport from "./Components/patients/PU_MedicalReport";
import PatientDiagnosis_PV from "./Components/patients/PatientDiognosis_PV";
import { ViewUsers } from "./Components/User/ViewUsers";
import AssignedPatients from "./Components/doctors/AssignedPatients";
import { AddDiagnosis } from "./Components/doctors/AddDiagnosis";
import AllPrescription from "./Components/doctors/AllPrescription";
import AllDiagnosis from "./Components/patients/AllDiagnosis";
import { Dignosiscard } from "./Components/patients/Diagnosiscard";
import DischargedPatients from "./Components/patients/ViewDischargedPatients";

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false);
  const { admin } = useAuthContext();
  const service = new Service();

  const role = Cookies.get("role");
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className="grid-container">
      <div>
        {admin ? (
          <SideBar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
          />
        ) : null}
      </div>
      <div className="page-content">
        <NavBar OpenSidebar={OpenSidebar} />
        <Routes>
          <Route
            path="/login"
            element={
              !admin ? (
                <Login />
              ) : role === "admin" ? (
                <Navigate to="/admin" />
              ) : role === "doctor" ? (
                <Navigate to="/doctor" />
              ) : (
                <Navigate to="/patientdashboard" />
              )
            }
          ></Route>
          <Route
            path="/"
            element={
              !admin ? (
                <Login />
              ) : role === "admin" ? (
                <Navigate to="/admin" />
              ) : role === "doctor" ? (
                <Navigate to="/doctor" />
              ) : (
                <Navigate to="/patientdashboard" />
              )
            }
          ></Route>
          <Route
            path="/admin"
            element={admin ? <AdminDashboard /> : <Navigate to="/login" />}
          ></Route>
          <Route path="/addadmin" element={<Signup />}></Route>
          <Route
            path="/addpatientuser/:id"
            element={<AddPatientAccout />}
          ></Route>
          <Route
            path="/adddoctoruser/:id"
            element={<AddDoctorAccout />}
          ></Route>
          <Route path="/alldoc" element={<ViewDoctors />}></Route>
          <Route path="/doctor" element={<DoctorDashboard />}></Route>
          <Route path="/admitpatients" element={<AdmitPatient />}></Route>
          <Route
            path="/patient_Report_upload"
            element={<PUMedicalReport />}
          ></Route>
          <Route
            path="/patient_Report_view"
            element={<PatientDiagnosis_PV />}
          ></Route>
          <Route
            path="/dischargepatientsd"
            element={<DischargePatientd />}
          ></Route>
          <Route
            path="/patientdashboard"
            element={<PatientDashboard />}
          ></Route>
          <Route path="/adddrugs" element={<AddDrugs />}></Route>
          <Route path="/downloadFile" element={<FileDownload />}></Route>
          <Route
            path="/patientdiognosis"
            element={<PatientDiognosis />}
          ></Route>
          <Route
            path="/doc_pa_priscripd/:id"
            element={<DocPatientPrescrip />}
          ></Route>
          <Route path="/adddoc" element={<AddDoc />}></Route>
          <Route path="/viewdocd/:id" element={<ViewDocd />}></Route>
          <Route path="/viewdocpde/:id" element={<Viewdocpde />}></Route>
          <Route path="/viewReport/:id" element={<ViewReoprt />}></Route>
          <Route path="/viewUsers" element={<ViewUsers />}></Route>
          {/* <Route path="viewReport/:id">{<ViewReoprt/>}</Route> */}
          <Route
            path="/doc_pa_historyd"
            element={<DocPatientHistoryd />}
          ></Route>
          <Route path="/allpatient" element={<ViewPatients />}></Route>
          <Route path="/pa_priscrpd" element={<PatientPrescripd />}></Route>
          <Route path="/doc_pa_history" element={<DocPatientHistory />}></Route>
          <Route path="/addprescrip/:id" element={<AddPrescrip />}></Route>
          <Route path="/allbed" element={<ViewBeds />}></Route>
          <Route path="/medical_rprt" element={<MedicalReport />}></Route>
          <Route path="/addbeds" element={<AddBeds />}></Route>
          <Route
            path="/viewpatientdetail/:id"
            element={<ViewPatientDetail />}
          ></Route>
          <Route path="/alldrug" element={<ViewDrugs />}></Route>
          <Route path="/viewdocd" element={<ViewDocd />}></Route>
          <Route path="/viewdocpde" element={<Viewdocpde />}></Route>
          <Route path="/addpatients" element={<AddNewPatient />}></Route>
          <Route path="/addbeds" element={<AddBeds />}></Route>
          <Route path="/beddetails/:id" element={<BedDetails />}></Route>
          <Route
            path="/viewpatientdetail"
            element={<ViewPatientDetail />}
          ></Route>
          <Route path="/diagnosisHistory/:id" element={<AllDiagnosis />}></Route>
          {/* <Route path="/viewdiagnosis/:id/:patientid" element={<ViewDiagnosis />}></Route> */}
          <Route path="/assignpa" element={<AssignedPatients />}></Route>
          <Route path="/viewdiagnosis/:id" element={<ViewDiagnosis />}></Route>
          <Route path="/adddiagnosis/:id" element={<AddDiagnosis />}></Route>
          <Route path="/viewprescripton/:id" element={<AllPrescription />} />
          <Route path="/dignosiscard/:id/:doctor/:bed" element={<Dignosiscard/>}></Route>
            <Route path="dischargedpatients" element={<DischargedPatients/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default Home;
