const express = require('express');

const authenticationMiddleware = require('../../middlewares/authentication-middleware');
//const celebrate = require('../../../core/celebrate-wrappers');
const ordersControllers = require('./orders-controller');
//const ordersValidator = require('./orders-validator');

const route = express.Router();

module.exports = (app) => {
  app.use('/orders', route);

  // Get list of users
  route.get('/', ordersControllers.getOrders);

  // Create user
  route.post(
    '/',

    ordersControllers.createOrder
  );

  // Get user detail
  route.get('/:id', authenticationMiddleware, ordersControllers.getOrder);

  // Update user
  route.put(
    '/:id',

    ordersControllers.updateOrder
  );

  // Delete user
  route.delete('/:id', authenticationMiddleware, ordersControllers.deleteOrder);
};
