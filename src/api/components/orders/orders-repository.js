const { Order } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getOrders() {
  return Order.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getOrder(id) {
  return Order.findById(id);
}

/**
 * Create new user
 * * @param {string} id_user- Name
 * @param {string} id_restoran - Name
 * @param {string} waktu_pemesanan - Email
 * @param {string} status_pemesanan - Password
 * @param {string} total_harga - Name
 * @returns {Promise}
 */
async function createOrder(
  id_user,
  id_restoran,
  waktu_pemesanan,
  status_pemesanan,
  total_harga
) {
  return Order.create({
    id_user,
    id_restoran,
    waktu_pemesanan,
    status_pemesanan,
    total_harga,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
 * * @param {string} id_user- Name
 * @param {string} id_restoran - Name
 * @param {string} waktu_pemesanan - Email
 * @param {string} status_pemesanan - Password
 * @param {string} total_harga - Name
 * @returns {Promise}
 */
async function updateOrder(
  id,
  id_user,
  id_restoran,
  waktu_pemesanan,
  status_pemesanan,
  total_harga
) {
  return Order.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        id_user,
        id_restoran,
        waktu_pemesanan,
        status_pemesanan,
        total_harga,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteOrder(id) {
  return Order.deleteOne({ _id: id });
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
