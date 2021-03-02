const mongoose = require("mongoose");

const accSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "Username required"
    },
    password: {
        type: String,
        required: "Password required"
    }
});

module.exports = mongoose.model("Account", accSchema);