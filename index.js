const express = require("express");
const mongoose = require("mongoose");
const product = require("./router/product");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) =>
  res.send(
    '<h1 style="display: flex; justify-content: center; align-items: center; height: 100vh">Hello is my test work</h1>'
  )
);
app.use("/product", product);

const start = async () => {
  try {
    const url =
      "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    const port = process.env.PORT || 5000;
    app.listen(port, () => console.log("run " + port));
  } catch (e) {
    console.log(e);
  }
};
start();
