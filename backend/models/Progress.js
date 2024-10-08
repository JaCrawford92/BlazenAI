const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    date: {type: Date, default: Date.now},
    status: {type: String},
});

module.exports = mongoose.model('Progress', ProgressSchema);