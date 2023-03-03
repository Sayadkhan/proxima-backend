const Porject = require("../models/porjectModel");

// get all projects

const mongoose = require("mongoose");
const getAllProjects = async (req, res) => {
  const projects = await Porject.find({}).sort({ createdAt: -1 }); // descending, newly added project on top
  res.status(200).json(projects);
};

// get a single project

const getSingleProject = async (req, res) => {
  const { id } = req.params;

  if (mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalied id" });
  }

  const project = await Porject.findById(id);

  if (!project) {
    return res.status(404).json({ error: "no project found" });
  }
  res.status(200).json(project);
};

// post a new project

const postProject = async (req, res) => {
  const { title, tech, budget, duration, manager, dev } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!tech) {
    emptyFields.push("tech");
  }

  if (!budget) {
    emptyFields.push("budget");
  }

  if (!duration) {
    emptyFields.push("duration");
  }
  if (!manager) {
    emptyFields.push("manager");
  }
  if (!dev) {
    emptyFields.push("dev");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const project = await Porject.create({
      ...req.body,
    });

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a project
const deleteProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalied id" });
  }

  const project = await Porject.findOneAndDelete({ _id: id });

  if (!project) {
    return res.status(400).json({ error: "no project found" });
  }

  res.status(200).json(project);
};
// update a project
const updateProject = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "invalied id" });
  }

  const project = await Porject.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!project) {
    return res.status(400).json({ error: "no project found" });
  }

  res.status(200).json(project);
};

module.exports = {
  postProject,
  getAllProjects,
  getSingleProject,
  deleteProject,
  updateProject,
};
