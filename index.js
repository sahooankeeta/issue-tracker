const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const port = 8000;
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((con) => {
    console.log("connection made to database");
  });
app.use(express.urlencoded());
const expressLayouts = require("express-ejs-layouts");

app.use(express.static(`${__dirname}/assets`));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log("error on running port");
  }
  console.log(`server running on ${port}`);
});
