const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./prismaObjs.js');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to handle user signup
app.get('/signup', (req, res) => {
  try {
    // Create a new user with dummy data
    const newUser = new User(
      'johndoe',
      'hashedPassword123',
      'John',
      'Doe',
      'john.doe@example.com',
      '1990-01-01',
      User.GENDER.MALE,
      User.ROLES.USER,
      null,
      'Hello, I am John!',
      0,
      User.USERSTATUS.ACTIVE,
      { newbie: true }
    );
    // Get the user data
    const userData = newUser.data();
    console.log('New user created:', userData);

    res.status(201).json({
      userData
    });
  } catch (error) {
    console.error('Error creating user:', error.message);
    res.status(500).json({
      error: 'An error occurred while processing the signup',
      details: error.message
    });
  }
});

// Route to test the server is running
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});