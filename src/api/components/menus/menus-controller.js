const menusService = require('./menus-service');
const { errorResponder, errorTypes } = require('../../../core/errors');

/**
 * Handle get list of users request
 * @param {object} request - Express request object
 * @param {object} response - Express response object
 * @param {object} next - Express route middlewares
 * @returns {object} Response object or pass an error to the next route
 */
async function getMenus(request, response, next) {
  try {
    const menus = await menusService.getMenus();
    return response.status(200).json(menus);
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
async function getMenu(request, response, next) {
  try {
    const menu = await menusService.getMenu(request.params.id);

    if (menu) {
      throw errorResponder(errorTypes.UNPROCESSABLE_ENTITY, 'Unknown menu');
    }

    return response.status(200).json(menu);
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
async function createMenu(request, response, next) {
  try {
    const id_restoran = request.body.id_retoran;
    const nama_menu = request.body.nama_menu;
    const deskripsi = request.body.deskripsi;
    const harga = request.body.harga;
    const image = request.body.image;

  
    

    const success = await usersService.createUser(id_restoran,nama_menu, deskripsi, harga, image);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to create menu'
      );
    }

    return response.status(200).json({ id_restoran, nama_menu, deskripsi, harga, image });
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
async function updateMenu(request, response, next) {
  try {
    const id = request.params.id;
    const id_restoran = request.body.id_retoran;
    const nama_menu = request.body.nama_menu;
    const deskripsi = request.body.deskripsi;
    const harga = request.body.harga;
    const image = request.body.image;

    
    const success = await menusService.updateMenu(id, id_restoran, nama_menu, deskripsi, harga, image);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to update menu'
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
async function deleteMenu(request, response, next) {
  try {
    const id = request.params.id;

    const success = await menusService.deleteMenu(id);
    if (!success) {
      throw errorResponder(
        errorTypes.UNPROCESSABLE_ENTITY,
        'Failed to delete menu'
      );
    }

    return response.status(200).json({ id });
  } catch (error) {
    return next(error);
  }
}


module.exports = {
  getMenus,
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu,

};
