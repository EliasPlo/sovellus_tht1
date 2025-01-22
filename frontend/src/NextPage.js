import React from 'react';
import { useLocation } from 'react-router-dom';

function NextPage() {
  const location = useLocation();
  const username = location.state?.username;

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Welcome, {username || 'Guest'}!</h1>
      <p>You successfully navigated to the next page.</p>
    </div>
  );
}

export default NextPage;
