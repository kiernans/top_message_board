const { Router } = require("express");
const { addMessageFromForm, getMessages } = require("../controllers/indexController");
const db = require("../db");

const indexRouter = Router();

const messages = db.getMessages();

indexRouter.get("/", getMessages);
indexRouter.post("/new", addMessageFromForm);

module.exports = indexRouter;