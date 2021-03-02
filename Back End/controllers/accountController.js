const Account = require("../models/account");

exports.getAcc = (req, res) => {
    res.json({
        "accs": [
            {"username": "hello", "password": "there"}
        ]
    });
}

exports.createAcc = (req, res) => {
    const acc = new Account(req.body);
    //console.log("creating account: ", req.body);
    acc.save((err, result) => {
        if(err) {
            return res.status(400).json({
                error: err
            })
        }
        res.status(200).json({
            post: result
        })
    });
};