#! /usr/bin/env node

const { Client } = require("pg");
// Get ENV variables
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR(255),
  message VARCHAR(255),
  added TIMESTAMP
);

INSERT INTO
  messages (author, message, added)
VALUES
  ('Bryan', 'Message 1', '20120618 10:34:09 AM'),
  ('Odin', 'Message 2', '20150228 11:12:09 AM'),
  ('Damon', 'Message 3', '20100208 09:44:09 AM');
`;

async function main() {
  console.log("Setting up database...");
  const client = new Client({
    connectionString: `postgresql://nukabunny:${process.env.DATABASE_PASSWORD}@localhost:5432/top_messages`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();