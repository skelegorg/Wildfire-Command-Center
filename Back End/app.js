const express = require('express');
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const flash = require('express-flash');
const session  = require('express-session');
app.use(flash());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport');
const { initializePassport } = require('./passportConfig');
initializePassport(passport, email  => {

});
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => console.log("DB Connected"));

// routes
const accRoutes = require("./routes/account");

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator())
app.use("/account", accRoutes);


const port = process.env.PORT;
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
});