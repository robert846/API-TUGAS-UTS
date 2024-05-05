const joi = require('joi');

module.exports = {
  createMenu: {
    body: {
      id_restoran: joi.string().min(1).max(100).required().label('id_restoran'),
      nama_menu: joi.string().min(1).max(100).required().label('Nama Menu'),
      deskripsi: joi.string().min(1).max(100).required().label('Deskripsi'),
      harga: joi.string().min(1).max(100).required().label('harga'),
      image: joi.string().min(1).max(100).required().label('image'),
    },
  },

  updateMenu: {
    body: {
      id_restoran: joi.string().min(1).max(100).required().label('id_restoran'),
      nama_menu: joi.string().min(1).max(100).required().label('Nama Menu'),
      deskripsi: joi.string().min(1).max(100).required().label('Deskripsi'),
      harga: joi.string().min(1).max(100).required().label('harga'),
      image: joi.string().min(1).max(100).required().label('image'),
    },
  },
};
