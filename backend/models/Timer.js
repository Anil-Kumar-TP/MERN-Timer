const mongoose = require('mongoose');

const timerSchema = new mongoose.Schema({
    title: { type: String, required: true },
    endTime: { type: Date, required: true },
});

module.exports = mongoose.model('Timer', timerSchema);
