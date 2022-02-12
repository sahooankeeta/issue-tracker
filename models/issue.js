const mongoose = require("mongoose");
const IssueSchema = new mongoose.Schema(
  {
    projectId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
    },
    title: String,
    description: String,
    author: String,
    labels: [],
  },
  {
    timestamps: true,
  }
);
const Issue = mongoose.model("Issue", IssueSchema);
module.exports = Issue;
