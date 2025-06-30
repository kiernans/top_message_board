const { Pool } = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "nukabunny",
    database: "top_messages",
    password: process.env.DATABASE_PASSWORD,
    port: 5432

});