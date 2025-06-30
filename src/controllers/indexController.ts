const asyncHandler = require("express-async-handler");
const db = require("../db/queries");
const MessageNotFoundError = require("../errors/MessageNotFoundError");


const getMessages = asyncHandler(async (req, res) => {
    const messages = await db.getAllEntries();

    if (!messages) {
        throw new MessageNotFoundError("Messages not found");
    }

    res.render("index", { title: "Mini Message Board", messages: messages });
});

module.exports = { getMessages };