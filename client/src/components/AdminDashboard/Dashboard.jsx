import React from 'react'

export default function Dashboard()  {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
          {/*sidebar*/}

          <div className="bg-danger col-auto col-md-4 col-lg-3 min-vh-100 d-flex flex-column justify-content-between">
          <div className="bg-danger p-2">
             <a href="#" className='d-flex text-decoration-none align-items-center text-white mt-1' role='button'>
             <span className='fs-3 d-none d-sm-inline'>SideMenu</span>
             </a>
             <hr className="text-white" />
             <ul className="nav nav-pills flex-column mt-4">
                <li className="nav-item py-2 py-sm-0">
                  <a href="#" className="nav-link text-white" id="menu">
                     <i class="fs-5 fa fa-gauge"></i>&nbsp;&nbsp;<span className='fs-5 d-none d-sm-inline'>Dashboard</span>
                  </a>
                </li>
                <li className="nav-item py-2 py-sm-0">
                  <a href="#" className="nav-link text-white">
                    <i class="fa-solid fa-house"></i>&nbsp;&nbsp;<span className='fs-5 d-none d-sm-inline'>Home</span>
                  </a>
                </li>
                <li className="nav-item py-2 py-sm-0">
                  <a href="#submenu1" className="nav-link text-white" data-toggle="collapse" data-target="#submenu1">
                    <i class="fa-solid fa-stethoscope"></i>&nbsp;&nbsp;<span className='fs-5 d-none d-sm-inline'>Manage Doctors</span>
                    &nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">Add Doctor</a>
                       </li>
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">View Doctors</a>
                       </li>
                  </ul>
                </li>
                <li className="nav-item py-2 py-sm-0">
                  <a href="#submenu2" className="nav-link text-white" data-toggle="collapse" data-target="#submenu2">
                    <i class="fa-solid fa-bed-pulse"></i>&nbsp;&nbsp;<span className='fs-5 d-none d-sm-inline'>Manage Patients</span>
                    &nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="list-unstyled flex-column pl-3 collapse" id="submenu2" aria-expanded="false">
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">Add Patient</a>
                       </li>
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">View Patients</a>
                       </li>
                  </ul>
                </li>
                <li className="nav-item py-2 py-sm-0">
                  <a href="#submenu3" className="nav-link text-white" data-toggle="collapse" data-target="#submenu3">
                    <i class="fa-solid fa-bed"></i>&nbsp;&nbsp;<span className='fs-5 d-none d-sm-inline'>Manage Beds</span>
                    &nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="list-unstyled flex-column pl-3 collapse" id="submenu3" aria-expanded="false">
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">Add Bed</a>
                       </li>
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">View Beds</a>
                       </li>
                  </ul>
                </li>
                <li className="nav-item py-2 py-sm-0">
                  <a href="#submenu4" className="nav-link text-white" data-toggle="collapse" data-target="#submenu4">
                    <i class="fa-solid fa-tablets"></i>&nbsp;&nbsp;<span className='fs-5 d-none d-sm-inline'>Manage Drugs</span>
                    &nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="list-unstyled flex-column pl-3 collapse" id="submenu4" aria-expanded="false">
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">Add Drug</a>
                       </li>
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">View Drugs</a>
                       </li>
                  </ul>
                </li>

             </ul>
          </div>
          </div>
          {/*end of side-bar*/}

  {/* <h1>Home</h1> */}
     <div className='col-sm-7 d-flex p-5'>
      <div>
     <div class='card mx-4 mt-5 my-5'>
          <div class='card-body bg-secondary'>
             <h5 class='card-title text-bold text-white'>Total Patients Onboard</h5>
             <h1 className='text-white text-bold mt-6'>10</h1>
          </div>
     </div>
     </div>

     <div>
     <div class='card mx-4 mt-5 my-5'>
          <div class='card-body bg-secondary'>
              <h5 class='card-title text-bold text-white'>Total Patients Discharged</h5>
              <h1 className='text-white text-bold mt-6'>5</h1>
          </div>
     </div>
     </div>

   </div>

 <div className="col-lg-2 d-flex">
 <div className="dropdown p-3">
            <button className="btn border-none dropdown-toggle" type="button" id="triggerId" aria-expanded="false" data-bs-toggle="dropdown">
                 <i className="fa fa-user"></i>&nbsp;<span className='ms-2'>John Doe</span>
            </button>
            <div className="dropdown-menu" aria-labelledby="triggerId">
                <button className="dropdown-item">Profile</button>
                <button className="dropdown-item">Logout</button>
            </div>
          </div>
 </div>
  </div>
  </div>


  )
}
