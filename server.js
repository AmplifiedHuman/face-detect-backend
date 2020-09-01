const express = require('express');
const cors = require('cors');
require('dotenv').config();

const register = require('./controllers/register');
const login = require('./controllers/login');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.post('/login', login.handleLogin);

app.post('/register', register.handleRegister);

app.get('/profile/:id', profile.handleProfile);

app.put('/image', image.handleImage);

app.post('/imageurl', image.handleApiCall);

app.listen(port, () => console.log(`Starting server on port: ${port}`));
