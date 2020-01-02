const { geocode } = require("./utils/geocode");
const { forecast } = require("./utils/forecast");

const argParser = args => {
  if (args.length > 2) {
    const searchedArg = args.find(item => item.includes("--geocode"));
    return searchedArg.split("--geocode=")[1];
  }
};

geocode(argParser(process.argv), (err, data) => {
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
