import React from 'react'
import Auth from '../../Auth/auth'

export const SideBar = ({openSidebarToggle,OpenSidebar}) => {
  return (

    
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive': ""}>
    
      <div className='m-2'>
         <span className='brand-name fs-6'><strong><span style={{color:'blue'}}>Coronary</span> Care Unit</strong></span>
         &nbsp;<span className='icon close_icon text-white' onClick={OpenSidebar}>X</span>
      </div>
      {/* Admin sidebar */}
      <Auth position="1">
      <hr className="text-dark" />
      <div className='list-group list-group-flush'>
          <a href="/admin" className="list-group-item py-1">
            <small>Menu</small><br />
            <i class="fa-solid fa-house fs-6 me-3 my-2"></i>
            <span className='fs-6 my-2'>Dashboard</span>
          </a>
          <a href="" className="list-group-item py-3">
            <small>Manage Doctors</small><br />
            <i class="fa-solid fa-user-doctor fs-6 me-3 my-2"></i>
            <a href="/adddoc" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Doctors</span></a>
            <br />
            <i class="fa-solid fa-users fs-6 me-3 my-2"></i>
            <a href="/alldoc" className='text-decoration-none text-black'><span className='fs-6'>View Doctors</span></a>
          </a>
          <a href="" className="list-group-item py-3">
            <small>Manage Patients</small><br />
            <i class="fa-solid fa-user-plus fs-6 me-3 my-2"></i>
            <a href="/addpatients" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Patients</span></a>
            <br />
            <i class="fa-solid fa-user-group fs-6 me-3 my-2"></i>
            <a href="/allpatient" className='text-decoration-none text-black'><span className='fs-6'>View Patients</span></a>
          </a>
          <a href="" className="list-group-item py-3">
            <small>Manage Beds</small><br />
            <i class="fa-solid fa-bed-pulse fs-6 me-3 my-2"></i>
            <a href="/addbeds" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Beds</span></a>
            <br />
            <i class="fa-solid fa-bed fs-6 me-3 my-2"></i>
            <a href="/allbed" className='text-decoration-none text-black'><span className='fs-6'>View Beds</span></a>
          </a>
          <a href="" className="list-group-item py-3">
            <small>Manage Drugs</small><br />
            <i class="fa-solid fa-tablets fs-6 me-3 my-2"></i>
            <a href="/adddrugs" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Drugs</span></a>
            <br />
            <i class="fa-solid fa-pills fs-6 me-3 my-2"></i>
            <a href="/alldrug" className='text-decoration-none text-black'><span className='fs-6'>View Drugs</span></a>
          </a> <a href="" className="list-group-item py-3">
          <small>Reports</small><br />
          <i class="fa-solid fa-file fs-6 me-3 my-2"></i>
          <a href="/patientdiognosis" className='text-decoration-none text-black'><span className='fs-6 my-2'>Diagnosis Report</span></a>
          <br />
          <i class="fa-solid fa-file-pdf fs-6 me-3 my-2"></i>
          <a href="/medical_rprt" className='text-decoration-none text-black'><span className='fs-6'>Medical Report</span></a>
        </a>

      </div>
      </Auth>
      
      {/* customer sidebar */}
      <Auth position="2">
    <hr className="text-dark" />
    <div className='list-group list-group-flush'>
        <a href="/patientdashboard" className="list-group-item py-1">
          <small>Menu</small><br />
          <i class="fa-solid fa-house fs-6 me-3 my-2"></i>
          <span className='fs-6 my-2'>Dashboard</span>
        </a>
        
        <a href="" className="list-group-item py-3">
          <small>Reports</small><br />
          <i class="fa-solid fa-file fs-6 me-3 my-2"></i>
          <a href="/patientdiognosis" className='text-decoration-none text-black'><span className='fs-6 my-2'>Diagnosis Report</span></a>
          <br />
          <i class="fa-solid fa-file-pdf fs-6 me-3 my-2"></i>
          <a href="/medical_rprt" className='text-decoration-none text-black'><span className='fs-6'>Medical Report</span></a>
        </a>
        
    </div>
    </Auth>
    {/*Doctor sidebar*/}
    <Auth position="3">
    <hr className="text-dark" />
    <div className='list-group list-group-flush'>
        <a href="/doctor" className="list-group-item py-1">
          <small>Menu</small><br />
          <i class="fa-solid fa-house fs-6 me-3 my-2"></i>
          <span className='fs-6 my-2'>Dashboard</span>
        </a>
        
        <a href="" className="list-group-item py-3">
          <small>Manage Patients</small><br />
          <i class="fa-solid fa-user-plus fs-6 me-3 my-2"></i>
          <a href="/addpatients" className='text-decoration-none text-black'><span className='fs-6 my-2'>Add Patients</span></a>
          <br />
          <i class="fa-solid fa-user-group fs-6 me-3 my-2"></i>
          <a href="/allpatient" className='text-decoration-none text-black'><span className='fs-6'>View Patients</span></a>
        </a>

        <a href="" className="list-group-item py-3">
          <small>Reports</small><br />
          <i class="fa-solid fa-file fs-6 me-3 my-2"></i>
          <a href="/patientdiognosis" className='text-decoration-none text-black'><span className='fs-6 my-2'>Diagnosis Report</span></a>
          <br />
          <i class="fa-solid fa-file-pdf fs-6 me-3 my-2"></i>
          <a href="/medical_rprt" className='text-decoration-none text-black'><span className='fs-6'>Medical Report</span></a>
        </a>
        
    </div>
    </Auth>
    </aside>

  )
}
