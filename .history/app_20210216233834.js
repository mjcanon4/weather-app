const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("server is up and running");
});

app.post("", function(req, res) {
    res.send("hello"))
}

app.listen(3000, function () {
  console.log("Server is Running");
});
