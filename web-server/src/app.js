const express = require("express");
const path = require("path");
const hbs = require("hbs");

const app = express();

//Define paths for Express config
const publicDir = path.join(__dirname, "../public");
const viewsDir = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup hbs engine ang views location
app.set("views", viewsDir);
app.set("view engine", "hbs");
hbs.registerPartials(partialsPath);

app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home page",
    name: "Max Vashchenko"
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "Robot",
    name: "Max Vashchenko"
  });
});

app.get("/about/*", (req, res) => {
  res.render("404", {
    notFoundText: "Any additional about pages not found"
  });
});

app.get("/weather", (req, res) => {
  res.send({
    title: "Weather",
    forecast: "aaa",
    location: ["a", "b", "c"],
    name: "Max Vashchenko"
  });
});

app.get("/weather/*", (req, res) => {
  res.render("404", {
    notFoundText: "Any additional weather pages not found"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    helpText: "This is help text",
    title: "Help",
    name: "Max Vashchenko"
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    notFoundText: "Any additional help pages not found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    notFoundText: "Not found!"
  });
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
