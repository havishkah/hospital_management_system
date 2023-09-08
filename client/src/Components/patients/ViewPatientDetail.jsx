import React, {useState, useEffect} from "react";
import Service from '../../../utilities/http';
import {useParams,useNavigate,Link} from "react-router-dom";

function ViewPatientDetail() {

    const service = new Service()
    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
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
    const [patientid,setPatientid] = useState('');

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
                 setPatientid(res.data._id);
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

       useEffect(() => {
        getDoctors();
       }, []);

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

     //Delete patient
     function patientDelete(){
    
        const respose = service.delete(`patient`,id)
        respose.then(() => {
          alert('Are you confirm to remove patient??');
          navigate('/allpatient');
        })
        .catch((err) =>{
           alert(err);
        })
    } 

    //admit a patient
    // const [patientid,setPatientid] = useState('');
    const [docName, setDocName] = useState('');
    const [name, setName] = useState('');
    const [bht, setBht] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [ward, setWard] = useState('');
    const [bed, setBed] = useState('');
    const [status, setStatus] = useState('');
    const [diagnosis, setDiagnosis] = useState('');

    const handleSubmit = () => {

    const admitedPatient = {
        patientid:patientid,
        docName:docName,
        name:name,
        bht:bht,
        specialist:specialist,
        ward:ward,
        bed:bed,
        status:status,
        diagnosis:diagnosis
    }

    const respone = service.post(`admit/add`, admitedPatient)
        respone.then((res) => {
            console.log(res);
            alert('Patient admited Successfully');
            navigate('/admitpatients');
        }).catch((error) => {
            console.error('Error with adding data:', error);
        });

    }

  return (

      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5 className="mt-2">Patient {firstName}'s Details</h5>
                    <div>
                    {/* <button style={{marginLeft:'400px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Add Prescription</button> &nbsp;
                    <button style={{height:'40px', fontSize:'16px'}}type="submit" className="btn btn-primary text-white btn-lg">View Diagnosis</button> &nbsp;*/}
                    <button style={{height:'40px', fontSize:'16px'}}type="button" onClick={patientDelete} className="btn btn-danger text-white btn-lg">Delete</button>  
                    </div>
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
                                    <label style={{fontSize:'14px'}}className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" value={initials} onChange={(e) => {
                                     setInitials(e.target.value);
                                    }} />
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
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Gender</label>
                                    <select className="form-control" onChange={(e) => {
                                        setGender(e.target.value);
                                    }} name="status" value={gender}>
                                        <option value="">--Select Gender--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Age</label>
                                    <input type="text" name="address" className="form-control" value={age} onChange={(e) => {
                                        setAge(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <p className="mt-3" style={{color:'grey'}}>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Contact Number</label>
                                    <input type="text" name="address" className="form-control" value={contact} onChange={(e) => {
                                        setContact(e.target.value);
                                    }}/>
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
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Address</label>
                                    <input type="text" name="address" className="form-control" input value={address} onChange={(e) => {
                                        setAddress(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Emergency Contact Number</label>
                                    <input type="text" name="address" className="form-control" value={emergencycont} onChange={(e) => {
                                        setEmergencycont(e.target.value);
                                    }} />
                                </div>
                            </div>

                            <hr className="text-grey mt-4" />

                            {/* admit patient */}
                            <h4 className="mt-3 mb-3" style={{color:'grey'}}>Admit the Patient</h4>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Doctor Name</label>
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setDocName(e.target.value);
                                    }}>
                                        <option value="">--Select Doctor Name--</option>
                                        {doctors.map((doctor) => (
                                            <option value={doctor._id}>Dr. {doctor.firstName + " " + doctor.lastName}</option>
                                        ))}

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Patient Name</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setName(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">BHT No</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setBht(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Ward Specialist</label>
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setSpecialist(e.target.value);
                                    }}>
                                        <option value="">--Select Ward Specialist--</option>
                                        <option value="Cardiology Specialist">Cardiology Specialist</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Assigned Ward</label>
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setWard(e.target.value);
                                    }}>
                                        <option value="">--Select Assigned Ward--</option>
                                        <option value="Cardiology Ward 01">Cardiology Ward 01</option>
                                        <option value="1">Cardiology Ward 02</option>
                                        <option value="1">Cardiology Ward 02</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable"> Ward Bed</label>
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setBed(e.target.value);
                                    }}>
                                        <option value="">--Select Ward Bed--</option>
                                        <option value="Electrical">Cardiology Ward 01-Electrical</option>
                                        <option value="Semi-Electrical">Cardiology Ward 01-Semi-Electrical</option>
                                        <option value="Non-Electrical">Cardiology Ward 01-Non-Electrical</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Status</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setStatus(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Diagnosis</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" onChange={(e) => {
                                        setDiagnosis(e.target.value);
                                    }} />
                                </div>
                            </div>

                            <div className="col-md-6">
                            </div>
                         
                            <div className="col-md-6">
                                <div className="mb-3">
                                {/* <label className="form-lable"></label> */}
                                    <Link to='/allpatient'><button style={{marginLeft:'320px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp;
                                    
                                    <button style={{height:'40px', fontSize:'16px'}} type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Admit</button>
                                </div>
                               
                            </div>

                        </div>
                    </form>
                    </div>
                  </div>
            </main>
        

  )
}
//test
export default ViewPatientDetail
