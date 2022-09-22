'use strict';

// requires from model/index.js file; index doesn't need to be
// listed b/c it gets special privelages.
const { sequelizeDatabase, AnimalModel } = require('./src/models');
const { start } = require('./src/server');

//creates all associated tables and makes sure connection is good
sequelizeDatabase.sync()
  .then(()=> {
    console.log('Successful Connection');
    // AnimalModel.create({name: 'Miji'});
  })
  .catch(err => console.error(err));

start();
