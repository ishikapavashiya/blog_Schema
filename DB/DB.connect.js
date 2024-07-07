let mongoose = require("mongoose");

function dbconnect() {
    mongoose.connect(process.env.DB_URL)
        .then(() => {
            console.log("database connect");
        })
        .catch((err) => {
            console.log(err, "err");
        });
}
module.exports = dbconnect;