import React,{useState,useEffect} from 'react'
import Service from '../../../utilities/http';
import { useNavigate,useParams } from "react-router-dom";

export const AddPrescrip = () => {

   const service = new Service();
   const navigate = useNavigate();
   const {id} = useParams();
   const [drugs,setDrugs] = useState([]);
   const [doctors,setDoctors] = useState([]);
   const [patients,setPatients] = useState([]);

   //add prescription
   const [patientid,setPatientid] = useState('');
   const [doctorid,setDoctorid] = useState('');
   const [catagory, setCatagory] = useState('');
   const [drug, setDrug] = useState('');
   const [diagnosis, setDiagnosis] = useState('');
   const [frequency, setFrequency] = useState('');
   const [dosage, setDosage] = useState('');
   const [qty, setQty] = useState('');

   const handleSubmit = () => {

    // e.preventDefault();
      
    const newPrescription = {
        patientid:patientid,
        doctorid:doctorid,
        catagory:catagory,
        drug:drug,
        diagnosis:diagnosis,
        frequency:frequency,
        dosage:dosage,
        qty:qty,

    }

    const respone =  service.post('prescription/add', newPrescription)
    respone.then((res) => {
        console.log(res);
        alert('Prescription added Successfully');
        // navigate('/alldrug');
    }).catch((error) => {
        console.error('Error with adding data:', error);
    });
    
}


   //load drugs
    useEffect(() => {
        getDrugs();
    }, []);
  
    function getDrugs(){
      const respone = service.get ('drugs/') 
      respone.then((res) => {
        console.log (res.data)
        setDrugs(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }

    useEffect(() => {
        getDoctors();
        getPatients();
       }, []);

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

    //load assigned patients
    function getPatients(){
        const respone = service.get (`patient/details/doctor/${id}`) 
        respone.then((res) => {
          console.log (res.data)
          setPatients(res.data);
        })
        .
        catch((error) => {
          console.error('Error fetching data:', error);
        });
    
  }

  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>Add Prescription</h4>
        </div>

        <form>
                       <div className="row">
                           
                           <p className="mt-3" style={{color:'grey'}}>Prescription Infromation</p>

                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Doctor</label>
                                   <select className="form-control" name="status" onChange={(e) => {
                                        setDoctorid(e.target.value);
                                    }}>
                                      <option value="">--Select Doctor--</option>
                                        {doctors.map((doctor) => (
                                            <option value={doctor._id}>Dr. {doctor.firstName + " " + doctor.lastName}</option>
                                        ))}
                                   </select>
                               </div>
                           </div>
                           <div className="col-md-6">
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Category</label>
                                   <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setCatagory(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Drug Type</label>
                                   <select className="form-control" name="status" onChange={(e) => {
                                        setDrug(e.target.value);
                                    }}>
                                       <option value="">--Select Drug Type--</option>
                                       {drugs.map((drug) => (
                                            <option value={drug._id}>{drug.drugName}</option>
                                        ))}
                                   </select>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Diagnosis</label>
                                   <textarea rows="4" cols="50" type="text" name="address" className="form-control" onChange={(e) => {
                                        setDiagnosis(e.target.value);
                                    }} />
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Frequency</label>
                                   <textarea rows="4" cols="50"  type="text" name="address" className="form-control" onChange={(e) => {
                                        setFrequency(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Dosage</label>
                                   <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setDosage(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Quantity</label>
                                   <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setQty(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6"></div>
                       
                           <div className="col-md-6">
                               <div className="mb-3">
                               {/* <label className="form-lable"></label> */}
                                   <button style={{marginLeft:'280px',width:'100px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button>&nbsp;
                                   <button style={{width:'100px',height:'40px', fontSize:'16px'}} type="button" onClick={handleSubmit} className="btn btn-primary text-white btn-lg">Submit</button>
                               </div>
                              
                           </div>
                       
                       </div>
                   </form>
    </main>
  )
}
