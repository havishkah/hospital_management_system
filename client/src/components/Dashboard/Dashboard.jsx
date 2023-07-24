import React from 'react'

export default function Dashboard()  {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        {/* Side-bar */}
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
                  <a href="#sidemenu" className="nav-link text-white" data-bs-toggle="collapse" aria-current="page">
                    <i class="fa-solid fa-stethoscope"></i>&nbsp;&nbsp;<span className='fs-5 d-none d-sm-inline'>Manage patients</span>
                    &nbsp;&nbsp;<i className="fa fa-caret-down"></i>
                  </a>
                  <ul className="nav collapse ms-1 flex-column" id="sidemenu" data-bs-parent="#menu">
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">Add New Patient</a>
                       </li>
                       <li className="nav-item">
                           <a href="" className="nav-link text-white">View Patients</a>
                       </li>
                  </ul>
                </li>

                
                

             </ul>
          </div>
          </div>

          {/*end of side-bar*/}

  {/* <h1>Home</h1> */}
     <div className='col-sm-7 d-flex p-5'>
     <div class='card mx-4 mt-5 my-5' style={{height:'20'}}>
          <div class='card-body bg-secondary'>
             <h5 class='card-title text-bold text-white'>Total Patients Onboard Last Month</h5>
             <h1 className='text-white text-bold mt-6'>10</h1>
          </div>
     </div>

     <div class='card mx-4 mt-5 my-5'>
          <div class='card-body bg-secondary'>
              <h5 class='card-title text-bold text-white'>Total Patients Discharged Lat month</h5>
              <h1 className='text-white text-bold mt-6'>5</h1>
          </div>
      </div>


      <div class='card mx-4 mt-5 my-5'>
          <div class='card-body bg-secondary'>
              <h5 class='card-title text-bold text-white'>Occupied Beds</h5>
              <h1 className='text-white text-bold mt-6'>5</h1>
          </div>
      </div>


      <div class='card mx-4 mt-5 my-5'>
          <div class='card-body bg-secondary'>
              <h5 class='card-title text-bold text-white'>Availabe Beds</h5>
              <h1 className='text-white text-bold mt-6'>5</h1>
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
