const ClarifaiUtil = require('../utils/clarifai.util');
const UserService = require('../services/user.service');

const handleApiCall = async (req, res) => {
  try {
    const data = await ClarifaiUtil.faceDetect(req.body.input);
    res.send(data);
  } catch (err) {
    console.log(`Error occured during /imageurl ${err}`);
    res.status(400).json('Unable to call image API');
  }
};

const handleImage = async (req, res) => {
  const { id } = req.body;
  try {
    const count = await UserService.updateEntries(id);
    if (count === null) {
      res.status(400).json('Unable to update entries');
    } else {
      res.send(count);
    }
  } catch (err) {
    console.log(`Error occured during /image ${err}`);
    res.status(400).json('Unable to update entries');
  }
};

module.exports = { handleImage: handleImage, handleApiCall: handleApiCall };
