import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function InputPage() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (username.trim()) {
      navigate('/next', { state: { username } }); // Pass username via state
    } else {
      alert('Please enter a username');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Enter Username</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
      <button onClick={handleNext} style={{ marginLeft: '10px' }}>
        Next
      </button>
    </div>
  );
}

export default InputPage;
