const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const morgan = require("morgan");
const mongoose = require("mongoose");
mongoose.connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => {console.log("Database Connected")});
mongoose.connection.on("error", err => console.log(`Database Connection Error: ${err.message}`));
