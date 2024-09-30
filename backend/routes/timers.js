const express = require('express');
const Timer = require('../models/Timer');
const router = express.Router();

// Get all timers
router.get('/', async (req, res) => {
    const timers = await Timer.find();
    res.json(timers);
});

// Create a new timer
router.post('/', async (req, res) => {
    const { title, endTime } = req.body;
    const newTimer = new Timer({ title, endTime });
    await newTimer.save();
    res.json(newTimer);
});

module.exports = router;
