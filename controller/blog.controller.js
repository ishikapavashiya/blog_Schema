let { blogservice } = require("../service")
let createblog = async (req, res) => {
    try {
        console.log(req.body);

        let body = req.body;

        let user = await blogservice.createblog(body);

        res.status(200).json({
            message: "created blog success !", user
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
let getblog = async (req, res) => {
    try {
        console.log(req.body);
        let get = await blogservice.getblog();
        res.status(200).json({
            message: "get blog success!", get,
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let deleteblog = async (req, res) => {
    try {
        let { id } = req.params;
        let deleteusers = await blogservice.deleteblog(id);
        res.status(200).json({
            message: "delete blog success", deleteusers,
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

let updatablog = async (req, res) => {
    try {
        let { id } = req.params;
        let updata = await blogservice.updatablog(id, body)
        res.status(200).json({
            message: "updata blog successfuuly!", updata,
        })
    }
    catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}
module.exports = { createblog, getblog, deleteblog, updatablog }