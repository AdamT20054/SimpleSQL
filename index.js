const sqlite3 = require('sqlite3').verbose();
const f = require(`./Query/queryColumn.js`);
const db = new sqlite3.Database('./test.db');
let b = f.queryColumn(db, `dataex`, `user1`);
console.log(b)



