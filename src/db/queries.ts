const pool = require("./pool");

async function getAllEntries() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function getEntryById(id: number) {
    const { rows } = await pool.query("SELECT * FROM messages WHERE id=$1", [id]);
    return rows[0];
}

async function insertEntry(author: string, message: string) {
    await pool.query("INSERT INTO messages (author, message, added) VALUES (($1), ($2), ($3))", [author, message, new Date()]);
}


module.exports = {
    getAllEntries,
    insertEntry,
    getEntryById
}