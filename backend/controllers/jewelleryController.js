const jewelleryModel = require("../models/jewelleryModel");
const userModel = require("../models/userModel");

exports.getAllJewellery = async function (req, res) {
  try {
    const allJewellery = await jewelleryModel.getAllJewellery();
    const loggedUser = await userModel.getUserById(req.userData._id);
    res.status(200).json({ allJewellery, loggedUser });
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getJewelleryDetails = async function (req, res) {
  console.log(req.params.jewellery);
    try {
      const currentJewellery = await jewelleryModel.getJewelleryById(req.params.jewellery);
      // res.render("jewellerydetails", { title: "Jewellery details", currentJewellery });
      res.status(200).json({ currentJewellery });
      console.log(currentJewellery);
    } catch (err) {
      res.status(500).json(err);
    }
  };