const express = require('express');

const carSpecsRouter = require('./carSpecs/carSpecs.router');

const api = express.Router();

api.use('/carSpecs', carSpecsRouter);

module.exports = api;