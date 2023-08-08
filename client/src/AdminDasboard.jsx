// client/src/components/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const AdminDashboard = () => {
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    Axios.get('/api/adminDashboard/data')
      .then((response) => {
        setDashboardData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
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
