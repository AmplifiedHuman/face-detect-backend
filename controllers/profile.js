const UserService = require('../services/user.service');

const handleProfile = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserService.getUserById(id);
    if (user == null) {
      res.status(404).json('Unable to get user');
    } else {
      res.json(user);
    }
  } catch (err) {
    console.log(`Error occured during /profile: ${err}`);
    res.status(404).json('Unable to get user');
  }
};

module.exports = { handleProfile: handleProfile };
