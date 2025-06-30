const { Router } = require("express");
const indexController = require("../controllers/indexController");
const formController = require("../controllers/formController");

const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);
indexRouter.post("/new", formController.addMessageFromForm);

module.exports = indexRouter;