const ordersService = require('./orders-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

/**
 * Handle get list of users request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function getOrders(request, response, next) {
  try {
    const orders = await ordersService.getOrders();
    return response.status(200).json(orders);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle get user detail request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function getOrder(request, response, next) {
  try {
    const order = await ordersService.getOrder(request.params.id);

    if (order) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Unknown order');
    }

    return response.status(200).json(order);
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle create user request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function createOrder(request, response, next) {
  try {
    const id_user = request.body.id_user;
    const id_restoran = request.body.id_retoran;
    const waktu_pemesanan = request.body.waktu_pemesanan;
    const status_pemesanan = request.body.status_pemesanan;
    const total_harga = request.body.total_harga;

    const success = await ordersService.createOrder(
      id_user,
      id_restoran,
      waktu_pemesanan,
      status_pemesanan,
      total_harga
    );
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create order'
      );
    }

    return response.status(200).json({
      id_user,
      id_restoran,
      waktu_pemesanan,
      status_pemesanan,
      total_harga,
    });
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle update user request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function updateOrder(request, response, next) {
  try {
    const id = request.params.id;
    const id_user = request.body.id_user;
    const id_restoran = request.body.id_retoran;
    const waktu_pemesanan = request.body.waktu_pemesanan;
    const status_pemesanan = request.body.status_pemesanan;
    const total_harga = request.body.total_harga;

    const success = await ordersService.updateOrder(
      id,
      id_user,
      id_restoran,
      waktu_pemesanan,
      status_pemesanan,
      total_harga
    );
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update order'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

/**
 * Handle delete user request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function deleteOrder(request, response, next) {
  try {
    const id = request.params.id;

    const success = await ordersService.deleteOrder(id);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete order'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
