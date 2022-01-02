const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database/database');

// GET all users
router.get('/api/user', (req, res) => {
    mysqlConnection.query('SELECT * FROM users', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});
 
// GET one user
router.get('/api/user/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM users WHERE idUser = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log("Error in the query", err);
        }
    });
}
);


module.exports = router;