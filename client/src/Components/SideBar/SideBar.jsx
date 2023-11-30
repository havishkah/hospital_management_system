import React from 'react'
import Auth from '../../Auth/auth'
import { Link } from 'react-router-dom'

export const SideBar = ({openSidebarToggle,OpenSidebar}) => {
  return (

    
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive': ""}>
    
      <div className='m-2'>
         <span className='brand-name fs-6'><strong><span style={{color:'blue'}}>Coronary</span> Care Unit</strong></span>
         &nbsp;<span className='icon close_icon text-white' onClick={OpenSidebar}>X</span>
      </div>
      {/* Admin sidebar */}
      <Auth position="admin">
      <hr className="text-dark" />
      <div className='list-group list-group-flush'>
          <Link to="/admin" className="list-group-item py-1">
            <small>Menu</small><br />
            <i className="fa-solid fa-house fs-6 me-3 my-2"></i>
            <span className='fs-6 my-2'>Dashboard</span>
          </Link>
          <Link to="/" className="list-group-item py-3">
            <small>Manage Doctors</small><br />
            <i className="fa-solid fa-user-doctor fs-6 me-3 my-2"></i>
            <Link to="/adddoc" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Doctors</span></Link>
            <br />
            <i className="fa-solid fa-users fs-6 me-3 my-2"></i>
            <Link to="/alldoc" className='text-decoration-none text-black'><span className='fs-6'>View Doctors</span></Link>
          </Link>
          <Link to="" className="list-group-item py-3">
            <small>Manage Patients</small><br />
            <i className="fa-solid fa-user-plus fs-6 me-3 my-2"></i>
            <Link to="/addpatients" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Patients</span></Link>
            <br />
            <i className="fa-solid fa-user-group fs-6 me-3 my-2"></i>
            <Link to="/allpatient" className='text-decoration-none text-black'><span className='fs-6'>View Patients</span></Link>
          </Link>
          <Link to="/" className="list-group-item py-3">
            <small>Manage Beds</small><br />
            <i className="fa-solid fa-bed-pulse fs-6 me-3 my-2"></i>
            <Link to="/addbeds" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Beds</span></Link>
            <br />
            <i className="fa-solid fa-bed fs-6 me-3 my-2"></i>
            <Link to="/allbed" className='text-decoration-none text-black'><span className='fs-6'>View Beds</span></Link>
          </Link>
          <Link to="/" className="list-group-item py-3">
            <small>Manage Drugs</small><br />

            <i className="fa-solid fa-tablets fs-6 me-3 my-2"></i>
            <Link to="/adddrugs" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Drugs</span></Link>
            <br />
            <i className="fa-solid fa-pills fs-6 me-3 my-2"></i>
            <Link to="/alldrug" className='text-decoration-none text-black'><span className='fs-6'>View Drugs</span></Link>
          </Link>
           <Link to="/" className="list-group-item py-3">
          <small>Reports</small><br />
          <i className="fa-solid fa-file fs-6 me-3 my-2"></i>
          <Link to="/patientdiognosis" className='text-decoration-none text-black'><span className='fs-6 my-2'>View Reports</span></Link>
          <br />
          <i className="fa-solid fa-file-pdf fs-6 me-3 my-2"></i>
          <Link to="/medical_rprt" className='text-decoration-none text-black'><span className='fs-6'>Upload Medical Report</span></Link>
        </Link>
        <Link to="" className="list-group-item py-3">
          <small>Manage Users</small><br />
          <i className="fa-solid fa-file fs-6 me-3 my-2"></i>
          <Link to="/addadmin" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Admin User</span></Link>
          <br />
          <i className="fa-solid fa-file-pdf fs-6 me-3 my-2"></i>
          <Link to="/viewUsers" className='text-decoration-none text-black'><span className='fs-6'>View Users</span></Link>
        </Link>
      </div>
      </Auth>
      
      {/* customer sidebar */}
      <Auth position="patient">
    <hr className="text-dark" />
    <div className='list-group list-group-flush'>
        <Link to="/patientdashboard" className="list-group-item py-1">
          <small>Menu</small><br />
          <i className="fa-solid fa-house fs-6 me-3 my-2"></i>
          <span className='fs-6 my-2'>Dashboard</span>
        </Link>
        
        <Link to="/" className="list-group-item py-3">
          <small>Reports</small><br />

          <i className="fa-solid fa-file fs-6 me-3 my-2"></i>
          <Link to="/patient_Report_view" className='text-decoration-none text-black'><span className='fs-6 my-2'>View Reports</span></Link>
          <br />
          <i className="fa-solid fa-file-pdf fs-6 me-3 my-2"></i>
          <Link to="/patient_Report_upload" className='text-decoration-none text-black'><span className='fs-6'>Upload Report</span></Link>
        </Link>
        
    </div>
    </Auth>
    {/*Doctor sidebar*/}
    <Auth position="doctor">
    <hr className="text-dark" />
    <div className='list-group list-group-flush'>
        <Link to="/doctor" className="list-group-item py-1">
          <small>Menu</small><br />
          <i className="fa-solid fa-house fs-6 me-3 my-2"></i>
          <span className='fs-6 my-2'>Dashboard</span>
        </Link>
        
        <Link to="/" className="list-group-item py-3">
          <small>Manage Patients</small><br />
          <i className="fa-solid fa-user-plus fs-6 me-3 my-2"></i>
          <Link to="/addpatients" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Patients</span></Link>
          <br />
          <i className="fa-solid fa-user-group fs-6 me-3 my-2"></i>
          <Link to="/allpatient" className='text-decoration-none text-black'><span className='fs-6'>View Patients</span></Link>
          <br />
        </Link>

        <Link to="/" className="list-group-item py-3">
          <small>Reports</small><br />
          <i className="fa-solid fa-file fs-6 me-3 my-2"></i>
          <Link to="/patientdiognosis" className='text-decoration-none text-black'><span className='fs-6 my-2'>View Reports</span></Link>
          <br />
          <i className="fa-solid fa-file-pdf fs-6 me-3 my-2"></i>
          <Link to="/medical_rprt" className='text-decoration-none text-black'><span className='fs-6'>Upload Report</span></Link>
        </Link>
        
    </div>
    </Auth>
    </aside>

  )
}
