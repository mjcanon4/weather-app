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
      res.write("The weather is currently " + weatherDescription);
      res.write("<h1>The temperature is " + temp);
      res.write("http://openweathermap.org/img/wn/10d@2x.png");
      res.send();
    });
  });
});

app.listen(3001, function () {
  console.log("Server is Running");
});
