const mongoose = require('mongoose');
const config = require('../core/config');
const logger = require('../core/logger')('app');

const usersSchema = require('./users-schema');
const menusSchema = require('./menus-schema');
const restoransSchema = require('./restorans-schema');
const ordersSchema = require('./orders-schema');

mongoose.connect(`${config.database.connection}/${config.database.name}`, {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.once('open', () => {
  logger.info('Successfully connected to MongoDB');
});

const User = mongoose.model('users', mongoose.Schema(usersSchema));
const Menu = mongoose.model('menus', mongoose.Schema(menusSchema));
const Restoran = mongoose.model('restorans', mongoose.Schema(restoransSchema));
const Order = mongoose.model('orders', mongoose.Schema(ordersSchema));

module.exports = {
  mongoose,
  User,
  Menu,
  Restoran,
  Order,
};
