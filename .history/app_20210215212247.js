const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("server is up and running");
});

app.listen(3000, function () {
  console.log("Server is Running");
});

const arr = [];
try {
  arr.push("try");
  throw new Error();
} catch (e) {
  arr.push("catch");
} finally {
  arr.push("finally");
}

console.log(arr);
