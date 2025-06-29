const { Router } = require("express");
const indexController = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", indexController.getMessages);
indexRouter.post("/new", indexController.addMessageFromForm);
indexRouter.get("/test", (req, res) => res.send("TEST2asdfasdf"));

module.exports = indexRouter;