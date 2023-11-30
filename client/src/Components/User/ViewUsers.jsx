import React, { useState, useEffect } from 'react';
import Service from '../../../utilities/http';
import { useParams } from 'react-router-dom';

export const ViewUsers = () => {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const service = new Service();

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    const response = service.get('admin/get');
    response
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  //Search function
  const handlesearchArea = value => {
    setSearchText(value);
    filterData(value);   
  }

const filterData = value => {
    const lowerCaseValue = value.toLowerCase().trim();
    if(!lowerCaseValue){
        getUsers();
    }
    else{      
        const filteredData = users.filter(item => {
            return Object.keys(item).some(key => {
                return item[key].toString().toLowerCase().includes(lowerCaseValue);
            })
        });
        setUsers(filteredData);
    }
}
  return (
    <main className="main-container">
      <div className="main-title">
        <h4>VIEW USERS</h4>
      </div>

      <div className="col-lg-3 mt-2 mb-2">
        <input
          style={{ marginLeft: '715px' }}
          type="search"
          className="form-control"
          placeholder="Search.."
          onChange={(e) => handlesearchArea(e.target.value)}
        />
      </div>
      <br />
      <div>
        <table className="table" celled>
          <thead>
            <tr>
              <th scope="col"></th> 
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope='col'>Role</th>
              
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td> 
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
