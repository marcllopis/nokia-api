require('dotenv').config()

const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Import the .json file with all phones
const phones = require("./phones");

// Get method with the phones object
app.get('/phones', (req, res) => {
    res.json(phones);
});

// Listener check
app.listen(port, (err) => {
    if (err) throw new Error('Something bad happened...');
    console.log(`Server is listening on ${port}`);
});
