const express = require("express");
const debug = require("debug")("server");

const app = express();
const port = process.env.SERVER_PORT || 3001;

//Add CORS Headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Max-Age", "86400");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, HEAD" ); 
  next();
});

app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Hello, World"
  });
});

app.listen(port, () => debug(`Listening on port ${port}`));