let  mongoose = require("mongoose");


let blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },  
    content:{
      type:String,
    },
    author:{
       type:String,
    },
    tags:{
      type:String,
    },
    commemts:{
      type:String,
      require:true
    },
})
let bloguser = mongoose.model("blogSchema",blogSchema);
module.exports = bloguser;