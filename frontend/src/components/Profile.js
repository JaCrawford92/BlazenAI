// src/components/Profile.js
import React, { useState } from 'react';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [goals, setGoals] = useState('');
  const [message, setMessage] = useState('');

  const setGoal = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/user/setGoal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, goals: goals.split(',') }),
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Set Your Goals</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
      />
      <textarea
        placeholder="Enter your goals, separated by commas"
        value={goals}
        onChange={(e) => setGoals(e.target.value)}
        rows="4"
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      ></textarea>
      <button onClick={setGoal} style={{ padding: '10px 20px' }}>Set Goals</button>
      {message && <p style={{ marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default Profile;
