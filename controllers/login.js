const UserService = require('../services/user.service');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const credentials = await UserService.loginUser(email, password);
    if (credentials === null) {
      res.status(401).json('Invalid Credentials');
      return;
    }
    const userInfo = await UserService.getUserByEmail(credentials.email);
    res.send(userInfo);
  } catch (err) {
    console.log(`Error occured during /login: ${err}`);
    res.status(401).json('Invalid Credentials');
  }
};

module.exports = { handleLogin: handleLogin };
