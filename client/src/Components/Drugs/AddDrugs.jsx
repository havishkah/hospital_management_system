import React, { useState } from 'react'
import Service from '../../../utilities/http';
import { useNavigate } from "react-router-dom";

function AddDrugs () {

    const navigate = useNavigate();
    const [drugName, setDrugName] = useState('');
    const [type, setType] = useState('');
    const [qty, setQty] = useState('');
    const service = new Service();

    const handleSubmit = () => {

        // e.preventDefault();

        const newDrug = {
            drugName:drugName,
            type:type,
            qty:qty
        }

        const respone =  service.post('drugs/add', newDrug)
        respone.then((res) => {
            console.log(res);
            alert('Drug added Successfully');
            navigate('/alldrug');
        }).catch((error) => {
            console.error('Error with adding data:', error);
        });

    }



  return (

      <main className="main-container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="mt-2">Add Drugs</h5>
                    <p className="mt-3" style={{color:'grey'}}>Drug Infromation</p>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Drug name</label>
                                    <input type="text" name="username" className="form-control" onChange={(e) => {
                                        setDrugName(e.target.value);
                                    }}/>
                                </div>
                            </div>
                           
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Drug Amount</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setQty(e.target.value);
                                    }} />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label style={{fontSize:'14px'}} className="form-lable">Drug Type</label>
                                    <input type="text" name="address" className="form-control" onChange={(e) => {
                                        setType(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="col-md-6"></div>
                            
                            <div className="col-md-6"></div>
                        
                            <div className="col-md-6">
                                <div className="mb-3">
                                <label className="form-lable"></label>
                                    <button style={{marginLeft:'330px',height:'40px',fontSize:'16px'}} type="submit" className="btn btn-primary bg-white text-primary btn-lg">Back</button> &nbsp;
                                    
                                    <button style={{height:'40px',fontSize:'16px'}} type="button" onClick={handleSubmit} className="btn btn-primary btn-lg">Submit</button>
                                </div>
                               
                            </div>

                        </div>
                    </form>
                    </div>
                </div>
            </main>
        

  )
}

export default AddDrugs
