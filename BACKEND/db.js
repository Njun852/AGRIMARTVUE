const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    port:'3306',
    user: 'root',
    password: 'qweqweqwe123',
    database: 'agrimart'
});

module.exports = connection;