const { Router } = require("express");
const { addMessageFromForm, getMessages } = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getMessages);
indexRouter.post("/new", addMessageFromForm);

module.exports = indexRouter;