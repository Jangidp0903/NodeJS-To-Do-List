require("dotenv").config();
// Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./routes/routes");

// Port
const PORT = process.env.PORT || 5000;

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
mongoose
  .connect(
    `mongodb+srv://puneetjangid637:${process.env.MONGO_PASS}@cluster0.h74zzsv.mongodb.net/to-do-list`
  )
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
