let express = require("express");
let { usercontroller } = require("../controller");
 let validate = require("../middleware/validate")
 let {uservalidations} = require("../validations")
let route = express.Router();

route.post("/register",validate(uservalidations.user),usercontroller.register);
route.get("/get", usercontroller.getuser);
route.delete("delete/:id", usercontroller.deleteuser);
route.put("updata/:id", usercontroller.updatauser);

route.post("/login",usercontroller.login);
module.exports = route;