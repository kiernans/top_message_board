const messages = [
    {
        id: createNewId(),
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id: createNewId(),
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

function createNewId() {
    return Math.random().toString(16).slice(2);
}

async function getMessages() {
    return messages;
};

async function addMessage(user, text) {
    messages.push({ id: createNewId(), text: text, user: user, added: new Date() });
}

async function getMessageById(id) {
    return messages.find(message => message.id === id);
}

module.exports = { getMessages, addMessage, getMessageById };