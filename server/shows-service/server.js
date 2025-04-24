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

const showSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const Show = mongoose.model('Show', showSchema);

app.use('/public', express.static(path.join(__dirname, 'public')));

// Get all shows
app.get('/api/shows', async (req, res) => {
  try {
    const shows = await Show.find();
    res.json(shows);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching shows: ' + err.message });
  }
});

// Add a new show
app.post('/api/shows', async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const newShow = new Show({ title, description, image });
    await newShow.save();
    res.status(201).json({ message: 'Show added successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Error adding show: ' + err.message });
  }
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Show server running on port ${PORT}`));

