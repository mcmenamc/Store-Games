const express = require("express");
const router = express.Router();
const mysqlConnection = require("../database/database");

// GET all articles
router.get("/api/products", (req, res) => {
  mysqlConnection.query("SELECT P.idProducts, P.title, P.name, P.description, P.priceSale,  (SELECT AVG(rating) FROM comments AS C where C.fkProducts = P.idProducts) AS rating, TO_BASE64((SELECT MAX(I.image)  FROM image AS I WHERE I.fkProduct = P.idProducts)) AS image FROM products AS P WHERE P.status = 1;",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    }
  );
});

module.exports = router;
