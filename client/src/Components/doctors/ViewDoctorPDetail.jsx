import React,{useState,useEffect} from 'react'
import Service from '../../../utilities/http';
import {Link,useNavigate,useParams} from 'react-router-dom'

function ViewDoctorPDetail() {

    const service = new Service()
    const navigate = useNavigate();
    const {id} = useParams();

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

    // const data = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     initials: initials,
    //     Dob: dob,
    //     Gender: gender,
    //     Age: age,
    //     nic: nic,
    //     email: email,
    //     address: address,
    //     contact: contact,
    //     emergencycont: emergencycont,
      
    // }

    //loading existing data to form
    useEffect(() =>{
       loadPatient();
    },[])

    function loadPatient(){
         const respone =  service.get(`patient/${id}`)
         respone.then((res) =>{
                 console.log(res.data)
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

     //loading existing data to form
     useEffect(() =>{
        loadAdmitPatient();
     },[])
 
     function loadAdmitPatient(){
          const respone =  service.get(`admit/${id}`)
          respone.then((res) =>{
                  console.log(res.data)
                  setDocName(res.data.docName);
                  setBht(res.data.bht);
                  setSpecialist(res.data.specialist);
                  setWard(res.data.ward);
                  setBed(res.data.bed);
                  setStatus(res.data.status);
 
          }).catch((err) =>{
                alert(err);
      })
     }

  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>Patient {firstName}'s Details</h5>
                    <Link to='/addprescrip'><button style={{marginLeft:'550px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Add Prescription</button></Link> &nbsp;
                    <button style={{height:'40px', fontSize:'16px'}} type="submit" className="btn btn-danger text-white btn-lg">Discharge</button> 
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
                            
                           
                        
                            <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
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
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                {/* <label className="form-lable"></label> */}
                                    <button style={{marginLeft:'120px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">View Patient History</button> &nbsp;
                                    
                                    <Link to='/viewdiagnosis'><button style={{height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary btn-lg">View Diagonosis Report</button></Link>
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
                     <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.."/>
                    </div> <br />
                    <div>

        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        
                        <th scope="col">Issue Date</th>
                        <th scope="col">Category</th>
                        
                        <th scope="col"></th>
                        
                    </tr>
                    </thead>
                    <tbody>
                            <tr>
                            <td>001</td>
                            <td>2023-10-12</td>
                            <td>Cardiology Prescription</td>
                            
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 

                            <tr>
                            <td>002</td>
                            <td>2023-10-12</td>
                            <td>Cardiology Prescription</td>
                            
                            <td>
                            <a href='#'><button type="submit" className="btn btn-primary" style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></a>
                            </td>
                            </tr> 


                    </tbody>
                </table>
            </div>

                </div>
            </main>
        

  )
}

export default ViewDoctorPDetail
