const sqlite3 = require('sqlite3').verbose();
//const db = new sqlite3.Database('../test.db');

async function queryColumn(db, table, column) {
    const sqlite3 = require('sqlite3').verbose();
    const db = new sqlite3.Database('../test.db');
    const sql = `SELECT user1 FROM dataex`;
    const rows = await new Promise((resolve, reject) => {
        db.get(sql, (err, rows) => {
        if (err) {
            reject(err);
        }
        resolve(rows);
        });
    });
    //console.log(rows);
}

queryColumn('/etc/passwd')
  .then(data => console.log(data))
  .catch(err => console.error(err));

module.exports = { queryColumn }