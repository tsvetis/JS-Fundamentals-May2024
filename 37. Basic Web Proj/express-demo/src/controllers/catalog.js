const { create } = require("express-handlebars");
const { products } = require("../models/product");

module.exports = {
  catalog: (req, res) => {
    res.render("catalog", { products });
  },

  details: (req, res) => {
    const product = products[req.params.id];
    res.render("details", { product });
  },

  create: (req, res) => {
    res.render("create");
  },

  createPostReq: (req, res) => {
    const product = req.body;
    products.push({
      name: product.productName,
      price: Number(product.productPrice),
    });
    res.redirect("/catalog");
  },
};
