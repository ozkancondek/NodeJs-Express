const express = require("express");
const path = require("path");
const UserRouter = require("./routes/UserRouter");

const app = express();

//if there is something in my env use it or 5000
const port = process.env.port || 5000;

//make arrangement because express need to understand the file rendering and location
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//rewuests
app.get("/", (req, res) => {
  //res.send("you connected from home page");

  //show my main.ejs from views when i am in / path
  res.render("main", { name: "ozkan" });

  //i can also send file
  //   res.sendFile(path.join(__dirname,"textfile.txt"))
});

//if i have many functions, i need to collect them in route folder
//so i will dispatch these functions to router
//use: all requests go to UserRouter first
app.use("/user", UserRouter);

app.listen(port, () => {
  console.log("i am listening  ");
});
