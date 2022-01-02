const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database/database');


// GET all articles
router.get('/api/products', (req, res) => {
    mysqlConnection.query('SELECT P.idProducts, P.title, P.description, P.priceSale, TO_BASE64((SELECT MAX(I.image)  FROM image AS I)) AS image FROM products AS P WHERE P.status = 1', (err, rows, fields) => {
        if (!err) {
        //    console.log(base64_utf8_encode(rows[0]));
            // res.send("<img src='data:image/*;base64,'"+rows[0]+"'/>");
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});



module.exports = router;