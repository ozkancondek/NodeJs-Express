const express = require("express");
const os = require("os");
const path = require("path");

//create server and listen it
//express().listen();
//but lets write it more fancy
const app = express();
const port = 5000;
const host = "http://localhost";

//define a path
const customPath = path.join(__dirname, "/testfolder");
//e.i. if user sends a wrong path i can fix it with path.normalize()
//i can also get a extension name
const myFile = "ozkan.png";

const getExt = path.extname(myFile); //.png

//write requests
//if client make a get request from / path
app.get("/", (req, res) => {
  //   console.log(req.url);
  //   console.log(req.baseUrl);
  //   console.log(req.originalUrl);
  res.send("you made a get request from / path");
});

//get os informations
app.get("/serverinfo", (req, res) => {
  res.send(`server information : ${os.type()}`);
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
