const { getMakes,
    getModelsByMake,
    getCompetitorsByModel,
    getComparisonById } = require('../../models/carSpecs.model');

async function httpGetMakes(req, res) {

    const ret = await getMakes()

    return res.status(200).json(ret);
}

async function httpGetModelsByMake(req, res) {
  
    const makeId = req.params.makeId;

    return res.status(200).json(await getModelsByMake(makeId));
}

async function httpGetCompetitorsByModel(req, res) {
  
    const modelId = req.params.modelId;

    return res.status(200).json(await getCompetitorsByModel(modelId));
}

async function httpGetComparisonById(req, res) {
  
    const comparisonId = req.params.id;

    return res.status(200).json(await getComparisonById(comparisonId));
}

module.exports = {
  httpGetMakes,
  httpGetModelsByMake,
  httpGetCompetitorsByModel,
  httpGetComparisonById
};