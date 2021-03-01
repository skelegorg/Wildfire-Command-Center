const express = require("express");
const accController = require("../controllers/post");
const router = express.Router();

router.get('/', accController.getPosts);
router.post('/account',  accController.createAccount)

module.exports = router;