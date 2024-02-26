// Import
const { name } = require("ejs");
const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
});

// Export
module.exports = mongoose.model("item", itemSchema);
