const mysql = require('mysql');

const mysqlConnection =  mysql.createConnection({
    host: 'storegames.co27wc5yucgt.us-east-2.rds.amazonaws.com',
    user: 'admin',
    password: 'Lupitha12#',
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

