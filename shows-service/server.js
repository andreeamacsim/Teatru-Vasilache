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


const showSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const Show = mongoose.model('Show', showSchema);


app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/api/team', async (req, res) => {
  try {
    const teamMembers = await TeamMember.find(); 
    console.log('Team members:', teamMembers);  // Adaugă un log pentru a verifica datele
    res.json(teamMembers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/shows', async (req, res) => {
  try {
    const shows = await Show.find();
    res.json(shows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching shows: ' + err.message });
  }
});


app.post('/api/team', async (req, res) => {
  const { name, role, image } = req.body;
  try {
    const newTeamMember = new TeamMember({
      name,
      role,
      image,
    });
    await newTeamMember.save();
    res.status(201).json({ message: 'Team member added successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error adding team member: ' + err.message });
  }
});


app.post('/api/shows', async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const newShow = new Show({
      title,
      description,
      image,
    });
    await newShow.save();
    res.status(201).json({ message: 'Show added successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error adding show: ' + err.message });
  }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
