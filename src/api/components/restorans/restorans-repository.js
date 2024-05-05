const { Restoran } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getRestorans() {
  return Restoran.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getRestoran(id) {
  return Restoran.findById(id);
}

/**
 * Create new user
 * @param {string} nama_restoran - Email
 * @param {string} alamat - Password
 * @param {string} nomor_telepon - Name
 * @param {string} jam_operasional - Email
 * @returns {Promise}
 */
async function createRestoran(
  nama_restoran,
  alamat,
  nomor_telepon,
  jam_operasional
) {
  return Restoran.create({
    nama_restoran,
    alamat,
    nomor_telepon,
    jam_operasional,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} nama_restoran - Email
 * @param {string} alamat - Password
 * @param {string} nomor_telepon - Name
 * @param {string} jam_operasional - Email
 * @returns {Promise}
 */
async function updateRestoran(
  id,
  nama_restoran,
  alamat,
  nomor_telepon,
  jam_operasional
) {
  return Restoran.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        nama_restoran,
        alamat,
        nomor_telepon,
        jam_operasional,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteRestoran(id) {
  return Restoran.deleteOne({ _id: id });
}

module.exports = {
  getRestorans,
  getRestoran,
  createRestoran,
  updateRestoran,
  deleteRestoran,
};
