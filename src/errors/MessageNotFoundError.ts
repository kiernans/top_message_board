class MessageNotFoundError extends Error {
    statusCode: number;


    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = "MessageNotFoundError"
    }
}
module.exports = MessageNotFoundError;