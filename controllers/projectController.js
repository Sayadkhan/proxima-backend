const Porject = require("../models/porjectModel");

// get all projects

const mongoose = require("mongoose");
const getAllProjects = async (req, res) => {
  const projects = await Porject.find({});
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
  const data = req.body;

  try {
    const project = await Porject.create({
      ...data,
    });

    res.status(200).json(project);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a project

// update a project

module.exports = {
  postProject,
  getAllProjects,
  getSingleProject,
};
