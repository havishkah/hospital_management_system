import React, { useState } from 'react'
import {BsSearch, BsJustify, BsPersonCircle} from 'react-icons/bs'
import { ProfileDropdown } from './ProfileDropdown'

export const NavBar = ({OpenSidebar}) => {

  const[openProfile,setOpenProfile] = useState(false);

  return (
    <header className='navbar'>
      <div className="menu-icon">
         <BsJustify className='icon' onClick={OpenSidebar}/>
      </div>
      <div className="navbar-left">
         <BsSearch className='icon' />
      </div>
      <div className="navbar-right">
         <BsPersonCircle className='icon' onClick={() => setOpenProfile(
          (prev) => !prev)} />
         
      </div>

         {
           openProfile && <ProfileDropdown/>
         }
      
    </header>
    
  )
}

