const mongoose = require('mongoose');

// favorites schema
const favoritesSchema = new mongoose.Schema({
    source: String,
    url: String
});

const Favorites = mongoose.model('Favorites', favoritesSchema);

module.exports = Favorites;
