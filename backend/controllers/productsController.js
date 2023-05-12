let Product = require('../models/productModels');

exports.getAllProducts = async (req, res, next) => {
  const produits = await Product.find();
  res.status(200).json({
    success: true,
    count: produits.length,
    produits,
  });
};

exports.addProduct = async (req, res) => {
  const produit = new Product(req.body);
  await produit.save();
  res.status(200).json({
    success: true,
    produit,
  });
};

exports.getProductById = async (req, res, next) => {
  const produit = await Product.findOne({
    _id: req.params.idprod,
  });

  res.status(200).json({
    success: true,
    produit,
  });
};

exports.updateProduct = async (req, res) => {
  const update_prod = await Product.updateOne({
    _id: req.params.idprod,
    $set: req.body,
    new: true,
  });

  res.status(200).json({
    success: true,
    update_prod,
  });
};
exports.deleteProduct = async (req, res) => {
  const del_prod = await Product.deleteOne({ _id: req.params.idProd });
  res.status(200).json({
    deleted: true,
    del_prod,
  });
};
