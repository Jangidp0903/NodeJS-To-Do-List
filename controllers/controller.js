// Import
const Item = require("../models/item");

// Home
const GET_HOME = (req, res) => {
  Item.find()
    .then((foundItem) => {
      if (foundItem.length > 0) {
        res.render("index", {
          title: "To Do List",
          data: foundItem.reverse(),
        });
      } else {
        res.render("index", {
          title: "To Do List",
          data: "No Item Found!",
        });
      }
    })
    .catch((err) => {
      console.log("Error ->", err);
    });
};

const POST_HOME = (req, res) => {
  var itemText = req.body.name;

  const item = new Item({
    name: itemText,
  });

  item
    .save()
    .then((saved_item) => {
      //   console.log(saved_item);
      res.redirect("/");
    })
    .catch((err) => {
      console.log("Error ->", err);
    });
};

const GET_DELETE = (req, res) => {
  var Id = req.params.id;
  Item.findByIdAndDelete(Id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log("Error ->", err);
    });
};
// Export
module.exports = {
  GET_HOME,
  POST_HOME,
  GET_DELETE,
};
