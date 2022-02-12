const Issue = require("./../models/issue");
const Project = require("./../models/project");
module.exports.issueForm = function (req, res) {
  return res.render("issue-form", {
    title: "issue",
    id: req.params.id,
  });
};
module.exports.createIssue = async function (req, res) {
  try {
    //console.log(req.body);
    const { title, author, description, labels, projectId } = req.body;
    let project = await Project.findById(projectId);
    let issue = await Issue.create({
      projectId,
      title,
      author,
      description,
      labels: labels.split(","),
    });
    project.issues.push(issue);
    project.save();
    return res.redirect(`/projects/${projectId}`);
  } catch (err) {
    console.log("err in creating issue", err);
    return res.redirect(`/projects/${projectId}`);
  }
};
module.exports.filter = async function (req, res) {
  try {
    //  return res.render("projectView", {
    //     title: `${project.author}/${project.name}`,
    //     project: project,
    //     issues: issues,
    //   });
    let issues = await Issue.find({ author: req.body.filterValue });
    if (req.xhr) {
      return res.status(200).json({
        data: {
          issues: issues,
        },
        message: "filtered",
      });
    }
    return res.redirect("back");
  } catch (err) {
    console.log("err in creating issue", err);
    return res.redirect(`/projects/${req.body.projectId}`);
  }
};
