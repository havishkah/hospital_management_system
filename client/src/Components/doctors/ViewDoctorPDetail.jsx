import React,{useState,useEffect} from 'react'
import Service from '../../../utilities/http';
import {Link,useNavigate,useParams} from 'react-router-dom'

function ViewDoctorPDetail() {

    const service = new Service()
    const navigate = useNavigate();
    const [doctors,setDoctors] = useState([]);
    const [searchText, setSearchText] = useState('');
    const Param = useParams();
    const id = Param.id

    //view patient details
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [initials, setInitials] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [nic, setNic] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [emergencycont, setEmergencycont] = useState('');

    //loading existing data to form
    useEffect(() =>{
       loadPatient();
    },[])

    function loadPatient(){
         const respone =  service.get(`/patient/${id}`)
         respone.then((res) =>{
                 setFirstName(res.data.firstName);
                 setLastName(res.data.lastName);
                 setInitials(res.data.initials);
                 setDob(res.data.Dob);
                 setGender(res.data.Gender);
                 setAge(res.data.Age);
                 setNic(res.data.nic);
                 setEmail(res.data.email);
                 setAddress(res.data.address);
                 setContact(res.data.contact);
                 setEmergencycont(res.data.emergencycont);
                 

         }).catch((err) =>{
               alert(err);
     })
    }


    //view admit patients
    const [docName, setDocName] = useState('');
    const [bht, setBht] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [ward, setWard] = useState('');
    const [bed, setBed] = useState('');
    const [status, setStatus] = useState('');
    const discharge = "Discharge"

     //loading existing data to form
     useEffect(() =>{
        loadAdmitPatient();
        getDoctors();
        getPrescriptions();
     },[])
 
     function loadAdmitPatient(){
          const respone =  service.get(`admit/${id}`)
          respone.then((res) =>{
                  setDocName(res.data[0].docName);
                  setBht(res.data[0].bht);
                  setSpecialist(res.data[0].specialist);
                  setWard(res.data[0].ward);
                  setBed(res.data[0].bed);
                  setStatus(res.data[0].status);
 
          }).catch((err) =>{
                alert(err);
      })
     }

     const data1 = {
    
        status:discharge
    
      }

     const handleDischarge = () => {
        setStatus('Discharge');
        // const url = `admit/update/${id}`;
        service.put(`admit/update`,id,data1)
          .then((res) => {
            console.log(res);
            alert("Patient discharged successfully.");
            navigate('/admitpatients');
          })
          .catch((error) => {
            console.error("Error with updating status:", error);
            // Handle error here
          });
      };
      
    //load doctors
    function getDoctors() {
        const respone = service.get('doctor/')
        respone.then((res) => {
            console.log(res.data)
            setDoctors(res.data);
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    //view prescriptions

  const [prescriptions,setPrescriptions] = useState([]);

  function getPrescriptions(){
    console.log(id);
        const respone = service.get(`prescription/p_detail`,id) 
        respone.then((res) => {
          
          console.log (res.data)
          setPrescriptions(res.data);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    
  }

  //search function
  const handlesearchArea = value => {
    setSearchText(value);
    filterData(value);   
}

const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue){
        getPrescriptions();
    }
    else{      
        const filteredData = prescriptions.filter(item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        });
        setPrescriptions(filteredData);
    }
}



  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>Patient {firstName} 's Details</h5>
                    <Link to={`/addprescrip/${id}`}><button style={{marginLeft:'550px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Add Prescription</button></Link> &nbsp;
                    <button style={{height:'40px', fontSize:'16px'}} type="submit" onClick={handleDischarge} className="btn btn-danger text-white btn-lg">Discharge</button>
                    </div>
                   
                    <p className="mt-3" style={{color:'grey'}}>Basic Infromation</p>
                   
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">First name</label>
                                    <input type="text" name="username" className="form-control" value={firstName} onChange={(e) => {
                                     setFirstName(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Last Name</label>
                                    <input type="text" name="email" className="form-control" value={lastName} onChange={(e) => {
                                     setLastName(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" value={initials} onChange={(e) => {
                                     setInitials(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Date of Birth</label>
                                    <input type="date" name="address" className="form-control" value={dob} onChange={(e) => {
                                     setDob(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Nic</label>
                                    <input type="text" name="address" className="form-control" value={nic} onChange={(e) => {
                                     setNic(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Gender</label>
                                    <select className="form-control" onChange={(e) => {
                                        setGender(e.target.value);
                                    }} name="status" value={gender}>
                                        <option value="">--Select Gender--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Age</label>
                                    <input type="text" name="address" className="form-control" value={age} onChange={(e) => {
                                        setAge(e.target.value);
                                    }} />
                                </div>
                            </div>


                            <p className="mt-3" style={{color:'grey'}}>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Contact Number</label>
                                    <input type="text" name="address" className="form-control" value={contact} onChange={(e) => {
                                        setContact(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Email</label>
                                    <input type="text" name="address" className="form-control" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Address</label>
                                    <input type="text" name="address" className="form-control" value={address} onChange={(e) => {
                                        setAddress(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Emergency Contact Number</label>
                                    <input type="text" name="address" className="form-control" value={emergencycont} onChange={(e) => {
                                        setEmergencycont(e.target.value);
                                    }} />
                                </div>
                            </div>
                            
                           
                        
                            <p className="mt-3" style={{color:'grey'}}>Ward Infromation</p>
                            <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Doctor</label>
                                   <select className="form-control" name="status" value={docName} onChange={(e) => {
                                        setDocName(e.target.value);
                                    }}>
                                      <option value="">--Select Doctor--</option>
                                        {doctors.map((doctor) => (
                                            <option value={doctor._id}>Dr. {doctor.firstName + " " + doctor.lastName}</option>
                                        ))}
                                   </select>
                               </div>
                           </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                    <input type="text" name="address" className="form-control" value={specialist} onChange={(e) => {
                                        setSpecialist(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <input type="text" name="address" className="form-control" value={ward} onChange={(e) => {
                                        setWard(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">Ward Bed</label>
                                    <input type="text" name="address" className="form-control" value={bed} onChange={(e) => {
                                        setBed(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label label style={{fontSize:'14px'}} className="form-lable">BHT No</label>
                                    <input type="text" name="address" className="form-control" value={bht} onChange={(e) => {
                                        setBht(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Status</label>
                                    <input type="text" name="address" className="form-control" value={status} onChange={(e) => {
                                        setStatus(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            

                            <div className="col-md-6">
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                {/* <label className="form-lable"></label> */}
                                    <button style={{marginLeft:'120px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">View Patient History</button> &nbsp;
                                    
                                    <Link to={`/viewdiagnosis/${id}`}><button style={{height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary btn-lg">View Diagonosis Report</button></Link>
                                </div>
                               
                            </div>
                        
                        </div>
                    </form>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <div className="main-title">
                     <h4>Patient {firstName}'s Prescription Details</h4>
                         </div>
                    <div className="col-lg-3 mt-2 mb-2">
                     <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.." onChange={ e => handlesearchArea(e.target.value)}/>
                    </div> <br />
                    <div>

                    <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Issue Date</th>
                        <th scope="col">Diagnosis</th>
                        <th scope="col">Drug</th>
                        <th scope="col">Frequency</th>
                        <th scope="col"></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                        {prescriptions.map((prescription,index) => (
                              <tr key={prescription.patientid}>
                              <td>{index+1}</td>
                              <td>{prescription.createdAt}</td>
                              <td>{prescription.diagnosis}</td>
                              <td>{prescription.drug}</td>
                              <td>{prescription.frequency}</td>
                              <td>
                              <a href={`/doc_pa_priscripd/${prescription.patientid}`}><button type="button" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                              </td>
                              </tr> 
                        ))}


                    </tbody>
                </table>
            </div>

                </div>
            </main>
        

  )
}

export default ViewDoctorPDetail
