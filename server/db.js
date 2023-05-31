const {Pool} = require('pg')
const db = new Pool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'postgres',
    password:'root',
    database:'test',
    port:5432
})

module.exports = db;
