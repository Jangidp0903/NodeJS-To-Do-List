// Import
const router = require("express").Router();
const {
  GET_HOME,
  POST_HOME,
  GET_DELETE,
} = require("../controllers/controller");

// Home
router.get("/", GET_HOME);
router.post("/", POST_HOME);
router.get("/delete/:id", GET_DELETE);

// Export
module.exports = router;
