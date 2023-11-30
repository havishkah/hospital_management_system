import React, { useState,useEffect } from 'react'
import Service from '../../../utilities/http';
import { Link } from 'react-router-dom';

export const ViewBeds = () => {

  const [beds,setBeds] = useState([]);
  const [searchText, setSearchText] = useState('');
  const service=new Service();

  useEffect(() => {
      getBeds();
  }, []);

  function getBeds(){
    const respone = service.get ('bed/') 
    respone.then((res) => {
      console.log (res.data)
      setBeds(res.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  }

  //View details function
  function bedView(id){
  console.log(id);
  navigate(`/beddetails/${id}`);
}

  const handlesearchArea = value => {
    setSearchText(value);
    filterData(value);   
}

const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue){
        getBeds();
    }
    else{      
        const filteredData = beds.filter(item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        });
        setBeds(filteredData);
    }
}

  return (
    <main className='main-container'>
        <div className="main-title">
            <h4>VIEW BEDS</h4>
        </div>

        <div className="col-lg-3 mt-2 mb-2">
          <input style={{marginLeft:'715px'}} type="search" className="form-control"  placeholder="Search.." onChange={ e => handlesearchArea(e.target.value)}/>
        </div> <br />
        <div>
        <table class="table" celled>
                    <thead>
                    <tr>
                        <th scope="col">Bed ID</th>
                        <th scope="col">Bed Category</th>
                        <th scope="col">Ward Specialist</th>
                        <th scope="col">Assigned Ward</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {beds.map((bed,index) => (
                            <tr key={bed._id}>
                            <td>{bed.BedNo}</td>
                            <td>{bed.catagory}</td>
                            <td>{bed.specialist}</td>
                            <td>{bed.ward}</td>
                            <td>{bed.status}</td>
                            <td>
                            <Link to={`/beddetails/${bed._id}`}><button type="button" className="btn btn-primary" onClick={() => bedView(bed._id)} style={{color:'white'}}><i className="fas fa-eye"></i>&nbsp;Details</button></Link>
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
