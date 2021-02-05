var express = require('express');
var router = express.Router();
var JWT = require("../middleware/jwt");
const jewelleryController = require('../controllers/jewelleryController');

router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

router.get("/jewellery", JWT.checkToken, jewelleryController.getAllJewellery);
router.get("/jewellerydetails/:jewellery", jewelleryController.getJewelleryDetails);

module.exports = router;
