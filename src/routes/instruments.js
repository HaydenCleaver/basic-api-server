'use strict';

const express = require('express');
const router = express.Router();
const { InstrumentModel } = require('../models');
const validator = require('../middleware/validator');

router.post('/instruments', validator, async (req, res, send) => {
  console.log('req body', req.body);
  const newInstrument = await InstrumentModel.create(req.body);
  res.status(200).send(newInstrument);
});

router.get('/instruments', async (req, res, next) => {
  try {
    let instruments = await InstrumentModel.findAll();
    res.status(200).send(instruments);

  } catch(err) {
    next(err);
  }
});

router.get('/instruments/:id', async (req, res, next) => {
  try {
    let { id } = req.params;

    let instruments = await InstrumentModel.findOne({where: {id}});
    res.status(200).send(instruments);

  } catch(err) {
    next(err);
  }
});

router.put('/instruments/:id', async (req, res, next) => {
  try {
    let { id } = req.params;

    let instruments = await InstrumentModel.update(req.body, {where: {id}});
    res.status(200).send(instruments);

  } catch(err) {
    next(err);
  }
});

router.delete('/instruments/:id', async (req, res, next) => {
  try {
    let { id } = req.params;

    await InstrumentModel.destroy({where:{id: req.params}});
    res.status(200).send(`Animal ${id} deleted!`);

  } catch(err) {
    next(err);
  }
});


module.exports = router;
