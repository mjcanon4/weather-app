const express = require("express");
const https = require("https");

const app = express();
const https = https();

app.get("/", function (req, res) {
  res.send("server is up and running");
});

app.listen(3001, function () {
  console.log("Server is Running");
});
