import React, {useState, useEffect} from "react";
import Service from '../../../utilities/http';
import {useParams,useNavigate,Link} from "react-router-dom";

function ViewDocDetail () {

  const service=new Service(); 
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState('');

  //view doctor details
  const {id} = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [initials, setInitials] = useState('');
  const [dob, setDob] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [nic, setNic] = useState('');
  const [contact, setContact] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [ward,setWard] = useState('');

  const data = {
    firstName:firstName,
    lastName:lastName,
    initials:initials,
    Dob:dob,
    Gender:gender,
    email:email,
    nic:nic,
    contact:contact,
    specialist:specialist,
    ward:ward
  }

  //loading existing data to form
  useEffect(() =>{
    loadDoctor();
    getPatients();
  },[])

function loadDoctor(){
    const respone =  service.get(`doctor/${id}`)
    respone.then((res) =>{
      console.log(res.data)
      setFirstName(res.data.firstName);
      setLastName(res.data.lastName);
      setInitials(res.data.initials);
      setDob(res.data.Dob);
      setEmail(res.data.email);
      setGender(res.data.Gender);
      setNic(res.data.nic);
      setContact(res.data.contact);
      setSpecialist(res.data.specialist);
      setWard(res.data.ward);
  }).catch((err) =>{
      alert(err);
  })
}

//    //Delete doctor
//    function doctorDelete(){
    
//     const respose = service.delete(`doctor/${id}`)
//     respose.then(() => {
//       alert('Are you confirm to remove doctor??');
//       navigate('/alldoc');
//     })
//     .catch((err) =>{
//        alert(err);
//     })
// } 

//update function
function doctorUpdate(){
    console.log(data);
    const respone =  service.patch(`doctor/${id}`,data)
      respone.then((res) => {
        console.log(res.data);
        navigate('/alldoc');
        alert("Doctor updated successfully");
      })
      .catch((err) => {
        alert(err);
      });
  };


  //view patients

  const [patients,setPatients] = useState([]);

  function getPatients(){
        const respone = service.get ('patient/') 
        respone.then((res) => {
          console.log (res.data)
          setPatients(res.data);
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
        getPatients();
    }
    else{      
        const filteredData = patients.filter(item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        });
        setPatients(filteredData);
    }
}

  return (

      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>Doctor Details</h5>
                    <button style={{height:'40px', fontSize:'16px'}} type="button" className="btn btn-danger text-white btn-lg">Delete</button> 
                    </div>
                   
                    <p className="mt-3" style={{color:'grey'}}>Basic Infromation</p>

                    <form>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">First name</label>
                                    <input type="text" name="username" className="form-control" value={firstName} onChange={(e) => {
                                     setFirstName(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Last Name</label>
                                    <input type="text" name="email" className="form-control" value={lastName} onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" value={initials} onChange={(e) => {
                                        setInitials(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Date of Birth</label>
                                    <input type="date" name="address" className="form-control" value={dob} onChange={(e) => {
                                        setDob(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Nic</label>
                                    <input type="text" name="address" className="form-control" value={nic} onChange={(e) => {
                                        setNic(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Gender</label>
                                    <select className="form-control" value={gender} onChange={(e) => {
                                        setGender(e.target.value);
                                    }} name="status" >
                                        <option value="">--Select Gender--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <p className="mt-3" style={{color:'grey'}}>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Contact Number</label>
                                    <input type="text" name="address" className="form-control" value={contact} onChange={(e) => {
                                        setContact(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Email</label>
                                    <input type="text" name="address" className="form-control" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                    <select className="form-control" name="status" value={specialist} onChange={(e) => {
                                        setSpecialist(e.target.value);
                                    }} >
                                        <option value="">--Select Ward Specialist--</option>
                                        <option value="Cardiology Specialist">Cardiology Specialist</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <select className="form-control" name="status" value={ward} onChange={(e) => {
                                        setWard(e.target.value);
                                    }} >
                                        <option value="">--Select Assigned Ward--</option>
                                        <option value="Cardiology Ward 01">Cardiology Ward 01</option>
                                        <option value="0">Cardiology Ward 02</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                {/* <label className="form-lable"></label> */}
                                    <Link to='/alldoc'><button style={{marginLeft:'280px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp; 
                                    
                                    <button style={{height:'40px', fontSize:'16px'}} type="button" onClick={doctorUpdate}className="btn btn-primary btn-lg">Update</button>
                                </div>
                               
                            </div>
                        
                        </div>
                    </form>
                    </div>

                    <div className="main-title mt-5">
                    <h4 className="mt-4">Dr. {firstName}'s Patients</h4>
                    </div>
                    <div className="col-lg-3 mt-2 mb-2">
                     <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.." onChange={ e => handlesearchArea(e.target.value)}/>
                    </div> <br />
                    <div>

                    <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Patient Name</th>
                        <th scope="col">NIC</th>
                        <th scope="col">Word Specialist</th>
                        <th scope="col">Assigned Wards</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                      {patients.map((patient,index) => (
                            <tr key={patient._id}>
                            <td>{index+1}</td>
                            <td>{patient.firstName}</td>
                            <td>{patient.nic}</td>
                            <td>{patient.specialist}</td>
                            <td>{patient.ward}</td>
                            <td>Onboard</td>
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                      ))
}
                    </tbody>
                </table>
            </div>

                </div>
            </main>
        

  )
}

export default ViewDocDetail
