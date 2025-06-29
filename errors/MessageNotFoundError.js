class MessageNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = "MessageNotFoundError"
    }
}
module.exports = MessageNotFoundError;