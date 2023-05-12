const express = require('express');
const routes = express.Router();
const {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productsController');

routes.route('/products').get(getAllProducts);
routes.route('/product/:idProd').get(getProductById);
routes.route('/addproduct').post(addProduct);
routes.route('/update/:idProd').patch(updateProduct);
routes.route('/delete/:idProd').delete(deleteProduct);

module.exports = routes;
