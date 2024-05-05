const express = require('express');

const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');
const restoransControllers = require('./restorans-controller');
const restoransValidator = require('./restorans-validator');

const route = express.Router();

module.exports = (app) => {
  app.use('/', route);

  // Get list of users
  route.get('/restorans', restoransControllers.getRestorans);

  // Create user
  route.post(
    '/',
    authenticationMiddleware,
    celebrate(restoransValidator.createRestoran),
    restoransControllers.createRestoran
  );

  // Get user detail
  route.get('/:id', authenticationMiddleware, restoransControllers.getRestoran);

  // Update user
  route.put(
    '/:id',
    authenticationMiddleware,
    celebrate(restoransValidator.updateRestoran),
    restoransControllers.updateRestoran
  );

  // Delete user
  route.delete(
    '/:id',
    authenticationMiddleware,
    restoransControllers.deleteRestoran
  );
};
