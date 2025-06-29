const db = require("../db");
const asyncHandler = require("express-async-handler");
const MessageNotFoundError = require("../errors/MessageNotFoundError");

const getMessageById = asyncHandler(async (req, res) => {
    const { messageId } = req.params;

    const message = await db.getMessageById(messageId);

    if (!message) {
        throw new MessageNotFoundError("Message not found");
    }

    res.render("message", { message: message });
});

const getMessages = asyncHandler(async (req, res) => {
    const messages = await db.getMessages();

    if (!messages) {
        throw new MessageNotFoundError("Messages not found");
    }

    res.render("messages", { messages: messages })
});

module.exports = { getMessageById, getMessages };