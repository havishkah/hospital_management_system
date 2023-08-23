import React from 'react'
import { Outlet } from 'react-router-dom'
import { SideBar } from './Components/SideBar/SideBar'

function MainApp() {
  return (
    <div style={{width:"100%",display:"flex"}}>
      <div style={{width:"20%"}}><SideBar/></div>
      <div style={{width:"80%"}}><Outlet/></div>
    </div>
  )
}

export default MainApp
