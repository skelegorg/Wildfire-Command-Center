const express = require("express");
const homepageController = require("../controllers/homepage");
const aboutCon = require("../controllers/aboutpage");
const router = express.Router();

router.get('/', homepageController.getHome);
router.get('/about', aboutCon.getAbout);

module.exports = router;