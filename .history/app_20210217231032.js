const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const apiKey = "57df2889f1424affedbbf4fb3213c516";
  const q = req.body.cityName;
  const unit = "imperial";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=${unit}`;
  https.get(URL, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
      res.setHeader("Content-type", "text/html");
      res.write("The weather is currently " + weatherDescription);
      res.write("<h1>The temperature is " + temp + " degrees Farenheit</h1>");
      res.write("<img src=" + imgURL + ">");
      res.send();
    });
  });
});

app.listen(3001, function () {
  console.log("Server is Running");
});
