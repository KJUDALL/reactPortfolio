// Combines and exports all API routes
// Need express
const express = require('express');
const contactRoutes = require('./contactRoutes'); //Contact form logic

const router = express.Router();

//Attach specific routes?
router.use('/contact', contactRoutes);

module.exports = router;