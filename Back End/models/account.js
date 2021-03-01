/*
    Elements of an account:
        account name (username)
        date created
        hashed password
 */

const mongoose = require("mongoose");

const accountSchema = new mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 4,
        maxlength: 150
    },
    body: {
        type: String,
        required: "Body is required",
        minlength: 4,
        maxlength: 2000
    }
});

module.exports = mongoose.model("Account", accountSchema);