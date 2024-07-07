const { userschema } = require("../model");

let register = (body) => {
    console.log(body, "service");
    return userschema.create(body);
};
let findAllusers = () => {
    return userschema.find();
};
let deleteuser = (id) => {
    return userschema.findByIdAndDelete(id);
}
let updatauser = (id, body) => {
    return userschema.findByIdAndUpdate(id, body);
}
module.exports = { register, findAllusers, deleteuser, updatauser };