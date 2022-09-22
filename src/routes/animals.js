'use strict';

const express = require('express');
const router = express.Router();
const { AnimalModel } = require('../models');


router.post('/animals', async (req, res, send) => {
  console.log('req body', req.body);
  const newAnimal = await AnimalModel.create(req.body);
  res.status(200).send(newAnimal);
});

module.exports = router;
