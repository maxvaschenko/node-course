const request = require("request");

const forecast = (lat, lon, cb) => {
  const url = `https://api.darksky.net/forecast/4af34325ca9f2e0519a6008bb1edfefe/${lat},${lon}?units=si`;
  request({ url, json: true }, (err, res) => {
    if (err) {
      cb("Weather service connect error", undefined);
    } else if (res.body.error) {
      cb(res.body.error, undefined);
    } else {
      const {
        body: {
          currently: { temperature, precipProbability }
        }
      } = res;
      cb(
        undefined,
        `It is currently ${temperature} degrees out. There is a ${precipProbability}% chance to rain.`
      );
    }
  });
};

module.exports = {
  forecast
};
