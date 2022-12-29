require('dotenv').config()

const make = require('./makes.mongo');
const model = require('./models.mongo');
const competitor = require('./competitors.mongo');

/** Call database */
async function getMakes() {
    const obj = await make.find();

    console.log(obj)
    return obj
}

async function getModelsByMake(makeId) {
    const obj = await model.find();

    console.log(obj)
    return obj
}

async function getCompetitorsByModel(modelId) {
    const filter = { id : modelId}
    const obj = await competitor.find(filter);

    console.log(obj)
    return obj
}

module.exports = {
    getMakes,
    getModelsByMake,
    getCompetitorsByModel
  };
  