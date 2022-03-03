const express = require("express");

//set env file, install dotenv package
require("dotenv").config();

//npm i morgan
const logger = require("morgan");

//console.log(process.env);  I can see the variables in .env file now
//normally, process.env is belong to environment of os.

const app = express();

const port = process.env.port || 5000;
const host = "localhost";

// ********************************************************
// ********************************************************
// MIDDLEWARE
// ********************************************************
// ********************************************************

// //all process between request and response
// //u have only two option
// //u gonna finish process or next middleware
// //for example there is no return in this function
// //app.use(() => console.Console.log("middleware:"));
// app.use((req, res, next) => {
//   console.Console.log("middleware:1");
//   //make your duty and go for next
//   next();
// });
// app.use((req, res, next) => {
//   console.Console.log("middleware:2");
//   //make your duty and go for next
//   next();
// });
// app.use((req, res, next) => {
//   console.Console.log("middleware:3");
//   //make your duty and go for next
//   next();
// });

//use logger
app.use(logger());
app.get("/", (req, res) => {});

// ********************************************************
// ********************************************************
// middleware
// ********************************************************
// ********************************************************

app.get("/", (req, res) => {
  res.send("hello from / route");
});

app.listen(port, host, () => {
  //const server = app.listen(port, host, () => {
  //console.log(server.adress());
  console.log("I am listening on http://%s:%s", host, port);
});
