const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

async function getMessages() {
    return messages;
};

async function addMessage(user, text) {
    messages.push({ text: text, user: user, added: new Date() });
}

module.exports = { getMessages, addMessage };