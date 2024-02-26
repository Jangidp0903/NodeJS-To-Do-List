// Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Mongoose = require("mongoose");
const router = require("./routes/routes");

// Port
const PORT = 5000;

// Middleware
// --static
app.use(express.static("public"));
// --bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
// --ejs
app.set("view engine", "ejs");
// Router
app.use(router);

// Create DataBase
Mongoose.connect("mongodb://localhost:27017/to-do-list")
  .then(() => {
    console.log("Connected to DataBase");
    // Create Server
    app.listen(PORT, () => {
      console.log("Server Started on Port : ", PORT);
    });
  })
  .catch((err) => {
    console.log("Error =>", err);
  });
