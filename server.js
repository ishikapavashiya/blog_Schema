require("dotenv").config();
let http = require("http");
let express = require("express");
const dbconnect = require("./DB/DB.connect");
let routes = require("./routes")
let app = express();
// body 

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("view engine","ejs")



// DBconnect 
dbconnect()

// routes
app.use("/v1",routes);
app.get("/",(req,res)=>{
    res.render("index")
 })

// server 
http.createServer(app).listen(process.env.PORT,()=>{
    console.log(`server sraread ${process.env.PORT}`);
})
