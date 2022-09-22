'use strict';

module.exports = (req, res, next) => {

  if (req.query.animal){
    next();
  } else if (req.query.instrument){
    next();
  } else {
    next('Incorrect query');
  }
};
