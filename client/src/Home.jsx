import React from "react";
import { useAuthContext } from "./hooks/useAuthContext";

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
import { AddPrescrip } from "./Components/doctors/AddPrescrip";
import Viewdocpde from "./Components/doctors/ViewDoctorPDetail";
import AddPatients from "./Components/patients/AddPatient";
import { ViewBeds } from "./Components/Beds/ViewBeds";
import { MedicalReport } from "./Components/patients/MedicalReport";
import AddBeds from "./Components/Beds/AddBeds";
import ViewPatientDetail from "./Components/patients/ViewPatientDetail";
import { ViewDrugs } from "./Components/Drugs/ViewDrugs";
import { Signup } from "./Components/User/Signup";
import ViewDiagnosis from "./Components/doctors/ViewDiagnosis";
import AddDrugs from "./Components/Drugs/AddDrugs";
import { BedDetails } from "./Components/Beds/BedDetails";
import Login from "./Login";
import { AdmitPatient } from "./Components/patients/AdmitPatient";
import { DischargePatientd } from "./Components/patients/DischargePatientd";
import { DischargedPatient } from "./Components/patients/DischargedPatient";

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = React.useState(false);
  const { admin } = useAuthContext();
  let user1="";

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  if(admin){
     user1= admin.username;
  }else{
    user1 ="REw";
  }
  return (
    <div className="grid-container">
      {user1}
      <div>
        {admin ? <SideBar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        /> : null}
      </div>
      <div className="page-content">
        <NavBar OpenSidebar={OpenSidebar} />
        <Routes>

          <Route path="/login" element={<Login/>}></Route>

          <Route path="/" element={<AdminDashboard />}></Route>
          <Route path="/addadmin" element={<Signup />}></Route>
          <Route path="/alldoc" element={<ViewDoctors />}></Route>
          <Route path="/doctor" element={<DoctorDashboard />}></Route>
          <Route path="/admitpatients" element={<AdmitPatient />}></Route>
          <Route
            path="/dischargepatientsd"
            element={<DischargePatientd />}
          ></Route>
          <Route
            path="/patientdashboard"
            element={<PatientDashboard />}
          ></Route>
          <Route path="/adddrugs" element={<AddDrugs />}></Route>
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
          <Route path="/addpatients" element={<AddPatients />}></Route>
          <Route path="/discharge/:id" element={<DischargedPatient />}></Route>
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
          <Route path="/addpatients" element={<AddPatients />}></Route>
          <Route path="/addbeds" element={<AddBeds />}></Route>
          <Route path="/beddetails/:id" element={<BedDetails />}></Route>
          <Route
            path="/viewpatientdetail"
            element={<ViewPatientDetail />}
          ></Route>
          <Route path="/viewdiagnosis" element={<ViewDiagnosis />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Home;
