const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./test.db');
const simple = require('./index.cjs');

// handle a promis for the queryTable function
simple.QueryTable(db, "example", "user")