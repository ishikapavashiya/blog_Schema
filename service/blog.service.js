let { blogSchema } = require("../model");

let createblog = (body) => {
    return blogSchema.create(body)
}

let getblog = () => {
    return blogSchema.find();
}

let deleteblog = (id) => {
    return blogSchema.findByIdAndDelete(id)
}

let updatablog = (id, body) => {
    return blogSchema.findByIdAndUpdate(id, body)
}


module.exports = { createblog, getblog, deleteblog, updatablog }