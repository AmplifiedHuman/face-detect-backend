const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds); 
  return bcrypt.hashSync(password, salt);
};

const checkPassword = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

module.exports = { hashPassword, checkPassword };
