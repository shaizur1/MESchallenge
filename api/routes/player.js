// CRUD Code

// Using Express framework for http REST calls
const express = require('express');

// For using HTTP.GET, POST, PUT, DELETE in route
const playerRoute = express.Router();

// Add the Player model
let Player = require('../models/player');

///////////Define the routes///////////

// Get list of Players
playerRoute.route('/').get((req, res) => {
    Player.find((err, prod) => {
        if(err) {console.log(err)}
        else {res.json(prod)}
    });
});

// Add Player
playerRoute.route('/add').post((req, res) => {
    // Request to POST new object
    let player = new Player(req.body);
    player.save().then(prod => {
      console.log(prod);
      res.status(200).json({'Players': 'Player added successfully!'})
    }).catch(err => {
        console.log(err);
        res.status(400).send('Unable to add player!');
      });
  });
  
module.exports = playerRoute;