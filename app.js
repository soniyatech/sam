const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 8080;

app.get("/", (req, res) => {
  res.send("hello, get reached root.");
});

app.listen(port, () => {
  console.log(`server listening on port ${port}...`);
});
