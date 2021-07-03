const { Schema, model } = require("mongoose");
const schema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true,
  },
  prise: {
    required: true,
    type: Number,
  },
  type: {
    required: true,
    type: String,
  },
  que: {
    required: true,
    type: Number,
  },
});
module.exports = model("Product", schema);
