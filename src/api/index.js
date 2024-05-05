const express = require('express');

const authentication = require('./components/authentication/authentication-route');
const users = require('./components/users/users-route');
const menus = require('./components/menus/menus-route');
const restorans = require('./components/restorans/restorans-route');
const orders = require('./components/orders/orders-route');

module.exports = () => {
  const app = express.Router();

  authentication(app);
  users(app);
  menus(app);
  restorans(app);
  orders(app);
  return app;
};
