import React,{useState,useEffect} from 'react'
import Service from '../../../utilities/http';
import {Link,useNavigate,useParams} from 'react-router-dom'

function ViewDiagnosis () {

    const service = new Service()
    const navigate = useNavigate();
    const Param = useParams();
    const id = Param.id

    //view patient details
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');

    //loading existing data to form
    useEffect(() =>{
       loadPatient();
       loadAdmitPatient();
    },[])

    function loadPatient(){
         const respone =  service.get(`/patient/${id}`)
         respone.then((res) =>{
                 setGender(res.data[0].Gender);
                 setAge(res.data[0].Age);

         }).catch((err) =>{
               alert(err);
     })
    }

    //view admit patients
    const [name, setName] = useState('');
    const [bht, setBht] = useState('');
    const [createdAt, setCreatedAt] = useState('');
 
 
     function loadAdmitPatient(){
          const respone =  service.get(`admit/${id}`)
          respone.then((res) =>{
                  setName(res.data[0].name);
                  setBht(res.data[0].bht);
                  setCreatedAt(res.data[0].createdAt);
 
          }).catch((err) =>{
                alert(err);
      })
     }


  return (

      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>Diagnosis Card Details</h5>
                     
                    </div>
                   
                    <p className="mt-3" style={{color:'grey'}}>Patient Information</p>
                   
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Name</label>
                                    <input type="text" name="username" className="form-control" value={name} onChange={(e) => {
                                        setName(e.target.value);
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
                                    <label style={{fontSize:'14px'}} className="form-lable">BHT No</label>
                                    <input type="text" name="address" className="form-control" value={bht} onChange={(e) => {
                                        setBht(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Admitted Date</label>
                                    <input type="text" name="address" className="form-control" value={createdAt} onChange={(e) => {
                                        setCreatedAt(e.target.value);
                                    }}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Discharged Date</label>
                                    <input type="text" name="address" className="form-control" input value="2023-12-23" />
                                </div>
                            </div>
                            
                            <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                            <p className="mt-3" style={{color:'grey'}}>Other Infromation</p>
                            {/* <button style={{marginRight:'40px', height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Edit</button>  */}
                            </div>  
                            
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Presenting Complaint</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Diagnoses</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">HR</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">BP</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">IX</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Management</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Discharge Medication</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Plan</label>
                                    <textarea rows="4" cols="50" type="text" name="address" className="form-control" input value="Test Test Test Test" />
                                </div>
                            </div>
                            
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <button style={{marginLeft:'180px', height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button>&nbsp;
                                    <Link to='/#'><button style={{height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Edit</button></Link>&nbsp; 
                                    <button style={{height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary text-white btn-lg">Generate Report</button> &nbsp;      
                                </div>
                               
                            </div>
                        
                        </div>
                    </form>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    
                
            </div>

                
            </main>
        

  )
}

export default ViewDiagnosis
