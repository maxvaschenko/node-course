const { geocode } = require("./utils/geocode");
const { forecast } = require("./utils/forecast");

geocode("kiev", (err, data) => {
  if (err) {
    return console.log(err);
  } else {
    const { lat, lon, location } = data;
    console.log(location);
    forecast(lat, lon, (err, forecastData) => {
      console.log("data", forecastData);
    });
  }
});
