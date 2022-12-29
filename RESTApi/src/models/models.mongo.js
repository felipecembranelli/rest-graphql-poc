const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    id: String,
    year: String,
    name: String,
    image: String
});

// Connects schema with the collection
module.exports = mongoose.model('Models', modelSchema);

