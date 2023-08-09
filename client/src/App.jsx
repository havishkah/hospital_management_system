import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


// import Dashboard from './components/DoctorDashboard/DoctorDashboard'



import AdminDashbord from "./components/AdminDasboard"

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/'element={<AdminDashbord/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
