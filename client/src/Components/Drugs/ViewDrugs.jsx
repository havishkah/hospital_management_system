import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';

export const ViewDrugs = () => {

  const [drugs,setDrugs] = useState([]);
  const [searchText, setSearchText] = useState('');
  const service=new Service();

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

  //Delete a drug
  function drugDelete(id){
    
        const confirmDelete = window.confirm('Are you confirm to delete drug??');
        if(confirmDelete){
          service.delete(`drugs/${id}`)
         .then(() => {
          getDrugs();
        })
        .catch((err) =>{
           alert(err);
        })
}
  }

  const handlesearchArea = value => {
    setSearchText(value);
    filterData(value);   
  }

const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue){
        getDrugs();
    }
    else{      
        const filteredData = drugs.filter(item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        });
        setDrugs(filteredData);
    }
}

  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>VIEW DRUGS</h4>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.." onChange={ e => handlesearchArea(e.target.value)}/>
        </div> <br />
        <div>
        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">Drug ID</th>
                        <th scope="col">Drug Name</th>
                        <th scope="col">Drug Amount</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {drugs.map((drug,index) => (
                            <tr key={drug._id}>
                            <td>{index+1}</td>
                            <td>{drug.drugName}</td>
                            <td>{drug.qty}</td>
                            <td>{drug.status}</td>
                            <td>
                            <button type="submit" onClick={() => drugDelete(drug._id)} className="btn btn-danger" style={{color:'white'}}><i class="fa-solid fa-trash-can"></i>&nbsp;Delete</button>
                            </td>
                            </tr> 

                    ))
                    }
                    </tbody>
                </table>
            </div>
    </main>
  )
}
