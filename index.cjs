const sqlite3 = require('sqlite3').verbose();
//const db = new sqlite3.Database('./test.db');

// Create an async funtion to query a table in a database which returns the columns of the table
async function queryTable(db, table, col) {
    return new Promise((resolve, reject) => {
        db.all(`SELECT '${col}' FROM '${table}'`, (err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
        console.log(rows)
    });
    });
}

module.exports = { queryTable }

