import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Service from '../../../utilities/http';
import {BsPeopleFill} from 'react-icons/bs'
import doctor from '../../assets/doctor.png'

export const AdminDashboard = () => {

  const [dashboardData, setDashboardData] = useState([]);
  const service=new Service();
  useEffect(() => {
    const respone = service.get ('adminDashboard/data') 
    respone.then((response) => {
      console.log (response)
      // setDashboardData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

    // // Fetch data from the server
    // axios.get('http://localhost:8000/api/adminDashboard/data')
 
  }, []);

  return (
    <main className='main-container'>
       <div className='main-title'>
          <h4>DASHBOARD</h4>
          <div>
          <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
          </div>
       </div> 

       <div className='main-cards'>
          <div style={{height:'150px'}} className="card">
            <h5 style={{color:'blue'}}>Total Patients Onboard</h5>
            <div className='card-inner'>
              <h2>56</h2>
              <BsPeopleFill className='card_icon'/>
            </div>  
          </div>

          <div style={{height:'150px'}} className="card">
            <h5 style={{color:'orange'}}>Total Patients Discharged</h5>
            <div className='card-inner'>
              <h2>100</h2>
              <BsPeopleFill className='card_icon'/>
            </div> 
          </div>

          <div style={{height:'150px'}} className="card">
            <h5 style={{color:'green'}}>Available Beds</h5>
            <div className='card-inner'>
              <h2>50/100</h2>
              <i class="fa-solid fa-bed card_icon"></i>
            </div>
          </div>

       </div> 
        <br /> <br />
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

          <div style={{height:'246px',backgroundColor:'rgb(248, 204, 204)'}} className="card">
            <h5 style={{color:'red',fontSize:'25px'}}>Available Doctors</h5>
            <div className="card-inner">
               <h2 style={{fontSize:'50px'}}>05</h2>
               <i style={{fontSize:'80px'}} class="fa-solid fa-user-doctor card_icon"></i>
            </div> 
          </div>
       </div> 

</main>

  )}