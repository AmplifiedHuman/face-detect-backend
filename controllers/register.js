const UserService = require('../services/user.service');

const handleRegister = async (req, res) => {
  const { email, name, password } = req.body;
  if (!email || !name || !password) {
    res.status(400).json('Unable to register user');
    return;
  }
  try {
    const user = await UserService.registerUser(email, name, password);
    if (user === null) {
      res.status(400).json('Unable to register user');
    } else {
      res.json(user);
    }
  } catch (err) {
    console.log(`Error occured during /register: ${err}`);
    res.status(400).json('Unable to register user');
  }
};

module.exports = {
  handleRegister: handleRegister,
};
