const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var JWT = require("./../middleware/jwt");

const JewellerySchema = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true }, // ring, bracelet, earrings
    material: { type: String, required: false }, // gold, silver, diamonds
    description: {type: String, required: false},
    price: { type: Number, required: true },
    producer: { type: String, required: false },
    image: { type: String, required: true } // path for image
});

const jewellery = mongoose.model("jewellery", JewellerySchema);

exports.getAllJewellery = function () {
    return new Promise((resolve, reject) => {
        jewellery.find().exec(function (err, jewelleries) {
            if (err) {
                reject({ err });
            } else {
                resolve(jewelleries);
            }
        });
    });
};

exports.getJewelleryById = function (id) {
  return new Promise((resolve, reject) => {
    jewellery.findOne({ _id: id }).exec(function (err, jewellery) {
      if (err) {
        reject({ err });
      } else {
        resolve(jewellery);
      }
    });
  });
};

exports.Jewellery = jewellery;