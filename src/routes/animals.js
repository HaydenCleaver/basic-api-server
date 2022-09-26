'use strict';

const express = require('express');
const router = express.Router();
const { AnimalModel } = require('../models');
const validator = require('../middleware/validator');

router.post('/animals', validator, async (req, res, send) => {
  console.log('req body', req.body);

  const newAnimal = await AnimalModel.create(req.body);
  res.status(200).send(newAnimal);
});

router.get('/animals', async (req, res, next) => {
  try{
    let animals = await AnimalModel.findAll();
    res.status(200).send(animals);

  } catch(err){
    next(err);
  }
});

router.get('/animals/:id', async (req, res, next) => {
  try {
    let { id } = req.params;
    //   below line does the same thing as 26
    //   let animals = await AnimalModel.findOne({where: {id: req.params}});
    let animals = await AnimalModel.findOne({where: {id}});
    res.status(200).send(animals);

  } catch(err) {
    next(err);
  }
});

router.put('/animals/:id', async (req, res, next) => {
  try {
    let { id } = req.params;

    //updates record
    await AnimalModel.update(req.body, {where: {id}});

    //finds and then passes the updated record back to client
    let animals = await AnimalModel.findOne({where: {id}});
    res.status(200).send(animals);

  } catch(err) {
    next(err);
  }
});

router.delete('/animals/:id', async (req, res, next) => {
  try{
    let { id } = req.params;

    await AnimalModel.destroy({where: {id}});
    res.status(200).send(`Animal ${id} deleted!`);

  } catch(err) {
    next(err);
  }
});


module.exports = router;
