const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 8080;

// set template engine
app.set("view engine", "ejs");

// set static path
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/user", (req, res) => {
  res.render("user/user", {});
});

app.get("/device", (req, res) => {
  res.render("device/device", {});
});

app.listen(port, () => {
  //console.log(`server listening on port ${port}...`);
  console.log("http server listening at port " + port);
});
