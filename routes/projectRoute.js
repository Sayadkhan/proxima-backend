const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
} = require("../controllers/projectController");

const requireAuth = require("../middlewares/requireAuth");

// router
const router = express.Router();

router.use(requireAuth);

// GEt all projects
router.get("/", getAllProjects);

// get a single prroject
router.get("/:id", getSingleProject);

// post a new porject
router.post("/", postProject);
// delet a project
router.delete("/:id", deleteProject);

// update a project
router.patch("/:id", updateProject);

module.exports = router;
