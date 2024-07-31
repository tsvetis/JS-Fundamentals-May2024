// Third-party modules
const express = require("express");
const bodyParser = require("body-parser");
const handleBars = require("express-handlebars");

// Controllers
const homeController = require("./src/controllers/home");
const catalogController = require("./src/controllers/catalog");

// Application Configuration
const app = express();
const hbs = handleBars.create({ extname: "hbs" });
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

// Home Controller
app.get("/", homeController.home);
app.get("/about", homeController.about);
app.get("/blocked", homeController.blocked);

// Catalog Controller
app.get("/catalog", catalogController.catalog);
app.get("/catalog/:id", catalogController.details);
app.get("/create", catalogController.create);
app.post("/create", catalogController.createPostReq);

app.listen(3400, () => console.log("Server is running on port 3400 !"));
