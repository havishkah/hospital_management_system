import React, { useState, useEffect } from 'react';
import Service from '../../../utilities/http';
import {BsPeopleFill} from 'react-icons/bs'
import doctor from '../../assets/doctor.png'

export const DoctorDashboard = () => {
	const [doctorCount, setDoctorCount] = useState(0);
	const [dischargedPatientCount, setDischargedPatientCount] = useState(0);
	const [admittedPatientCount, setAdmittedPatientCount] = useState(0);
	const [availableBeds, setAvailableBeds] = useState(0);
	const service = new Service();

	useEffect(() => {
		getDoctorCount();
		getPatientCount();
		getAvailableBeds();
	}, []);
export const DoctorDashboard= () =>{
  const [doctorCount, setDoctorCount] = useState(0);
  const [availableBeds, setAvailableBeds] = useState(0);
  const [dischargedPatientCount, setDischargedPatientCount] = useState(0);
  const [admittedPatientCount, setAdmittedPatientCount] = useState(0);
  const service = new Service();
  

  useEffect(() => {
    getDoctorCount(); 
    getDischargedPatientCount();
    getAdmittedPatientCount();
    getAvailableBeds();
  }, []);

  function getDoctorCount() {
    const response = service.get('doctor/');
    response
      .then((res) => {
        const count = res.data.length;
        setDoctorCount(count);
      })
      .catch((error) => {
        console.error('Error fetching doctor count:', error);
      });
  }


	function getAvailableBeds() {
		const response = service.get("bed/");
		response
			.then((res) => {
				const bedsData = res.data;
				const unoccupiedBeds = bedsData.filter(
					(bed) => bed.status === "Unoccupied",
				);
				setAvailableBeds({
					total: bedsData.length,
					unoccupied: unoccupiedBeds.length,
				});
			})
			.catch((error) => {
				console.error("Error fetching bed data:", error);
			});
	}

	return (
		<main className="main-container">
			<div className="main-title">
				<h4>DASHBOARD</h4>
			</div>
			<div className="main-cards">
				<div style={{ height: "150px" }} className="card">
					<h5 style={{ color: "blue" }}>
						Total Patients Onboard
					</h5>
					<div className="card-inner">
						<h2>{patientCount}</h2>
						<BsPeopleFill className="card_icon" />
					</div>
				</div>

				<div style={{ height: "150px" }} className="card">
					<h5 style={{ color: "orange" }}>
						Total Patients Discharged
					</h5>
					<div className="card-inner">
						<h2>100</h2>
						<BsPeopleFill className="card_icon" />
					</div>
				</div>

          <div style={{height:'150px'}} className="card">
            <h5 style={{color:'green'}}>Available Beds</h5>
            <div className='card-inner'>
            <h2>{availableBeds.unoccupied}/{availableBeds.total}</h2>
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
            <h2 style={{ fontSize: '50px' }}>{doctorCount}</h2>
               <i style={{fontSize:'80px'}} class="fa-solid fa-user-doctor card_icon"></i>
            </div> 
          </div>
       </div> 

</main>

  )}

