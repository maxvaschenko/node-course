const request = require("request");

const geocode = (address, cb) => {
  if (!address) {
    return console.log("No address provided!");
  }
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoibWF4aW1hbDkzIiwiYSI6ImNrNHdxd2UwazEwYjkzZG1yMHI3N2IwNnkifQ.422q83Ar6s23z2tCLZaoVQ&limit=1`;
  request({ url, json: true }, (err, res) => {
    if (err) {
      cb("Geoservice is not available", undefined);
    } else if (res.body.message) {
      cb(res.body.message, undefined);
    } else {
      const lon = res.body.features[0].center[0];
      const lat = res.body.features[0].center[1];
      const location = res.body.features[0].place_name;
      cb(undefined, { lat, lon, location });
    }
  });
};

module.exports = {
  geocode
};
