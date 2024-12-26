const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/theaterDB', {
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



app.get('/api/shows', async (req, res) => {
  try {
    const shows = await Show.find();
    res.json(shows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
