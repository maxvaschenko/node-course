const request = require("request");
const { geocode } = require("./utils/geocode");

// const url = `https://api.darksky.net/forecast/4af34325ca9f2e0519a6008bb1edfefe/37.8267,-122.4233?units=si`;
//
// request({ url, json: true }, (err, res) => {
//   if (err) {
//     console.log("Weather service connect error");
//   } else if (res.body.error) {
//     console.log(res.body.error);
//   } else {
//     const {
//       body: {
//         currently: { temperature, precipProbability }
//       }
//     } = res;
//     console.log(
//       `It is currently ${temperature} degrees out. There is a ${precipProbability}% chance to rain.`
//     );
//   }
// });

geocode("Boston", (err, data) => {
  console.log("error", err);
  console.log("data", data);
});
