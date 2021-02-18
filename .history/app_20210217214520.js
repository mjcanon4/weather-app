const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("server is up and running");
});

app.listen(3001, function () {
  console.log("Server is Running");
});
