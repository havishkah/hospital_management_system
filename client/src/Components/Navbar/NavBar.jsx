import React, { useEffect, useState } from 'react'
import {BsSearch, BsJustify, BsPersonCircle} from 'react-icons/bs'
// import { ProfileDropdown } from './ProfileDropdown'
import { useLogout } from '../../hooks/useLogouthook'
import { useNavigate , Link} from "react-router-dom";
import { useAuthContext } from '../../hooks/useAuthContext';
import Cookies from 'js-cookie';

export const NavBar = ({OpenSidebar}) => {
  const role = Cookies.get("username");
 const navigate = useNavigate();
 const { logout } = useLogout()
 const { admin } = useAuthContext()
 //console.log(admin)
  const handleLogout = () =>{
    
     logout()
     // alert('Logged out');
      navigate('/login')
    
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
       {role}
        {admin ? <button className="lgoutbutton" onClick={handleLogout}> Logout </button>: null }
      </div>
      

         {/* {
           openProfile && <ProfileDropdown/>
         }
       */}
    </header>
    
  )
}

