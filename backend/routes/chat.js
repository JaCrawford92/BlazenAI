// server/routes/chat.js
const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');
const User = require('../models/User');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// Chat with BlazeAI
router.post('/', async (req, res) => {
  const { email, message } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const prompt = `You are BlazeAI, a personal mentor for ${user.name}. User's goals: ${user.goals.join(', ')}. User says: "${message}". Respond with helpful advice.`;

    const completion = await openai.createCompletion({
      model: 'text-davinci-004',
      prompt: prompt,
      max_tokens: 150,
    });

    const aiResponse = completion.data.choices[0].text.trim();

    // Optionally, save the conversation
    user.progress.push({ date: new Date(), status: aiResponse });
    await user.save();

    res.json({ response: aiResponse });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
