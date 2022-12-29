const express = require('express');
const {
  httpGetMakes,
  httpGetModels,
  httpGetModelsByMake,
  httpGetCompetitorsByModel,
  httpGetComparisonById
} = require('./carSpecs.controller');

const carSpecsRouter = express.Router();

carSpecsRouter.get('/makes', httpGetMakes);
carSpecsRouter.get('/models/:makeId', httpGetModelsByMake);
carSpecsRouter.get('/competitors/:modelId', httpGetCompetitorsByModel);

module.exports = carSpecsRouter;