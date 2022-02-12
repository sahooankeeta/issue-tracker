const Project = require("./../models/project");
module.exports.home = async function (req, res) {
  let projects = await Project.find();
  return res.render("home", {
    title: "issue-tracker",
    projects: projects,
  });
};
