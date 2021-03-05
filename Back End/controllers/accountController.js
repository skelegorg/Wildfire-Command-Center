const Account = require("../models/account");
const bcrypt = require('bcrypt');

exports.getAcc = (req, res) => {
    const acc = Account.find()
        .then((accounts) => {
            res.json({accounts})
        })
        .catch(err => console.log(err));
}

exports.createAcc = async (req, res) => {
    const accInit = new Account();
    try {
        const hashedPw = await bcrypt.hash(req.body.password, 10);
        accInit.username = req.body.username;
        accInit.password = hashedPw;
        //res.redirect("/dashboard");
        //TODO: create /dashboard lmao
    } catch {
        //res.redirect('/register');
        //TODO: create /register
    }
    accInit.save()
        .then(result => {
            res.status(200).json({account: result});
        });
};