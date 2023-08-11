import React from 'react'
import {BsPeopleFill} from 'react-icons/bs'
import doctor from '../../assets/doctor.png'

export const PatientDashboard = () => {
  return (
    <main className='main-container'>
       <div className='main-title'>
          <h4>DASHBOARD</h4>
       </div> 
      <br />
      <br />
      <br />
       
        <div className='second-card'>
        <div className="big-card">
            <div className='img-col'>
               <img src={doctor} alt="" height='240px' width='250px'/>
            </div> 
            <div className='article'>
            <h5>What is the difference between the first and second vaccines?</h5>
            <small>The purpose of the two vaccines is actually different, yes the first <span>(vaccine)</span> is to see the 
            body's response.new the second(vaccine) is to form immunity(body)</small>
            </div>
          </div>

          <div >
            
            <div className="artical1">
            <h5 style={{color:'Green',fontSize:'20px'}}>What is the American equivalent of what British hospitals call A&E?</h5>
            <div>
            <small style={{color:'Green'}}>E.R (Emergency Room/Accident & Emergency). Also accept Emergency Department/Ward/Center/Unit</small> 
             
            </div>
            </div> 
          </div>
       </div> 

    </main>
  )
}
