const express = require("express");
const accController = require("../controllers/accountController");

const router = express.Router();

router.get("/get", accController.getAcc);
router.post("/create", accController.createAcc);

module.exports = router;