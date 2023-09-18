import React, { useState, useEffect, useRef } from 'react'
import Service from '../../../utilities/http';
import { Link, useNavigate, useParams } from 'react-router-dom'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



const ViewDiagnosis = () => {

    const divRef = useRef(null);

    const handleGeneratePdf = () => {
        // Get the <div> element you want to convert to PDF
        const divToConvert = divRef.current;

        // Create a new jsPDF instance
        const pdf = new jsPDF('p', 'mm', 'a4');

        // Use html2canvas to capture the <div> as an image
        html2canvas(divToConvert).then((canvas) => {
            // Add the image (canvas) to the PDF
            const imgData = canvas.toDataURL('image/png');
            pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);

            // Save or display the PDF
            pdf.save('Diagnosis Card.pdf');
        });
    };


    const service = new Service()
    const navigate = useNavigate();
    const Param = useParams();
    const id = Param.id

    //view patient details
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    //loading existing data to form
    useEffect(() => {
        loadPatient();
        loadAdmitPatient();
    }, [])

    function loadPatient() {
        const respone = service.get(`/patient/${id}`)
        respone.then((res) => {
            setGender(res.data.Gender);
            setAge(res.data.Age);

        }).catch((err) => {
            alert(err);
        })
    }

    //view admit patients
    const [name, setName] = useState('');
    const [bht, setBht] = useState('');
    const [createdAt, setCreatedAt] = useState('');
    const [updatedAt, setUpdatedAt] = useState('');

    function loadAdmitPatient() {
        const respone = service.get(`admit/${id}`)
        respone.then((res) => {
            setName(res.data[0].name);
            setBht(res.data[0].bht);
            setCreatedAt(res.data[0].createdAt);
            setUpdatedAt(res.data[0].updatedAt);
        }).catch((err) => {
            alert(err);
        })
    }


    return (

        <main className="main-container">
            <div className="row">
                <div className="col-md-12">
                    <div ref={divRef}>
                        <form>

                            <div style={{ justifyContent: 'space-between', display: 'flex' }} className='main-title mt-3'>
                                <h5>Patient {name} - Diagnosis Card</h5>

                            </div>

                            <p className="mt-3" style={{ color: 'grey' }}>Patient Information</p>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Name</label>
                                        <input type="text" name="username" className="form-control" value={name} onChange={(e) => {
                                            setName(e.target.value);
                                        }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Age</label>
                                        <input type="text" name="email" className="form-control" value={age} onChange={(e) => {
                                            setAge(e.target.value);
                                        }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Gender</label>
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
                                        <label style={{ fontSize: '14px' }} className="form-lable">BHT No</label>
                                        <input type="text" name="address" className="form-control" value={bht} onChange={(e) => {
                                            setBht(e.target.value);
                                        }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Admitted Date</label>
                                        <input type="text" name="address" className="form-control" value={createdAt} onChange={(e) => {
                                            setCreatedAt(e.target.value);
                                        }} />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Discharged Date</label>
                                        <input type="text" name="address" className="form-control" value={updatedAt} onChange={(e) => {
                                            setUpdatedAt(e.target.value);
                                        }} />
                                    </div>
                                </div>

                                <div style={{ justifyContent: 'space-between', display: 'flex' }} className='main-title mt-3'>
                                    <p className="mt-3" style={{ color: 'grey' }}>Other Infromation</p>
                                    {/* <button style={{marginRight:'40px', height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Edit</button>  */}
                                </div>

                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Presenting Complaint</label>
                                        <textarea rows="4" cols="50" type="text" name="address" className="form-control" placeholder='Enter Complaint...' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Diagnoses</label>
                                        <textarea rows="4" cols="50" type="text" name="address" className="form-control" placeholder='Enter Diagnoses...' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">HR</label>
                                        <textarea rows="4" cols="50" type="text" name="address" className="form-control" placeholder='Enter HR...' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">BP</label>
                                        <textarea rows="4" cols="50" type="text" name="address" className="form-control" placeholder='Enter BP...' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">IX</label>
                                        <textarea rows="4" cols="50" type="text" name="address" className="form-control" placeholder='Enter IX...' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Management</label>
                                        <textarea rows="4" cols="50" type="text" name="address" className="form-control" placeholder='Enter Management...' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Discharge Medication</label>
                                        <textarea rows="4" cols="50" type="text" name="address" className="form-control" placeholder='Enter Discharge Medication...' />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label style={{ fontSize: '14px' }} className="form-lable">Plan</label>
                                        <textarea rows="4" cols="50" type="text" name="address" className="form-control" placeholder='Enter Plan...' />
                                    </div>
                                </div>



                            </div>


                        </form>
                    </div>
                    <div className="row">
                    <div className="col-md-6">


                    </div>

                    <div className="col-md-6">
                        <div className="mb-3">
                            <Link to={`/viewdocpde/${id}`}><button style={{ marginLeft: '250px', height: '40px', fontSize: '16px' }} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp;
                            <button style={{ height: '40px', fontSize: '16px' }} type="button" onClick={handleGeneratePdf} className="btn btn-primary text-white btn-lg">Generate Report</button> &nbsp;
                        </div>
                    </div>
                    </div>


                </div>

                <br />
                <br />
                <br />


            </div>


        </main>


    )
}

export default ViewDiagnosis
