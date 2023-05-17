const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars").engine;

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, "public")));
//Template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
app.get("/", function (req, res) {
  res.render("home");
});

app.listen(port, () => console.log(`Example app listening at :${port}`));
