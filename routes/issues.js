const express = require("express");
const router = express.Router();
const issueController = require("./../controllers/issue_controller");
router.get("/form/:id", issueController.issueForm);
router.post("/create", issueController.createIssue);
router.post("/filter", issueController.filter);
module.exports = router;
