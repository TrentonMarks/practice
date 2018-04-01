const express = require('express');
const router = express.Router();
const Favorites = require('../models/favorites.js');

// index/get route
router.get('/', (req, res)=>{
    Favorites.find({}, (err, foundFavorite)=>{
        res.json(foundFavorites);
    });
});



module.exports = router;
