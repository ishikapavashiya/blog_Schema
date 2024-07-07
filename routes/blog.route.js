let express = require("express");
let route = express.Router();
let {blogcontroller} = require("../controller")
const validate = require("../middleware/validate")
const blogvalidations = require("../validations")
route.post("/create",validate(blogvalidations.blog),blogcontroller.createblog);
route.get("/get/:id",blogcontroller.getblog);
route.delete("/delete/:id",blogcontroller.deleteblog);
route.put("/update/:id",validate(blogvalidations.blog),blogcontroller.updatablog);

module.exports = route;