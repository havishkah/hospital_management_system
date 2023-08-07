import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AdminDashboard } from './Components/AdminDashboard/AdminDashboard'
import { NavBar } from './Components/Navbar/NavBar'
import { SideBar } from './Components/SideBar/SideBar'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
