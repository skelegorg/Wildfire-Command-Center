const Account = require("../models/account");

exports.getAcc = (req, res) => {
    const acc = Account.find()
        .then((accounts) => {
            res.json({accounts})
        })
        .catch(err => console.log(err));
}

exports.createAcc = (req, res) => {
    const acc = new Account(req.body);
    acc.save()
        .then(result => {
            res.status(200).json({account: result});
        });
};