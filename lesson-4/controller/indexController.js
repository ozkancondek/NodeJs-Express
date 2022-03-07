//I moved this get func to controllers

exports.get_index = function (req, res, next) {
  res.render("index", { title: Express });
};
