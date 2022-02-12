const express = require("express");

const router = express.Router();
const projectController = require("./../controllers/project_controller");

router.get("/form", projectController.projectForm);
router.post("/create", projectController.createProject);
router.get("/:id", projectController.openProject);
router.post("/:id", projectController.openProject);

module.exports = router;
