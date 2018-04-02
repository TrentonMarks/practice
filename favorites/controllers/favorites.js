const express = require('express');
const router = express.Router();
const Favorites = require('../models/favorites.js');

// index/get route
router.get('/', (req, res)=>{
    Favorites.find({}, (err, foundFavorites)=>{
        res.json(foundFavorites);
    });
});

// create/post route
router.post('/', (req, res)=>{
    Favorites.create(req.body, (err, createdFavorite)=>{
        res.json(createdFavorite);
    });
});

// delete route
router.delete('/:id', (req, res)=>{
    Favorites.findByIdAndRemove(req.params.id, (err, deletedFavorite)=>{
        res.json(deletedFavorite);
    });
});

module.exports = router;
