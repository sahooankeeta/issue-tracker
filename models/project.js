const mongoose = require("mongoose");
const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    author: String,
    description: String,
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
      },
    ],
  },
  {
    timestamps: true,
  }
);
const Project = mongoose.model("Project", ProjectSchema);
module.exports = Project;
