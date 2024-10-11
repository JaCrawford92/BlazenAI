// src/components/BlazeAIChat.js
import React, { useState } from 'react';

const BlazeAIChat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [email, setEmail] = useState('');

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
    <div className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Chat with BlazeAI</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        rows="4"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      ></textarea>
      <button
        onClick={sendMessage}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Send
      </button>
      {response && (
        <div className="mt-4 p-4 bg-white border border-gray-200 rounded">
          <strong>BlazeAI:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default BlazeAIChat;

