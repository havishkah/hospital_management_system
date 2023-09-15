import React,{useState,useEffect} from 'react'
import Service from '../../../utilities/http';
import {Link,useNavigate,useParams} from 'react-router-dom'

export const DocPatientPrescrip = () => {

    const service = new Service()
    const navigate = useNavigate();
    // const [drugs,setDrugs] = useState([]);
    const Param = useParams();
    const id = Param.id

       //view patient details
       const [firstName, setFirstName] = useState('');
       const [dob, setDob] = useState('');
       const [gender, setGender] = useState('');
       const [age, setAge] = useState('');
   
       //loading existing data to form
       useEffect(() =>{
          loadPatient();
          loadPrescription();
        //   getDrugs();
       },[])
   
       function loadPatient(){
            const respone =  service.get(`/patient/${id}`)
            respone.then((res) =>{
                    setFirstName(res.data[0].firstName);
                    setDob(res.data[0].Dob);
                    setGender(res.data[0].Gender);
                    setAge(res.data[0].Age);
   
            }).catch((err) =>{
                  alert(err);
        })
       }


          //view prescription details
          const [catagory, setCatagory] = useState('');
          const [drug, setDrug] = useState('');
          const [diagnosis, setDiagnosis] = useState('');
          const [frequency, setFrequency] = useState('');
          const [dosage, setDosage] = useState('');
          const [qty, setQty] = useState('');
      
          function loadPrescription(){
               const respone =  service.get(`/prescription/p_detail/${id}`)
               respone.then((res) =>{
                       setCatagory(res.data[0].catagory);
                       setDrug(res.data[0].drug);
                       setDiagnosis(res.data[0].diagnosis);
                       setFrequency(res.data[0].frequency);
                       setDosage(res.data[0].dosage);
                       setQty(res.data[0].qty);
               }).catch((err) =>{
                     alert(err);
           })
          }


    //  //load drugs
    //   function getDrugs(){
    //   const respone = service.get ('drugs/') 
    //   respone.then((res) => {
    //     console.log (res.data)
    //     setDrugs(res.data);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //   });
    // }


  return (
    <main className='main-container'>
      <div className="main-title">
          <h4>Patient {firstName}'s Prescription Details</h4>
      </div>

      <p className="mt-3" style={{color:'grey'}}>Patient Infromation</p>
                   
                   <form>
                       <div className="row">
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Name</label>
                                   <input type="text" name="username" className="form-control" value={firstName} onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Age</label>
                                   <input type="text" name="email" className="form-control" value={age} onChange={(e) => {
                                        setAge(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
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
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Date of Birth</label>
                                   <input type="date" name="address" className="form-control" value={dob} onChange={(e) => {
                                        setDob(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <br />
                           <br />
                           <p className="mt-3" style={{color:'grey'}}>Prescription Infromation</p>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Category</label>
                                   <input type="text" name="address" className="form-control" value={catagory} nChange={(e) => {
                                        setCatagory(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Drug Type</label>
                                   {/* <select className="form-control" name="status" value={drug} onChange={(e) => {
                                        setDrug(e.target.value);
                                    }}>
                                       <option value="">--Select Drug Type--</option>
                                       {drugs.map((drug) => (
                                            <option value={drug.drugName}>{drug.drugName}</option>
                                        ))}
                                   </select> */}
                                   <input type="text" name="address" className="form-control" value={drug} nChange={(e) => {
                                        setDrug(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Diagnosis</label>
                                   <textarea rows="4" cols="50" type="text" name="address" className="form-control" value={diagnosis} onChange={(e) => {
                                        setDiagnosis(e.target.value);
                                    }}  />
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Frequency</label>
                                   <textarea rows="4" cols="50" type="text" name="address" className="form-control" value={frequency} onChange={(e) => {
                                        setFrequency(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label style={{fontSize:'14px'}} className="form-lable">Dosage</label>
                                   <input type="text" name="address" className="form-control" value={dosage} onChange={(e) => {
                                        setDosage(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           <div className="col-md-6">
                               <div className="mb-3">
                                   <label className="form-lable">Quantity</label>
                                   <input type="text" name="address" className="form-control" value={qty} onChange={(e) => {
                                        setQty(e.target.value);
                                    }}/>
                               </div>
                           </div>
                           
                           <div className="col-md-6">
                              
                            
                           </div>
                       
                           <div className="col-md-6">
                               <div className="mb-3">
                                 <Link to={`/viewdocpde/${id}`}><button style={{marginLeft:'380px',width:'100px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link> 
                               </div>
                              
                           </div>
                       
                       </div>
                   </form>
    </main>
  )
}
