const joi = require('joi');

module.exports = {
  createRestoran: {
    body: {
      nama_restoran: joi
        .string()
        .min(1)
        .max(100)
        .required()
        .label('Nama Restoran'),
      alamat: joi.string().min(1).max(100).required().label('Alamat'),
      nomor_telepon: joi
        .string()
        .min(1)
        .max(100)
        .required()
        .label('Nomor Telepon'),
      jam_operasional: joi
        .string()
        .min(1)
        .max(100)
        .required()
        .label('Jam Operasional'),
    },
  },

  updateRestoran: {
    body: {
      nama_restoran: joi
        .string()
        .min(1)
        .max(100)
        .required()
        .label('Nama Restoran'),
      alamat: joi.string().min(1).max(100).required().label('Alamat'),
      nomor_telepon: joi
        .string()
        .min(1)
        .max(100)
        .required()
        .label('Nomor Telepon'),
      jam_operasional: joi
        .string()
        .min(1)
        .max(100)
        .required()
        .label('Jam Operasional'),
    },
  },
};
