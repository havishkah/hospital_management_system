import React, { useEffect, useState } from 'react'
import {BsSearch, BsJustify, BsPersonCircle} from 'react-icons/bs'
// import { ProfileDropdown } from './ProfileDropdown'
//import { useLogout } from '../../hooks/useLogouthook'
import { useNavigate , Link} from "react-router-dom";

export const NavBar = ({OpenSidebar}) => {

 // const navigate = useNavigate();
 // const { logout } = useLogout()

  const handleLogout = () =>{
    
     // logout()
     // alert('Logged out');
     // navigate('/login')
    
  }

  const[openProfile,setOpenProfile] = useState(false);

  return (
    <header className='navbar'>
      <div className="menu-icon">
         <BsJustify className='icon' onClick={OpenSidebar}/>
      </div>
      {/*<div className="navbar-left">
         <BsSearch className='icon' />
  </div>*/}
      <div className="navbar-right">
         <BsPersonCircle className='icon'/>
         
      </div>
      <div>
        <nav>
          <Link to ="">Doctor Login</Link>
          <Link to ="">Patient Login</Link>
        </nav>
        <button className="lgoutbutton" onClick={handleLogout}> Logout </button>
      </div>

         {/* {
           openProfile && <ProfileDropdown/>
         }
       */}
    </header>
    
  )
}

