import React from 'react'
import {BsSearch, BsJustify, BsPersonCircle} from 'react-icons/bs'

export const NavBar = ({OpenSidebar}) => {
  return (
    <header className='navbar'>
      <div className="menu-icon">
         <BsJustify className='icon' onClick={OpenSidebar}/>
      </div>
      <div className="navbar-left">
         <BsSearch className='icon' />
      </div>
      <div className="navbar-right">
         <BsPersonCircle className='icon' />
      </div>
    </header>
    
  )
}

