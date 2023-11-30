import React, { useState, useEffect, useRef } from 'react'
import Service from '../../../utilities/http';
import { Link, useNavigate, useParams } from 'react-router-dom'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';



export const ViewDiagnosis = () => {
    const [patientName, setPatientName] = useState('');
    const [age, setAge] = useState('');
    const [bhtNo, setBhtNo] = useState('');
    const [dateOfAdmission, setDateOfAdmission] = useState('');
    const [dateOfDischarge, setDateOfDischarge] = useState('');
    const [gender, setGender] = useState('');

    const [diagnosisA, setDiagnosisA] = useState('');
    const [diagnosisB, setDiagnosisB] = useState('');
    const [diagnosisC, setDiagnosisC] = useState('');
    const [diagnosisD, setDiagnosisD] = useState('');
    const [diagnosisE, setDiagnosisE] = useState('');

    const [presentingComplaint, setPresentingComplaint] = useState('');

    const [hr, setHR] = useState('');
    const [bp, setBP] = useState('');

    const [ecg, setECG] = useState('');

    const [troponinHb, setTroponinHb] = useState('');
    const [troponinSerumCreatine, setTroponinSerumCreatine] = useState('');

    const [fbsWBC, setFBSWBC] = useState('');
    const [fbsK, setFBSK] = useState('');

    const [sgotPit, setSGOTPit] = useState('');
    const [sgotNa, setSGOTNa] = useState('');

    const [sgpt, setSGPT] = useState('');

    const [management, setManagement] = useState('');

    const [dischargeMedication, setDischargeMedication] = useState('');

    const [plan, setPlan] = useState('');

    return (
        <main className="main-container">
            <div className="row">
                <div className="col-md-12">
                    <h5 className="mt-2">View Diagnosis</h5>
                    <form>
                        <div className="row">
                            {/* Part 1: Patient Information */}
                            <div className="col-md-6">
                                <h6>Part 1: Patient Information</h6>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Patient Name</label>
                                    <input type="text" name="patientName" className="form-control" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Age</label>
                                    <input type="text" name="age" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">BHT No</label>
                                    <input type="text" name="bhtNo" className="form-control" value={bhtNo} onChange={(e) => setBhtNo(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Date of Admission</label>
                                    <input type="text" name="dateOfAdmission" className="form-control" value={dateOfAdmission} onChange={(e) => setDateOfAdmission(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Date of Discharge</label>
                                    <input type="text" name="dateOfDischarge" className="form-control" value={dateOfDischarge} onChange={(e) => setDateOfDischarge(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Gender</label>
                                    <input type="text" name="gender" className="form-control" value={gender} onChange={(e) => setGender(e.target.value)} />
                                </div>
                            </div>

                            {/* Part 2: Diagnosis */}
                            <div className="col-md-6">
                                <h6>Part 2: Diagnosis</h6>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Diagnosis A</label>
                                    <textarea name="diagnosisA" className="form-control" value={diagnosisA} onChange={(e) => setDiagnosisA(e.target.value)} />
                                </div>
                            
                            </div>

                            {/* Part 3: Presenting Complaint */}
                            <div className="col-md-6">
                                <h6>Part 3: Presenting Complaint</h6>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Presenting Complaint</label>
                                    <textarea name="presentingComplaint" className="form-control" value={presentingComplaint} onChange={(e) => setPresentingComplaint(e.target.value)} />
                                </div>
                            </div>

                            {/* Part 4: Examination */}
                            <div className="col-md-6">
                                <h6>Part 4: Examination</h6>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">HR</label>
                                    <input type="text" name="hr" className="form-control" value={hr} onChange={(e) => setHR(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">BP</label>
                                    <input type="text" name="bp" className="form-control" value={bp} onChange={(e) => setBP(e.target.value)} />
                                </div>
                            </div>

                            {/* Part 5: Investigations */}
                            <div className="col-md-6">
                                <h6>Part 5: Investigations</h6>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">ECG</label>
                                    <textarea name="ecg" className="form-control" value={ecg} onChange={(e) => setECG(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Troponin Hb</label>
                                    <input type="text" name="troponinHb" className="form-control" value={troponinHb} onChange={(e) => setTroponinHb(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Troponin Serum Creatine</label>
                                    <input type="text" name="troponinSerumCreatine" className="form-control" value={troponinSerumCreatine} onChange={(e) => setTroponinSerumCreatine(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">FBS WBC</label>
                                    <input type="text" name="fbsWBC" className="form-control" value={fbsWBC} onChange={(e) => setFBSWBC(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">FBS K</label>
                                    <input type="text" name="fbsK" className="form-control" value={fbsK} onChange={(e) => setFBSK(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">SGOT Pit</label>
                                    <input type="text" name="sgotPit" className="form-control" value={sgotPit} onChange={(e) => setSGOTPit(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">SGOT Na</label>
                                    <input type="text" name="sgotNa" className="form-control" value={sgotNa} onChange={(e) => setSGOTNa(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">SGPT</label>
                                    <input type="text" name="sgpt" className="form-control" value={sgpt} onChange={(e) => setSGPT(e.target.value)} />
                                </div>
                            </div>

                            {/* Part 6: Management */}
                            <div className="col-md-6">
                                <h6>Part 6: Management</h6>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Management</label>
                                    <textarea name="management" className="form-control" value={management} onChange={(e) => setManagement(e.target.value)} />
                                </div>
                            </div>

                            {/* Part 7: Discharge Medication */}
                            <div className="col-md-6">
                                <h6>Part 7: Discharge Medication</h6>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Discharge Medication</label>
                                    <textarea name="dischargeMedication" className="form-control" value={dischargeMedication} onChange={(e) => setDischargeMedication(e.target.value)} />
                                </div>
                            </div>

                            {/* Part 8: Plan */}
                            <div className="col-md-6">
                                <h6>Part 8: Plan</h6>
                                <div className="mb-3">
                                    <label style={{ fontSize: '14px' }} className="form-lable">Plan</label>
                                    <textarea name="plan" className="form-control" value={plan} onChange={(e) => setPlan(e.target.value)} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-lable"></label>
                                    <Link to='/admin'><button style={{ marginLeft: '320px', height: '40px', fontSize: '16px' }} className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp;

                                    {/*<button type="submit" style={{ height: '40px', fontSize: '16px' }} className="btn btn-primary btn-lg">Submit</button>*/}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};
export default ViewDiagnosis
