const mongoose = require('mongoose');

const makeSchema = new mongoose.Schema({
    id: String,
    name: String,
    image: String
});

// Connects schema with the collection
module.exports = mongoose.model('Makes', makeSchema);

