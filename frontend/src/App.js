// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlazeAIChat from './components/BlazeAIChat';
import Profile from './components/Profile';
import Progress from './components/Progress';

const App = () => {
  return (
    <Router>
      <div>
        <h1>BlazeAI</h1>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/chat" element={<BlazeAIChat />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

