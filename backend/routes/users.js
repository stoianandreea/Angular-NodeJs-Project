var express = require('express');
var router = express.Router();
var JWT = require("../middleware/jwt");
const userController = require('../controllers/userController');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", userController.registerAPI);
router.post("/login", userController.login);
router.get("/usersList", JWT.checkToken, userController.getAllUsers);

module.exports = router;
