import React, { useState } from 'react'
import Service from '../../../utilities/http';
import { useNavigate,Link } from "react-router-dom";

function AddBeds () {

    const navigate = useNavigate();
    const [bedNo, setBedNo] = useState('');
    const [specialist, setSpecialist] = useState('');
    const [ward,setWard] = useState('');
    const [catagory,setCatagory] = useState('')
    const [description,setDescription] = useState('')
    const status= "Unoccupied";
    const service = new Service();

    const handleSubmit = () => {

        // e.preventDefault();


        const newBed = {
            BedNo: bedNo,
            specialist:specialist,
            ward:ward,
            catagory:catagory,
            description:description,
            status:status
        }

        const respone =  service.post('bed/add', newBed)
        respone.then((res) => {
            console.log(res);
            alert('Bed added Successfully');
            navigate('/allbed');
        }).catch((error) => {
            alert('Fill All Fields');
            console.error('Error with adding data:', error);
        });

    }

  return (
      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Add Beds</h5>
                    <form>
                        <div className="row">
                            
                            <p className="mt-3" style={{color:'grey'}}>Ward & Bed Infromation</p>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Bed No</label>
                                    <input 
                                        type='text' 
                                        value={bedNo} 
                                        onChange={(e) => { setBedNo(e.target.value)}} 
                                        className='form-control'/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Ward Specialist</label>
                                   
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setSpecialist(e.target.value);
                                    }} >
                                        <option value="">--Select Ward Specialist--</option>
                                        <option value="Cardiology Specialist">Cardiology Specialist</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Assigned Ward</label>
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setWard(e.target.value);
                                    }}>
                                        <option value="">--Select Assigned Ward--</option>
                                        <option value="Cardiology Ward 01">Cardiology Ward 01</option>
                                        <option value="Cardiology Ward 02">Cardiology Ward 02</option>
                                        <option value="Cardiology Ward 03">Cardiology Ward 02</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Bed Category</label>
                                    <select className="form-control" name="status" onChange={(e) => {
                                        setCatagory(e.target.value);
                                    }}>
                                        <option value="">--Select Bed Category--</option>
                                        <option value="Electric">Electric</option>
                                        <option value="Semi-Electric">Semi-electric</option>
                                        <option value="Manual">Manual</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Description About Bed</label>
                                    <textarea rows="1" cols="50" type="text" name="bed_descrip" className="form-control" onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}  />
                                </div>
                            </div>


                            <div className="col-md-6"></div>
                            
                            <div className="col-md-6">
                               
                             
                            </div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-lable"></label>
                                    <Link to='/' style={{height:'40px', fontSize:'16px'}} className="btn btn-primary bg-white text-primary btn-lg">Back</Link>&nbsp;
                                    
                                    <button style={{height:'40px', fontSize:'16px'}} type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Submit</button>
                                </div>
                               
                            </div>

                        </div>
                    </form>
                    </div>
                </div>
            </main>
        

  )
}

export default AddBeds
