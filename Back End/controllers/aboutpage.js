const page = require("../Front End/about.html");

exports.getAbout = (req, res) => {
    res.sendFile(page);
}