const db = require("../db");
const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

const validateMessage = [
    body("author").trim()
        .isAlpha().withMessage("Author name must only contain letters.")
        .isLength({ min: 1, max: 25 }).withMessage("Author name must be between 1 to 25 characters.")
]


const addMessageFromForm = [
    validateMessage,
    asyncHandler(async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).render("form", {
                title: "Form",
                errors: errors.array()
            });
        }

        const { author: user, message: text } = req.body;
        db.addMessage(user, text);
        res.redirect("/");
    })
];

module.exports = { addMessageFromForm };