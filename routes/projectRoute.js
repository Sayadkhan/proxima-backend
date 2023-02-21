const express = require("express");
const {
  postProject,
  getAllProjects,
  getSingleProject,
} = require("../controllers/projectController");

// router
const router = express.Router();

// GEt all projects
router.get("/", getAllProjects);

// get a single prroject
router.get("/:id", getSingleProject);

// post a new porject
router.post("/", postProject);
// delet a project
router.delete("/:id", (req, res) => {
  res.json({ message: " delete a new project" });
});

// update a project
router.patch("/:id", (req, res) => {
  res.json({ message: " patch a new project" });
});

module.exports = router;
