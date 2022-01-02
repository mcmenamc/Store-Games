const mysql = require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'storegames',
    port: 3306
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('DB is connected');
});

module.exports = mysqlConnection;

