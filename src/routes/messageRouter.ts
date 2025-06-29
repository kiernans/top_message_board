const { Router } = require("express");
const { getMessageById, getMessages } = require("../controllers/messageController");

const messageRouter = Router();

messageRouter.get("/", getMessages);
messageRouter.get("/:messageId", getMessageById);

module.exports = messageRouter;