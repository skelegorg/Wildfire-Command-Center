const Account = require("../models/account");

exports.getPosts = (req, res) => {
    res.json({
        posts: [
            {title: "first post"}
        ]
    })
}

exports.createAccount = (req, res) => {
    const account = new Account(req.body);

}