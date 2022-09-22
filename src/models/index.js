'use strict';

require('dotenv').config();
const{ Sequelize, DataTypes } = require('sequelize');
const animalSchema = require('./animals');
const instrumentSchema = require('./instruments');

//ternary that runs sqlite for tests or DATABASE_URL if running normal
const DATABASE_URL = process.env.NODE_ENV === 'test'
  ? 'sqlite:memory' :
  process.env.DATABASE_URL;

//instantiates the database
const sequelizeDatabase = new Sequelize(DATABASE_URL);

//create AnimalModel with our Schema
const AnimalModel = animalSchema(sequelizeDatabase, DataTypes);
const InstrumentModel = instrumentSchema(sequelizeDatabase, DataTypes);

module.exports = {sequelizeDatabase, AnimalModel};
module.exports = {sequelizeDatabase, InstrumentModel};
