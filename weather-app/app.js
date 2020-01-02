const { geocode } = require("./utils/geocode");
const { forecast } = require("./utils/forecast");

geocode("Boston", (err, data) => {
  console.log("error", err);
  console.log("data", data);
});

forecast(37.8267, -122.4233, (err, data) => {
  console.log("error", err);
  console.log("data", data);
});
