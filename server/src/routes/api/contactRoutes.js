//Need express
const express = require('express');
const { sendContactEmail } = require('../../service/emailService');

const router = express.Router();

//POST router for contact form 
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    //Validate input data
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }
    try {
        await sendContactEmail(name, email, message); //Simulate sending email
        res.json({ message: 'Thank you for your message!' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong. Please try again.' });
    }
});

module.exports = router;