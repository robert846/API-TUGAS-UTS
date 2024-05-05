const joi = require('joi');

module.exports = {
  createOrder: {
    body: {
      id_user: joi.string().min(1).max(100).required().label('id_user'),
      id_restoran: joi.string().min(1).max(100).required().label('id_restoran'),
    },
  },

  updateMenu: {
    body: {
      id_user: joi.string().min(1).max(100).required().label('id_user'),
      id_restoran: joi.string().min(1).max(100).required().label('id_restoran'),
    },
  },
};
