const page = require("../Front End/Index.html");

exports.getHome = (req, res) => {
    res.sendFile(page);
}