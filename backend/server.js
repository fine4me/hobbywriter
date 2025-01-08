const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Allows requests from other origins
app.use(bodyParser.json()); // Parses JSON bodies

// Route to handle form submission
app.post('/signup', (req, res) => {
    const { username, password, firstName, lastName, email, dob, gender } = req.body;
    console.log('Received data:', req.body);
    res.status(200).json({ message: 'Signup successful!' });
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
