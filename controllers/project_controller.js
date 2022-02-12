const Project = require("./../models/project");
const Issue = require("./../models/issue");
// module.exports.projects = function (req, res) {
//   return res.render("projects", {
//     title: "projects",
//   });
//};
module.exports.projectForm = function (req, res) {
  return res.render("project-form", {
    title: "project",
  });
};
module.exports.createProject = async function (req, res) {
  try {
    const { name, author, description } = req.body;
    let project = await Project.create({
      name,
      author,
      description,
    });
    return res.redirect("/");
  } catch (err) {
    console.log("err in creating project", err);
    return res.redirect("/");
  }
};
module.exports.openProject = async function (req, res) {
  const id = req.params.id;
  let project = await Project.findById(id);
  let issues;
  if (req.body.filterValue) {
    if (req.body.filter === "labels")
      issues = await Issue.find({
        projectId: project.id,
        labels: { $in: req.body.filterValue.split(",") },
      });
    else
      issues = await Issue.find({
        projectId: project.id,
        [req.body.filter]: req.body.filterValue,
      });
  } else {
    issues = await Issue.find({ projectId: project.id });
  }
  return res.render("projectView", {
    title: `${project.author}/${project.name}`,
    project: project,
    issues: issues,
  });
};
