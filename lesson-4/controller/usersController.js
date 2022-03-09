const UserModel = require("../models/User");

//its an awsync await function

exports.get_users = async (req, res, next) => {
  //get users from db
  try {
    const userList = await UserModel.findAll();
    res.render("users", { userList });
  } catch (error) {
    res.send("An error occured");
  }
};
