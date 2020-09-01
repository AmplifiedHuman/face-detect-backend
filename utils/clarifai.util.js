const Clarifai = require('clarifai');
const app = new Clarifai.App({
  apiKey: process.env.API_KEY,
});

const faceDetect = async (link) => {
  try {
    const rawData = await app.models.predict(
      'a403429f2ddf4b49b307e318f00e528b',
      link
    );
    return rawData;
  } catch (err) {
    throw new Error(`Error occured when calling API: ${err}`);
  }
};

module.exports = { faceDetect };
