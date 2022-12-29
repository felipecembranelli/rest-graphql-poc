const mongoose = require('mongoose');

const competitorSchema = new mongoose.Schema({
    year: String,
    name: String,
    image: String
});

// Connects schema with the collection
module.exports = mongoose.model('Competitors', competitorSchema);

