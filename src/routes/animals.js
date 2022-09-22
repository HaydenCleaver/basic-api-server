'use strict';

const express = require('express');
const router = express.Router();
const { AnimalModel } = require('../models');
const validator = require('../middleware/validator');
const logger = require('./middleware/logger');

router.use(logger);

router.post('/animals', async (req, res, send) => {
  console.log('req body', req.body);
  const newAnimal = await AnimalModel.create(req.body);
  res.status(200).send(newAnimal);
});

router.get('/animals', async (req, res, next) => {
  res.status(200).send(req.query);
});

module.exports = router;
