const ordersRepository = require('./orders-repository');

/**
 * Get list of users
 * @returns {Array}
 */
async function getOrders() {
  const orders = await ordersRepository.getOrders();

  const results = [];
  for (let i = 0; i < orders.length; i += 1) {
    const order = orders[i];
    results.push({
      id: order.id,
      id_user: order.id_user,
      id_restoran: order.id_restoran,
      waktu_pemesanan: order.waktu_pemesanan,
      status_pemesanan: order.status_pemesanan,
      total_harga: order.total_harga,
    });
  }

  return results;
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Object}
 */
async function getOrder(id) {
  const order = await orderRepository.getOrder(id);

  // User not found
  if (!order) {
    return null;
  }

  return {
    id: order.id,
    id_user: order.id_user,
    id_restoran: order.id_restoran,
    waktu_pemesanan: order.waktu_pemesanan,
    status_pemesanan: order.status_pemesanan,
    total_harga: order.total_harga,
  };
}

/**
 * Create new user
 * * @param {string} id_user- Name
 * @param {string} id_restoran - Name
 * @param {string} waktu_pemesanan - Email
 * @param {string} status_pemesanan - Password
 * @param {string} total_harga - Name
 * @returns {boolean}
 */
async function createOrder(
  id_user,
  id_restoran,
  waktu_pemesanan,
  status_pemesanan,
  total_harga
) {
  try {
    await ordersRepository.createOrder(
      id_user,
      id_restoran,
      waktu_pemesanan,
      status_pemesanan,
      total_harga
    );
  } catch (err) {
    return null;
  }

  return true;
}

/**
 * Update existing user
 * @param {string} id - User ID
 * * @param {string} id_user- Name
 * @param {string} id_restoran - Name
 * @param {string} waktu_pemesanan - Email
 * @param {string} status_pemesanan - Password
 * @param {string} total_harga - Name
 * @returns {boolean}
 */
async function updateOrder(
  id,
  id_user,
  id_restoran,
  waktu_pemesanan,
  status_pemesanan,
  total_harga
) {
  const order = await ordersRepository.getOrder(id);

  // User not found
  if (!order) {
    return null;
  }

  try {
    await ordersRepository.updateOrder(
      id,
      id_user,
      id_restoran,
      waktu_pemesanan,
      status_pemesanan,
      total_harga
    );
  } catch (err) {
    return null;
  }

  return true;
}

/**
 * Delete user
 * @param {string} id - User ID
 * @returns {boolean}
 */
async function deleteOrder(id) {
  const order = await ordersRepository.getOrder(id);

  // User not found
  if (!order) {
    return null;
  }

  try {
    await ordersRepository.deleteOrder(id);
  } catch (err) {
    return null;
  }

  return true;
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
