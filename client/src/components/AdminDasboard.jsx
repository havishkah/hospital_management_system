// client/src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Service from '../../utilities/http';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);
  const service=new Service ();
  useEffect(() => {
    const respone = service.get ('adminDashboard/data') 
    respone.then((response) => {
      console.log (response)
      setDashboardData(response.data);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

    // // Fetch data from the server
    // axios.get('http://localhost:8000/api/adminDashboard/data')
 
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <pre>{JSON.stringify(dashboardData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default AdminDashboard;
