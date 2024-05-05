const restoransRepository = require('./restorans-repository');

/**
 * Get list of users
 * @returns {Array}
 */
async function getRestorans() {
  const restorans = await restoransRepository.getRestorans();

  const results = [];
  for (let i = 0; i < restorans.length; i += 1) {
    const restoran = restorans[i];
    results.push({
      id: restoran.id,
      nama_restoran: restoran.nama_restoran,
      alamat: restoran.alamat,
      nomor_telepon: restoran.nomor_telepon,
      jam_operasional: restoran.jam_operasional,
    });
  }

  return results;
}

/**
 * Get user detail
 * @param {string} id - User ID
 * @returns {Object}
 */
async function getRestoran(id) {
  const restoran = await restoransRepository.getRestoran(id);

  // User not found
  if (!restoran) {
    return null;
  }

  return {
    id: restoran.id,
    nama_restoran: restoran.nama_restoran,
    alamat: restoran.alamat,
    nomor_telepon: restoran.nomor_telepon,
    jam_operasional: restoran.jam_operasional,
  };
}

/**
 * Create new user
 * @param {string} nama_restoran - Email
 * @param {string} alamat - Password
 * @param {string} nomor_telepon - Name
 * @param {string} jam_operasional - Email
 * @returns {boolean}
 */
async function createRestoran(
  nama_restoran,
  alamat,
  nomor_telepon,
  jam_operasional
) {
  try {
    await restoransRepository.createRestoran(
      nama_restoran,
      alamat,
      nomor_telepon,
      jam_operasional
    );
  } catch (err) {
    return null;
  }

  return true;
}

/**
 * Update existing user
 * @param {string} id - User ID
 * @param {string} nama_restoran - Email
 * @param {string} alamat - Password
 * @param {string} nomor_telepon - Name
 * @param {string} jam_operasional - Email
 * @returns {boolean}
 */
async function updateRestoran(
  id,
  nama_restoran,
  alamat,
  nomor_telepon,
  jam_operasional
) {
  const restoran = await restoransRepository.getRestoran(id);

  // User not found
  if (!restoran) {
    return null;
  }

  try {
    await restoransRepository.updateRestoran(
      id,
      nama_restoran,
      alamat,
      nomor_telepon,
      jam_operasional
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
async function deleteRestoran(id) {
  const restoran = await restoransRepository.getRestoran(id);

  // User not found
  if (!restoran) {
    return null;
  }

  try {
    await restoransRepository.deleteRestoran(id);
  } catch (err) {
    return null;
  }

  return true;
}

module.exports = {
  getRestorans,
  getRestoran,
  createRestoran,
  updateRestoran,
  deleteRestoran,
};
