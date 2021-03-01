// set up the packages
const bodyParser = require("body-parser");
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
).then(() => {console.log("Database Connected")}).catch(() => {console.log("Database failed to connect")});
mongoose.connection.on("error", err => console.log(`Database Connection Error: ${err.message}`));

// route inclusions
const accountRoutes = require("./routes/post");

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// routes

// |
// v is homepage- send static webpage here
app.use(express.static("./Front End/"));
app.use(express.static("./Front End/Assets"));
app.use("/account", accountRoutes);

app.listen(port, () => {console.log("API listening on port ", port)});