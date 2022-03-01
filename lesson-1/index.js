const express = require("express");

//create server and listen it
//express().listen();
//but lets write it more fancy
const app = express();
const port = 5000;
const host = "http://localhost";

//write requests
//if client make a get request
app.get("/", (req, res) => {
  //   console.log(req.url);
  //   console.log(req.baseUrl);
  //   console.log(req.originalUrl);
  res.send("you made a get request from / path");
});

app.listen(port, () => {
  console.log(`i am listening on ${host}:${port}`);
});
//second parameter is localhost as default
//third parameter is a callback function

//add nodemon packege to get reaction after save the file each time(--save-dev)
//to run
//if i set it global i can directly write nodemon
//or i can make a change in package json, under scripts add start:nodemon
//main and start keys are important in package json because nodemon will reach the main key
