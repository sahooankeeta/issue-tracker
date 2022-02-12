const express = require("express");

const router = express.Router();
const homeController = require("./../controllers/home_controller");
router.use("/projects", require("./projects"));
router.use("/issues", require("./issues"));
router.get("/", homeController.home);
console.log("route");

module.exports = router;
