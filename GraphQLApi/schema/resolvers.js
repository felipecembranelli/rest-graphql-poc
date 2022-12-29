// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.

const { getMakes,
  getModelsByMake,
  getCompetitorsByModel } = require('../models/carSpecs.model');
  

const resolvers = {
    Query: {
      makes: () => getMakes(),
      modelsByMake: () => getModelsByMake(),
      competitorsByModel: () => getCompetitorsByModel(),  
    },
  };


module.exports = { resolvers };