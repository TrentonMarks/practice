// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');

// middleware
app.use(express.json());
app.use(express.static('public'));

// controllers


// mongoose connection
mongoose.connect('mongodb://localhost:27017/favorites');
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose');
});

// port configureation and listener
app.listen(3000, ()=>{
    console.log('Trent <3 Aubrey');
});
