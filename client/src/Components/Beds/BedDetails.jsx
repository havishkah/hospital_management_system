import React, {useState, useEffect} from "react";
import Service from '../../../utilities/http';
import {useParams,useNavigate,Link} from "react-router-dom";

function BedDetails ()  {

  const service = new Service()
  const navigate = useNavigate()

  //view bed details
  const {id} = useParams();
  const [specialist, setSpecialist] = useState('');
  const [ward,setWard] = useState('')
  const [catagory,setCatagory] = useState('')
  const [description,setDescription] = useState('')
  const [status,setStatus] = useState('')

  const data = {
    specialist:specialist,
    ward:ward,
    catagory:catagory,
    description:description,
    status:status
  }
    
  //loading existing data to form
  useEffect(() =>{
    loadBed();
  },[])

  function loadBed(){
    const respone =  service.get(`bed/${id}`)
    respone.then((res) =>{
      console.log(res.data)
      setSpecialist(res.data.specialist);
      setWard(res.data.ward);
      setCatagory(res.data.catagory);
      setDescription(res.data.description);
      setStatus(res.data.status);

  }).catch((err) =>{
      alert(err);
  })
  }

    //Delete bed
    function bedDelete(){
    
        const respose = service.delete(`bed`,id)
        respose.then(() => {
          alert('Are you confirm to remove bed??');
          navigate('/allbed');
        })
        .catch((err) =>{
           alert(err);
        })
    } 


  //Bed update function
  function bedUpdate(){
    const respone = service.put(`bed`,id,data);
        respone.then((res)=>{
        console.log(res.data);
        navigate('/allbed');
        alert('Bed Updated Successfully');
    }).catch((err) => {
       alert(err);
    })
  }

  return (
    <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <div style={{justifyContent: 'space-between', display : 'flex' }} className='main-title mt-3'>
                    <h5>{ward}-{catagory} Bed Details</h5>
                    <button style={{height:'40px', fontSize:'16px'}} type="button" onClick={bedDelete} className="btn btn-danger text-white btn-lg">Delete Bed</button> 
                    </div>
                   
                    <p className="mt-3" style={{color:'grey'}}>Ward & Bed Infromation</p>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                    <select className="form-control" name='status' value={specialist} onChange={(e) => {
                                     setSpecialist(e.target.value);
                                    }}>
                                      <option value="">--Select Ward Specialist--</option>
                                      <option value="Cardiology Specialist">Cardiology Specialist</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <select className="form-control" value={ward} onChange={(e) => {
                                     setWard(e.target.value);
                                    }}>
                                        <option value="">--Select Assigned Ward</option>
                                        <option value="Cardiology Ward 01">Cardiology Ward 01</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Bed Category</label>
                                    <select className="form-control" name="status" value={catagory} onChange={(e) => {
                                     setCatagory(e.target.value);
                                    }} >
                                        <option value="">--Select Bed Category--</option>
                                        <option value="Electric">Electric</option>
                                        <option value="Semi-electric">Semi-electric</option>
                                        <option value="Manual">Manual</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Description About Bed</label>
                                    <textarea rows="1" cols="50" type="text" name="bed_descrip" className="form-control" value={description} onChange={(e) => {
                                     setDescription(e.target.value);
                                    }}/>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Status</label>
                                    <select className='form-control' value={status} onChange={(e) => {
                                     setStatus(e.target.value);
                                    }}>
                                        <option value="">--Select Status--</option>
                                        <option value="Occupied">Occupied</option>
                                        <option value="Unoccupied">Unoccupied</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-md-6"></div>
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                {/* <label className="form-lable"></label> */}
                                    <Link to='/allbed'><button style={{marginLeft:'330px',height:'40px', fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button></Link>&nbsp; 
                                    
                                    <button style={{height:'40px', fontSize:'16px'}} type="button" onClick={bedUpdate} className="btn btn-primary btn-lg">Update</button>
                                </div>
                               
                            </div>
                        
                        </div>
                    </form>
                    </div>
                    </div>
                    </main>
  )
}

export default BedDetails;