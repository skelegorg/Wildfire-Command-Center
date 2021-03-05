const express = require("express");
const accController = require("../controllers/accountController");
const validator = require("../validator");

const router = express.Router();

router.post("/create", validator.createAccountValidator, accController.createAcc);

module.exports = router;