const router = require("express").Router();
const Project = require("../models/projectModel");

router.post("/projects", async (req, res) => {
  try {
    let { title, description, link } = req.body;

    const newProject = new Project({
      title,
      description,
      link,
    });
    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/projects", async (req, res) => {
  try {
    Project.find({}).then(function (projects) {
      res.send(projects);
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
