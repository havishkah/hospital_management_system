import React,{useState,useEffect} from 'react'
import Service from '../../../utilities/http';
import {Link,useNavigate,useParams} from 'react-router-dom'

export const DischargedPatient = () => {

    const service = new Service()
    const navigate = useNavigate();
    const [doctors,setDoctors] = useState([]);
    const Param = useParams();
    const id = Param.id

      //loading existing data to form
        useEffect(() =>{
              getDoctors(); 
              loadAdmitPatient();
        },[])

    //view admit patients
    const [docName, setDocName] = useState('');
    const [name, setName] = useState('');
    const [bht, setBht] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [ward, setWard] = useState('');
    const [bed, setBed] = useState('');
    const [status, setStatus] = useState('');
    const [diagnosis, setDiagnosis] = useState('');

    function loadAdmitPatient(){
        const respone =  service.get(`admit/${id}`)
        respone.then((res) =>{
                setDocName(res.data[0].docName);
                setBht(res.data[0].bht);
                setSpecialist(res.data[0].specialist);
                setWard(res.data[0].ward);
                setBed(res.data[0].bed);
                setStatus(res.data[0].status);
                setDiagnosis(res.data[0].status);

        }).catch((err) =>{
              alert(err);
    })
   }

   const data = {
       docName:docName,
       name:name,
       status:status,
       diagnosis:diagnosis,
       bht: bht,
       bed: bed,
       specialist: specialist,
       ward: ward,

    }

    //discharge function
  function dischargePatient(){

    const respone =  service.put(`admit`,id,data)

      respone.then((res) => {
        console.log(res.data);
        navigate('/admitpatients');
        alert("Patient Discharged Successfully");
      })
      .catch((err) => {
        alert(err);
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

  return (
    <main className="main-container">
        <div className="row">
        <div className="col-md-12">
         {/* admit patient */}
     <h4 className="mt-3 mb-3" style={{color:'grey'}}>Discharge the Patient</h4>
     <form>
     <div className="row">
     <div className="col-md-6">
         <div className="mb-3">
             <label style={{ fontSize: '14px' }} className="form-lable">Doctor Name</label>
             <select className="form-control" name="status" value={docName} onChange={(e) => {
                 setDocName(e.target.value);
             }} aria-readonly>
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
             <input type="text" name="address" className="form-control" value={name} onChange={(e) => {
                 setName(e.target.value);
             }} aria-readonly/>
         </div>
     </div>
     <div className="col-md-6">
         <div className="mb-3">
             <label style={{ fontSize: '14px' }} className="form-lable">BHT No</label>
             <input type="text" name="address" className="form-control" value={bht} onChange={(e) => {
                 setBht(e.target.value);
             }} aria-readonly/>
         </div>
     </div>
     <div className="col-md-6">
         <div className="mb-3">
             <label style={{ fontSize: '14px' }} className="form-lable">Ward Specialist</label>
             <select className="form-control" name="status" value={specialist} onChange={(e) => {
                 setSpecialist(e.target.value);
             }} aria-readonly>
                 <option value="">--Select Ward Specialist--</option>
                 <option value="Cardiology Specialist">Cardiology Specialist</option>
             </select>
         </div>
     </div>
     <div className="col-md-6">
         <div className="mb-3">
             <label style={{ fontSize: '14px' }} className="form-lable">Assigned Ward</label>
             <select className="form-control" name="status" value={ward} onChange={(e) => {
                 setWard(e.target.value);
             }} aria-readonly>
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
             <select className="form-control" name="status" value={bed} onChange={(e) => {
                 setBed(e.target.value);
             }} aria-readonly>
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
             <input type="text" name="address" className="form-control" value={status} onChange={(e) => {
                 setStatus(e.target.value);
             }}/>
         </div>
     </div>
     <div className="col-md-6">
         <div className="mb-3">
             <label style={{ fontSize: '14px' }} className="form-lable">Diagnosis</label>
             <textarea rows="4" cols="50" type="text" name="address" className="form-control" value={diagnosis} onChange={(e) => {
                 setDiagnosis(e.target.value);
             }} />
         </div>
     </div>

     <div className="col-md-6">
     </div>
  
     <div className="col-md-6">
         <div className="mb-3">
         {/* <label className="form-lable"></label> */}
             <Link to='/allpatient'><button style={{marginLeft:'320px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-danger bg-white text-danger btn-lg">Back</button></Link>&nbsp;
             
             <button style={{height:'40px', fontSize:'16px'}} type="button" onClick={dischargePatient} className="btn btn-danger btn-lg">Discharge</button>
         </div>
        
     </div>
     </div>
     </form>
  </div>
 </div>
 </main>
  )
}
