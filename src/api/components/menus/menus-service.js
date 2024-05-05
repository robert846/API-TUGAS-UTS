const menusRepository = require('./menus-repository');

/**
 * Get list of users
 * @returns {Array}
 */
async function getMenus() {
  const menus = await menusRepository.getMenus();

  const results = [];
  for (let i = 0; i < menus.length; i += 1) {
    const menu = menus[i];
    results.push({
      id: menu.id,
      id_restoran: menu.id_restoran,
      nama_menu: menu.nama_menu,
      deskripsi: menu.deksripsi,
      harga: menu.harga,
      image: menu.image,
    });
  }

  return results;
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Object}
 */
async function getMenu(id) {
  const menu = await menusRepository.getMenu(id);

  // User not found
  if (!menu) {
    return null;
  }

  return {
    id: menu.id,
    id_restoran: menu.id_restoran,
    nama_menu: menu.nama_menu,
    deskripsi: menu.deksripsi,
    harga: menu.harga,
    image: menu.image,
  };
}

/**
 * Create new user
 * @param {string} id_restoran - Name
 * @param {string} nama_menu - Email
 * @param {string} deskripsi - Password
 * @param {string} harga - Name
 * @param {string} image - Email
 * @returns {boolean}
 */
async function createMenu(id_restoran, nama_menu, deskripsi, harga, image) {


  try {
    await menusRepository.createMenu(id_restoran, nama_menu, deskripsi, harga, image);
  } catch (err) {
    return null;
  }

  return true;
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} id_restoran - Name
 * @param {string} nama_menu - Email
 * @param {string} deskripsi - Password
 * @param {string} harga - Name
 * @param {string} image - Email
 * @returns {boolean}
 */
async function updateMenu(id, id_restoran, nama_menu, deskripsi, harga, image) {
  const menu = await menusRepository.getMenu(id);

  // User not found
  if (!menu) {
    return null;
  }

  try {
    await menusRepository.updateMenu(id, id_restoran, nama_menu, deskripsi, harga, image);
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
async function deleteMenu(id) {
  const menu = await menusRepository.getMenu(id);

  // User not found
  if (!menu) {
    return null;
  }

  try {
    await menusRepository.deleteMenu(id);
  } catch (err) {
    return null;
  }

  return true;
}







module.exports = {
  getMenus,
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu,
};
