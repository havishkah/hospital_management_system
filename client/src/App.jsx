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
import { DocPatientPrescrip } from './Components/doctors/DocPatientPrescrip'
import { DocPatientHistoryd } from './Components/doctors/DocPatientHistoryd'



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
         <Route path='/doc_pa_priscripd' element={<DocPatientPrescrip/>}></Route>
         <Route path='/adddoc' element={<AddDoc/>}></Route>
         <Route path='/viewdocd' element={<ViewDocd/>}></Route>
         <Route path='/doc_pa_historyd' element={<DocPatientHistoryd/>}></Route>
      </Routes>
    </BrowserRouter>
  </div>
  )
}

//test
export default App
