const UserModel = require('../models/user.model');
const HashUtil = require('../utils/hash.util');

const getUserById = async (id) => {
  return UserModel.getUserById(id);
};

const getUserByEmail = async (email) => {
  return UserModel.getUserByEmail(email);
};

const registerUser = async (email, name, password) => {
  const hashedPassword = HashUtil.hashPassword(password);
  return UserModel.registerUser(email, name, hashedPassword);
};

const loginUser = async (email, password) => {
  const userDB = await UserModel.getUserLogin(email);
  if (userDB === null || !HashUtil.checkPassword(password, userDB.hash)) {
    return null;
  }
  return userDB;
};

const updateEntries = async (id) => {
  return UserModel.updateEntries(id);
};

module.exports = {
  getUserById,
  registerUser,
  loginUser,
  getUserByEmail,
  updateEntries,
};
