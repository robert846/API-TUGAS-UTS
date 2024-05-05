const { Menu } = require('../../../models');

/**
 * Get a list of users
 * @returns {Promise}
 */
async function getMenus() {
  return Menu.find({});
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function getMenu(id) {
  return Menu.findById(id);
}

/**
 * Create new user
 * @param {string} id_restoran - Name
 * @param {string} nama_menu - Email
 * @param {string} deskripsi - Password
 * @param {string} harga - Name
 * @param {string} image - Email
 * @returns {Promise}
 */
async function createMenu(id_restoran, nama_menu, deskripsi, harga, image) {
  return Menu.create({
   id_restoran,
    nama_menu,
    deskripsi,
    harga,
    image,
  });
}

/**
 * Update existing user
 * @param {string} id - User ID
  * @param {string} id_restoran - Name
 * @param {string} nama_menu - Email
 * @param {string} deskripsi - Password
 * @param {string} harga - Name
 * @param {string} image - Email
 * @returns {Promise}
 */
async function updateMenu(id, id_restoran, nama_menu, deskripsi, harga, image) {
  return Menu.updateOne(
    {
      _id: id,
    },
    {
      $set: {
        id_restoran,
        nama_menu,
        deskripsi,
        harga,
        image,
      },
    }
  );
}

/**
 * Delete a user
 * @param {string} id - User ID
 * @returns {Promise}
 */
async function deleteMenu(id) {
  return Menu.deleteOne({ _id: id });
}






module.exports = {
  getMenus,
  getMenu,
  createMenu,
  updateMenu,
  deleteMenu,
};
