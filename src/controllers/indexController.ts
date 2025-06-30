const asyncHandler = require("express-async-handler");
const db = require("../db");
const MessageNotFoundError = require("../errors/MessageNotFoundError");


const getMessages = asyncHandler(async (req, res) => {
    const messages = await db.getMessages();

    if (!messages) {
        throw new MessageNotFoundError("Messages not found");
    }

    res.render("index", { title: "Mini Message Board", messages: messages });
});

const addMessageFromForm = asyncHandler(async (req, res) => {
    const { author: user, message: text } = req.body;
    db.addMessage(user, text);
    res.redirect("/");
});

module.exports = { addMessageFromForm, getMessages };