const express = require("express");
const https = require("https");

const app = express();
const apiKey = "57df2889f1424affedbbf4fb3213c516";
const URL =
  "https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=57df2889f1424affedbbf4fb3213c516";

app.get("/", function (req, res) {
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
      res.write("<html><h1>The temperature is </h1></html>");
      res.write(imgURL);
      res.write(`"<img" src=${imgURL} />`);
      res.send();
    });
  });
});

app.listen(3001, function () {
  console.log("Server is Running");
});
