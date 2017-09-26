const connstring = require('pg-connection-string');
const pg = require('pg');

const db = new pg.Pool(connstring.parse(process.env.DATABASE_URL));

module.exports = db;
