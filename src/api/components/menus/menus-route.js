const express = require('express');

const authenticationMiddleware = require('../../middlewares/authentication-middleware');
const celebrate = require('../../../core/celebrate-wrappers');
const menusControllers = require('./menus-controller');
const menusValidator = require('./menus-validator');

const route = express.Router();

module.exports = (app) => {
  app.use('/', route);

  // Get list of users
  route.get('/menus', menusControllers.getMenus);

  // Create user
  route.post(
    '/',
    authenticationMiddleware,
    celebrate(menusValidator.createMenu),
    menusControllers.createMenu
  );

  // Get user detail
  route.get('/:id', authenticationMiddleware, menusControllers.getMenu);

  // Update user
  route.put(
    '/:id',
    authenticationMiddleware,
    celebrate(menusValidator.updateMenu),
    menusControllers.updateMenu
  );

  // Delete user
  route.delete('/:id', authenticationMiddleware, menusControllers.deleteMenu);
};
