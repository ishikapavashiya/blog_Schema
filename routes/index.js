let express = require("express");
let routes = express.Router();
let userroute = require("./user.route");
let blogroute = require("./blog.route");



routes.use("/user",userroute);
routes.use("/blog",blogroute);

module.exports = routes;