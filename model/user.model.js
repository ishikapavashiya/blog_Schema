let mongoose = require("mongoose");


let blogShema = new mongoose.Schema({
   username:{
    type:String,
    require:true,
   },
   email:{
    type:String,
    require:true,
   },
   password:{
    type:String,
    require:true,
   }
})
let bloguser =  mongoose.model("blogShema",blogShema)
module.exports = bloguser;