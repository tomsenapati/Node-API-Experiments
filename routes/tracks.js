const express = require('express');
const router = express.Router();
const Track = require('../models/Track');

//GET All tracks

router.get('/', async (req, res) => {

  try{
    const tracks = await Track.find();
    res.json(tracks);
  }catch(err){
    res.json({message: err})
  }
  
});

//POST a track

router.post('/', async (req, res) => {
  const track = new Track({
    title: req.body.title,
    artist: req.body.artist
  });

  try{

    const savedTrack = await track.save();
    res.json(savedTrack);

  }catch (err){
    res.json({message: err})
  }
});

//GET track

router.get('./:id', async (req, res) => {

  try{
    const track = await Track.findById(req.params.id);
    res.json(track);
  }catch(err){
    res.json({message: err})
  }

});

//DELETE track

router.delete('./:id', async (req, res) => {

  try{
    const removedTrack = await Track.remove({ _id: req.params.id });
    res.json(removedTrack)
  }catch(err){
    res.json({message: err});
  }
});

//PATCH track title

router.patch('./:id', async (req, res) => {
  try{
    const updatedTrackTitle = await Track.updateOne({ _id: req.params.id}, 
      { $set: {title: req.body.title} }
      );
      res.json(updatedTrackTitle)

  }catch(err){
    res.json({message: err})
  }
})

module.exports = router;