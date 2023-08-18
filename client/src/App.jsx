import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddDoc from './Components/doctors/AddDocs'
import ViewDocd from './Components/doctors/ViewDocDetail'
import { AdminDashboard } from './Components/AdminDashboard/AdminDashboard'
import { NavBar } from './Components/Navbar/NavBar'
import { SideBar } from './Components/SideBar/SideBar'
import { ViewDoctors } from './Components/doctors/ViewDoctors'
import { DoctorDashboard } from './Components/doctors/DoctorDashboard'
import { PatientDashboard } from './Components/patients/PatientDashboard'
import AddDrugs from './Components/drugs/AddDrugs'
import PatientDiognosis from './Components/patients/PatientDiognosis'
import { DocPatientPrescrip } from './Components/doctors/DocPatientPrescrip'
import { DocPatientHistoryd } from './Components/doctors/DocPatientHistoryd'
import { ViewPatients } from './Components/patients/ViewPatients'
import { PatientPrescripd } from './Components/patients/PatientPrescripd'
import { DocPatientHistory } from './Components/doctors/DocPatientHistory'
import { AddPrescrip } from './Components/doctors/AddPrescrip'
import Viewdocpde from './Components/doctors/ViewDoctorPDetail'
import AddPatients from './Components/patients/AddPatient'
import { ViewBeds } from './Components/Beds/ViewBeds'
import { MedicalReport } from './Components/patients/MedicalReport'
import AddBeds from './Components/Beds/AddBeds'
import ViewPatientDetail  from './Components/patients/ViewPatientDetail'



function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
    <BrowserRouter>
     <NavBar OpenSidebar={OpenSidebar}/>
     <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
         <Route path='/admin' element={<AdminDashboard/>}></Route>
         <Route path='/alldoc' element={<ViewDoctors/>}></Route>
         <Route path='/doctor' element={<DoctorDashboard/>}></Route>
         <Route path='/patientdashboard' element={<PatientDashboard/>}></Route>
         <Route path='/adddrugs' element={<AddDrugs/>}></Route>
         <Route path='/patientdiognosis' element={<PatientDiognosis/>}></Route>
         <Route path='/doc_pa_priscripd' element={<DocPatientPrescrip/>}></Route>
         <Route path='/adddoc' element={<AddDoc/>}></Route>
         <Route path='/viewdocd' element={<ViewDocd/>}></Route>
         <Route path='/viewdocpde' element={<Viewdocpde/>}></Route>
         <Route path='/addpatients' element={<AddPatients/>}></Route>
         <Route path='/doc_pa_historyd' element={<DocPatientHistoryd/>}></Route>
         <Route path='/allpatient' element={<ViewPatients/>}></Route>
         <Route path='/pa_priscrpd' element={<PatientPrescripd/>}></Route>
         <Route path='/doc_pa_history' element={<DocPatientHistory/>}></Route>
         <Route path='/addprescrip' element={<AddPrescrip/>}></Route>
         <Route path='/allbed' element={<ViewBeds/>}></Route>
         <Route path='/medical_rprt' element={<MedicalReport/>}></Route>
         <Route path='/addbeds' element={<AddBeds/>}></Route>
         <Route path='/viewpatientdetail' element={<ViewPatientDetail/>}></Route>

      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
