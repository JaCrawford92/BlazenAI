// src/components/BlazeAIChat.js
import React, { useState } from 'react';

const BlazeAIChat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [email, setEmail] = useState(''); // Assuming user is identified by email

  const sendMessage = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      const data = await res.json();
      setResponse(data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chat with BlazeAI</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ padding: '10px', marginBottom: '10px', width: '100%' }}
      />
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        style={{ padding: '10px', width: '100%', marginBottom: '10px' }}
      ></textarea>
      <button onClick={sendMessage} style={{ padding: '10px 20px' }}>Send</button>
      {response && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <strong>BlazeAI:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default BlazeAIChat;
