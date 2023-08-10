import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddDoc from './Components/doctors/AddDocs'
import ViewDocd from './Components/doctors/ViewDocDetail'


function App() {
  

  return (
    <div>
      <BrowserRouter>
        <Routes>

        <Route path='/adddoc' element={<AddDoc/>}></Route>
        <Route path='/viewdocd' element={<ViewDocd/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
