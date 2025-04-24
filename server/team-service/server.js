const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/theaterDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const teamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  image: String,
});

const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

app.use('/public', express.static(path.join(__dirname, 'public')));

// Get all team members
app.get('/api/team', async (req, res) => {
  try {
    const teamMembers = await TeamMember.find();
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new team member
app.post('/api/team', async (req, res) => {
  const { name, role, image } = req.body;
  try {
    const newTeamMember = new TeamMember({ name, role, image });
    await newTeamMember.save();
    res.status(201).json({ message: 'Team member added successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error adding team member: ' + err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Team server running on port ${PORT}`));
