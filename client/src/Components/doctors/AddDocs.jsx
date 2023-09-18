import React, { useState } from 'react'
import Service from '../../../utilities/http';
import { useNavigate,Link } from "react-router-dom";
import { useSignup } from "../../hooks/useSignup"

function AddDocs() {

    const  {signup, error, isLoading} = useSignup()

    const navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [initials, setInitials] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [nic, setNic] = useState('');
    const [contact, setContact] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [ward,setWard] = useState('');
    const role = "doctor"
    const service = new Service();

    const handleSubmit = async (e) => {

         e.preventDefault();


        const newDoctor = {
            firstName: firstName,
            lastName: lastName,
            username:username,
            initials: initials,
            Dob: dob,
            password:password,
            Gender: gender,
            nic: nic,
            email: email,
            contact: contact,
            specialist: specialist,
            ward:ward,
            
        }
        

        const respone =  service.post('doctor/add', newDoctor)
        respone.then((res) => {
            console.log(res);
            alert('Doctor added Successfully');
            navigate('/alldoc');
        }).catch((error) => {
            console.error('Error with adding data:', error);
        });

        const newUser = {
            username:username,
            password:password,
            email: email,
            contact: contact,
            role:role
        }

        await signup(newUser)

    }


    return (
        <main className="main-container">
            <div className="row">
                <div className="col-md-12">
                    <h5 className="mt-2">Add Doctors</h5>
                    <p className="mt-3" style={{ color: 'grey' }}>Basic Infromation</p>
                    <form >
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">First name</label>
                                    <input type="text" name="username" className="form-control" onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Last Name</label>
                                    <input type="text" name="email" className="form-control" onChange={(e) => {
                                        setLastName(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Name with Initials</label>
                                    <input type="text" name="phone" className="form-control" onChange={(e) => {
                                        setInitials(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Date of Birth</label>
                                    <input type="date" name="address" className="form-control" onChange={(e) => {
                                        setDob(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Nic</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setNic(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Gender</label>
                                    <select className="form-control" onChange={(e) => {
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
                                    <label style={{ fontSize: '14px' }} className="form-lable">UserName</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setUsername(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Password</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setPassword(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <p className="mt-3" style={{ color: 'grey' }}>Contact Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Contact Number</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setContact(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Email</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setEmail(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <p className="mt-3" style={{ color: 'grey' }}>Other Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Ward Specialist</label>
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setSpecialist(e.target.value);}}>
                                        <option value="">--Select Ward Specialist--</option>
                                        <option value="Cardiology Specialist">Cardiology Specialist</option>

                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setWard(e.target.value);}} >
                                        <option value="">--Select Assigned Ward--</option>
                                        <option value="Cardiology Ward 01">Cardiology Ward 01</option>
                                        <option value="Cardiology Ward 02">Cardiology Ward 02</option>
                                        <option value="Cardiology Ward 03">Cardiology Ward 03</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6">


                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable"></label>
                                    <Link to='/'><button style={{ marginLeft: '320px', height: '40px', fontSize: '16px' }} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp;

                                    <button style={{ height: '40px', fontSize: '16px' }} type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Submit</button>
                                    {error && <div className="error">{error}</div>}

                                </div>

                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </main>


    )
}

export default AddDocs
