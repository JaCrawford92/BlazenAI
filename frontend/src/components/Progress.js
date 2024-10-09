// src/components/Progress.js
import React, { useState, useEffect } from 'react';

const Progress = () => {
  const [email, setEmail] = useState('');
  const [progress, setProgress] = useState([]);

  const fetchProgress = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/user/getProgress?email=${email}`);
      const data = await res.json();
      setProgress(data.progress);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (email) {
      fetchProgress();
    }
  }, [email]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Progress</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
      />
      <button onClick={fetchProgress} style={{ padding: '10px 20px' }}>Fetch Progress</button>
      <ul>
        {progress.map((item, index) => (
          <li key={index}>
            <strong>{new Date(item.date).toLocaleDateString()}:</strong> {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;
