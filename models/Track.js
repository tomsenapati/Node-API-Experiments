const mongoose = require('mongoose');

const trackSchema = mongoose.Schema({
  title: String,
  artist: String
});

module.exports = mongoose.model('Tracks', trackSchema);