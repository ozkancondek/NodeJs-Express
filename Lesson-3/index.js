const express = require("express");

//set env file, install dotenv package
require("dotenv").config();

//console.log(process.env);  I can see the variables in .env file now
//normally, process.env is belong to environment of os.

const app = express();

const port = process.env.port || 5000;
const host = "localhost";

app.get("/", (req, res) => {
  res.send("hello from / route");
});

app.listen(port, host, () => {
  //const server = app.listen(port, host, () => {
  //console.log(server.adress());
  console.log("I am listening on http://%s:%s", host, port);
});
