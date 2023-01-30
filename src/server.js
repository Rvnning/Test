const express = require("express");
const app = express();
const port = 3000;

function handleServer() {
  console.log(`app listening on port ${port}`);
}

app.get("/", (_, res) => {
  res.render("index");
});

app.listen(port, handleServer);
