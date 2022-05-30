const express = require('express');
const app = express();
const { default: mongoose } = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('connected'));

  const tracksRoute = require('./routes/tracks');

app.use(bodyParser.json());


app.use('/tracks', tracksRoute)


app.use('/posts', () => {
  console.log('Middlewear running')
});

app.get('/', (req, res) => {
  res.send('Welcome to my tracklist API, navigate to /tracks to view data');
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`));