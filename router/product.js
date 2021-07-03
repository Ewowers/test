const { Router } = require("express");
const Product = require("../model/Product");
const router = Router();
router.get("/", async (req, res) => {
  let product = await Product.find({});
  res.status(200).json(product);
});
router.get("/id=:id", async (req, res) => {
  let product = await Product.findById(req.params.id);
  res.status(200).json(product);
});
router.get("/type=:type", async (req, res) => {
  let type = req.params.type;
  type = type.split(",");
  console.log(typeof type);
  if (type.length === 1) {
    let product = await Product.find({ type: type[0] });
    res.status(200).json(product);
  } else {
    let product = [];
    for (let i = 0; i <= type.length - 1; i++) {
      let json = await Product.find({ type: type[i] });
      product = [...product, ...json];
    }
    res.status(200).json(product);
  }
});
router.post("/", async (req, res) => {
  let { name, prise, type, que } = req.body;
  let product = new Product({
    name: name,
    prise: parseInt(prise),
    type: type,
    que: parseInt(que),
  });
  await product.save();
  res.status(200);
});
router.put("/:id", async (req, res) => {
  await Product.findByIdAndUpdate(req.params.id, { ...req.body });
  res.status(200);
});
router.delete("/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
});
module.exports = router;
