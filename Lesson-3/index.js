const express = require("express");

const path = require("path");
//set env file, install dotenv package
require("dotenv").config();

//npm i morgan
const logger = require("morgan");

//other middleware to use
const cookieParser = require("cookie-parser");

//console.log(process.env);  I can see the variables in .env file now
//normally, process.env is belong to environment of os.

const app = express();

const port = process.env.port || 5000;
const host = "localhost";

//arrangement to read ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

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
// app.use((  req, res, next) => {
//   console.Console.log("Auth");
//   res.isAuth = true;
//   //make your duty and go for next
//   next();
// });
// app.use((req, res, next) => {
//   console.Console.log("Controller // db");
//    if(res.isAuth){
//        console.log("get private data")
//    }else{
//        console.log("no authentication")
//    }
//   next();
// });
// app.use((req, res, next) => {
//   console.Console.log("middleware:3");
//   //make your duty and go for next
//   next();
// });

//use cookie parser
//app.use(cookieParser())

// //use logger
// app.use(logger()); // run logger for every req
// //app.use(logger("dev")); // other option, less detailed
// //logger writes information of all req to consol

// if i wanna use css file directly i need to authenticate my static files with static middleware
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index");
});

// //use cookieParser

// app.use(cookieParser())
// app.use((req,res)=>{
//     console.log("cookies: ", req.cookies)
// })

// ********************************************************
// ********************************************************
// middleware
// ********************************************************
// ********************************************************

app.listen(port, host, () => {
  //const server = app.listen(port, host, () => {
  //console.log(server.adress());
  console.log("I am listening on http://%s:%s", host, port);
});
