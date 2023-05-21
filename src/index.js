const express = require("express");
const path = require("path");
const handlebars = require("express-handlebars").engine;
const route = require("./routes");
const app = express();
const port = 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
//Template engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources\\views"));
route(app);

app.listen(port, () => console.log(`Example app listening at :${port}`));
