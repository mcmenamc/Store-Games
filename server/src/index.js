const express = require("express");
const cors  = require("cors");
const path = require("path");
const app = express();
// Setting
app.set("port", process.env.PORT || 3000);
// Middlewares
app.use(cors());
app.use(express.json());
//public folder
app.use(express.static(path.join(__dirname, '../../client/dist')));

// Routes
app.use(require("./routes/users")); // ROUTES USERS
app.use(require("./routes/products")); // ROUTES ARTICLES


app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
});

// Starting the server
app.listen(app.get("port"), () => {
  console.log("Server on port", app.get("port"));
});
