const express = require("express");

// router
const router = express.Router();

// GEt all projects
router.get("/", (req, res) => {
  res.json({
    message: "get all projects",
  });
});

// get a single prroject
router.get("/:id", (req, res) => {
  res.json({
    message: "GET a single project",
  });
});

// post a new porject
router.post("/", (req, res) => {
  res.json({ message: " POST a new project" });
});
// delet a project
router.delete("/:id", (req, res) => {
  res.json({ message: " delete a new project" });
});

// update a project
router.patch("/:id", (req, res) => {
  res.json({ message: " patch a new project" });
});

module.exports = router;
