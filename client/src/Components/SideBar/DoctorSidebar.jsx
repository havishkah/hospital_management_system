import React from 'react'

export const DoctorSidebar = ({openSidebarToggle,OpenSidebar}) => {
  return (
    <aside id='sidebar' className={openSidebarToggle ? 'sidebar-responsive': ""}>
    <div className='m-2'>
       <span className='brand-name fs-6'><strong><span style={{color:'blue'}}>Coronary</span> Care Unit</strong></span>
       &nbsp;<span className='icon close_icon text-white' onClick={OpenSidebar}>X</span>
    </div>
    <hr className="text-dark" />
    <div className='list-group list-group-flush'>
        <a href="/admin" className="list-group-item py-1">
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
        
    </div>
  </aside>
  )
}
