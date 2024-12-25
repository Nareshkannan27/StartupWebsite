const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize Express App
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
const dbURI = 'mongodb://localhost:27017/projectRegistration';
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err));

// Schema and Model
const RegistrationSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  college: String,
  projectType: String,
  department: String,
  domains: [String],
  comments: String,
});

const Registration = mongoose.model('Registration', RegistrationSchema);

// Routes
// 1. Create a new registration
app.post('/api/register', async (req, res) => {
  try {
    const newRegistration = new Registration(req.body);
    await newRegistration.save();
    res.status(201).json({ message: 'Registration successful' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to register' });
  }
});

// 2. Get all registrations (Admin View)
app.get('/api/registrations', async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch registrations' });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
