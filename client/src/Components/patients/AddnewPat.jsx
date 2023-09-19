import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';
import { useNavigate,Link } from "react-router-dom";

 export const AddNewPatient= () => {

    const navigate = useNavigate();
    const [doctors, setDoctors] = useState([]);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [initials, setInitials] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [nic, setNic] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [emergencycont, setEmergencycont] = useState('');
    
    const service = new Service();

    const handleSubmit = async (e) => {

        e.preventDefault();


        const newPatient = {
            firstName: firstName,
            lastName: lastName,
            username:username,
            initials: initials,
            Dob: dob,
            Gender: gender,
            Age: age,
            nic: nic,
            email: email,
            address: address,
            contact: contact,
            emergencycont: emergencycont

        }

        const respone = service.post('patient/add', newPatient)
        const json = respone.json   
        respone.then((res)=>{
            console.log(res)
        }).catch((error)=>{
            alert(json.error)
        })
            console.log(newPatient);


            // alert('Patient added Successfully');
            // navigate('/allpatient');
       

    }

    useEffect(() => {
        getDoctors();
    }, []);

    function getDoctors() {
        const respone = service.get('doctor/')
        respone.then((res) => {
            setDoctors(res.data);
        })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }

    return (
        <main className="main-container">
            <div className="row">
                <div className="col-md-12">
                    <h5 className="mt-2">Add Patients</h5>
                    <p className="mt-3" style={{ color: 'grey' }}>Basic Infromation</p>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">First name</label>
                                    <input type="text" name="fname" className="form-control" value={firstName} onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Last Name</label>
                                    <input type="text" name="lname" className="form-control" value={lastName} onChange={(e) => {
                                        setLastName(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" value={initials} onChange={(e) => {
                                        setInitials(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Date of Birth</label>
                                    <input type="date" name="date" className="form-control" value={dob} onChange={(e) => {
                                        setDob(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Nic</label>
                                    <input type="text" name="address" className="form-control" value={nic} onChange={(e) => {
                                        setNic(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Gender</label>
                                    <select className="form-control" value={gender} onChange={(e) => {
                                        setGender(e.target.value);
                                    }} name="status" >
                                        <option value="">--Select Gender--</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Age</label>
                                    <input type="text" name="age" className="form-control" value={age} onChange={(e) => {
                                        setAge(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">UserName</label>
                                    <input type="text" name="user" className="form-control" value={username} onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                </div>
                            </div>
                            
                            <p className="mt-3" style={{ color: 'grey' }}>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Contact Number</label>
                                    <input type="text" name="cont" className="form-control" value={contact} onChange={(e) => {
                                        setContact(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Email</label>
                                    <input type="email" name="email" className="form-control" value={email} onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Address</label>
                                    <input type="text" name="fewfe" className="form-control" value={address} onChange={(e) => {
                                        setAddress(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Emergency Contact Number</label>
                                    <input type="text" name="emer" className="form-control" value={emergencycont} onChange={(e) => {
                                        setEmergencycont(e.target.value);
                                    }} />
                                </div>
                            </div>
                           
                            <div className="col-md-6">


                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable"></label>
                                    <Link to='/admin'><button style={{ marginLeft: '320px', height: '40px', fontSize: '16px' }}  className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp;

                                    <button type="submit" style={{ height: '40px', fontSize: '16px' }} className="btn btn-primary btn-lg">Submit</button>

                                    
                                </div>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </main>
    )

 }