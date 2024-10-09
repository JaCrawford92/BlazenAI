// server/routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Set Goals
router.post('/setGoal', async (req, res) => {
  const { name, email, goals } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      user.goals = goals;
    } else {
      user = new User({ name, email, goals, progress: [] });
    }
    await user.save();
    res.json({ message: 'Goals set successfully', user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Get User Progress
router.get('/getProgress', async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email });
    if (user) {
      res.json({ progress: user.progress });
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
