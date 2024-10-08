const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    goals: [{type: String}],
    progress: [{date: Date, status: String}],
});

module.exports = mongoose.model('User', UserSchema);