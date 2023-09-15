import React, { useEffect } from 'react';

function Login2() {
  useEffect(() => {
    // Retrieve the cookie value
    const cookieValue = document.cookie;

    // Parse the JSON cookie
    let cookieData = null;
    try {
      cookieData = JSON.parse('admin');
    } catch (error) {
      console.error('Error parsing cookie:', error);
    }

    // Access the "username" property
    const username = cookieData?.admin?.username;

    if (username) {
      console.log('Username:', username);
    } else {
      console.log('Username not found in the cookie data.');
    }
  }, []);

  return (
    <div>
      {/* Your React component content */}
    </div>
  );
}

export default Login2;