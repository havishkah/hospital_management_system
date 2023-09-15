import React,{useState,useEffect} from 'react'
import Service from '../../../utilities/http';
import {Link,useNavigate,useParams} from 'react-router-dom'

function PatientDiognosis () {


    const service = new Service()
    const navigate = useNavigate();
    const [nic,setNic] = useState('');

    useEffect(() =>{
        handleClick();
    },[])

    const handleClick = (e) => {
        //  e.preventDefault();

         const respone = service.get('patient/nic', nic)
         respone.then((res) => {
             console.log(res);

         }).catch((error) => {
             console.error('Error with adding data:', error);
         });

    }

     
  return (


      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Patient Details</h5>

                    <br/>
                    <br/>
                
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Patient Nic</label>
                                    <input type="text" name="username" className="form-control" value={nic} onChange={(e) => {
                                        setNic(e.target.value)
                                    }} />
                                </div>
                                <div className="col-md-6">
                                <div className="mb-3">
                                <button style={{height:'40px',fontSize:'16px'}} type="button" onClick={handleClick} className="btn btn-primary btn-lg">Submit</button>  
                                </div>
                            </div>
            
                            </div>
                            </div>
                    </form>
                    </div>
                </div>
            </main>
        

  )
}

export default PatientDiognosis
