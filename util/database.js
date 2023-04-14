const sql = require('mysql2');

const pool = sql.createPool({
    host : 'localhost',
    user : 'root',
    database : 'testdb',
    password : 'abhay@26'
});

module.exports = pool.promise();