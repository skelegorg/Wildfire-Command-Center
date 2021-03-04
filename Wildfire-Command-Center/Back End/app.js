const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true}).then(() => console.log("DB Connected"));

const accRoutes = require("./routes/account");

app.use(morgan("dev"));
app.use(bodyParser.json());
//app.use("/", (req, res) => {res.send("hi there")});
app.use("/account", accRoutes);

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`API listening on port ${port}`);
})