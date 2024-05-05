const restoransService = require('./restorans-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

/**
 * Handle get list of users request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function getRestorans(request, response, next) {
  try {
    const restorans = await restoransService.getRestorans();
    return response.status(200).json(restorans);
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
async function getRestoran(request, response, next) {
  try {
    const restoran = await restoransService.getRestoran(request.params.id);

    if (restoran) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Unknown Restoran');
    }

    return response.status(200).json(restoran);
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
async function createRestoran(request, response, next) {
  try {
    const nama_restoran = request.body.nama_restoran;
    const alamat = request.body.alamat;
    const nomor_telepon = request.body.nomor_telepon;
    const jam_operasional = request.body.jam_operasional;

    const success = await restoransService.createRestoran(
      nama_restoran,
      alamat,
      nomor_telepon,
      jam_operasional
    );
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create restoran'
      );
    }

    return response
      .status(200)
      .json({ nama_restoran, alamat, nomor_telepon, jam_operasional });
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
async function updateRestoran(request, response, next) {
  try {
    const id = request.params.id;
    const nama_restoran = request.body.nama_restoran;
    const alamat = request.body.alamat;
    const nomor_telepon = request.body.nomor_telepon;
    const jam_operasional = request.body.jam_operasional;

    const success = await restoransService.updateRestoran(
      id,
      nama_restoran,
      alamat,
      nomor_telepon,
      jam_operasional
    );
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update restoran'
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
async function deleteRestoran(request, response, next) {
  try {
    const id = request.params.id;

    const success = await restoransService.deleteRestoran(id);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete Restoran'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getRestorans,
  getRestoran,
  createRestoran,
  updateRestoran,
  deleteRestoran,
};
