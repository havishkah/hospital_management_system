import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Dashboard from './components/DoctorDashboard/DoctorDashboard'

import Dashbord from './components/Dashboard/Dashboard'

import AdminDashbord from './components/AdminDashboard/Dashboard'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
