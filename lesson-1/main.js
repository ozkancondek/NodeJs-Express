// //apply node to get output in terminal
// //cd lesson-1, node main
// console.log("hello world");

// //js is an asyncron language
// console.log("first");
// setTimeout(() => console.log("second"), 1000);
// console.log("third");
// //other languages follows the line order but js not

//js is an Event-driven-language
//requests with promise structure dont include the call stack
//after they have a response, they wait in callback queue and include the call stack

//enter to node.Js write server

//normally i can use direct import in react because
//but in core js its not possible
//import http from "http"
//thats not gonna work
// thats why i have to use require keyword
var http = require("http");
const { Http2ServerRequest } = require("http2");
//whats in it
//console.log(http);
//there is createServer method in it
http //deploy my server in port 5001 and send for all request connection is succ. message
  .createServer((req, res) => {
    //  console.Console.log(req.url);
    //send request from browser to see req.url
    if (req.url === "/") {
      res.end("Connection is succesfull.You are in the home page");
    } else {
      res.writeHead(404); // define it firstly
      res.end(http.STATUS_CODES[404]); //send not found for other roots
    }
  })
  .listen(5001);

//global objects in nodejs
// __filename
// __dirname
// console.log(__filename);
// console.log(__dirname);
