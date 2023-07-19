const Pool = require('pg').Pool;
const pool = new Pool({
    user: "conditervarna",
    password: "1111", 
    host:"localhost",
    port: 5432,
    database: "conditervarna"
});

module.exports = pool;
