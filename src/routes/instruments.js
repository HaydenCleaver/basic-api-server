'use strict';

const express = require('express');
const router = express.Router();
const { InstrumentModel } = require('../models');


router.post('/animals', async (req, res, send) => {
  console.log('req body', req.body);
  const newInstrument = await InstrumentModel.create(req.body);
  res.status(200).send(newInstrument);
});

module.exports = router;
