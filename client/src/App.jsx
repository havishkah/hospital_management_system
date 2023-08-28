import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'


function App() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='main-page-content'>
 
    <BrowserRouter>
    {/* <Login/> */}
     {/* <LoginAuth>  */}
     
    <Home/>
      {/* </LoginAuth>  */}
    </BrowserRouter>
  </div>
  )
}

export default App
