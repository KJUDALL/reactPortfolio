// Main server file (entry point)
//Need express, path, and dotenv imported
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const exp = require('constants');

dotenv.config(); //Load environment variables from .env file

const app = express();

//Middleware for JSON parsing
app.use(express.json());

//sample API?
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

//Catch-all for routing on the frontend
app.use((req, res, next) => {
    if (req.method === 'GET' && !req.path.startsWith('/api')) {
        return res.sendFile(path.join(__dirname, '../client/index.html'));
    }
    next();
})

// Define PORT + start server
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log('Server running on localhost:${PORT}');
});